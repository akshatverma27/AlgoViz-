#include "../include/huffman.h"
#include <sstream>
#include <iomanip>
#include <filesystem>
#include <fstream>
#include <iostream>
#include <chrono>

using namespace std;
namespace fs = std::filesystem;

Node::Node(shared_ptr<Node> l, shared_ptr<Node> r)
    : ch('\0'), freq(l->freq + r->freq), left(l), right(r) {}

bool Compare::operator()(shared_ptr<Node> a, shared_ptr<Node> b) {
    return a->freq > b->freq;
}

shared_ptr<Node> buildHuffmanTree(const unordered_map<char, int> &freqMap,
                                vector<Step> &steps, int &stepCounter) {
    priority_queue<shared_ptr<Node>, vector<shared_ptr<Node>>, Compare> pq;

    for (const auto &pair : freqMap) {
        pq.push(make_shared<Node>(pair.first, pair.second));
        steps.push_back({
            stepCounter++,
            "Pushed leaf node '" + string(1, pair.first) + "' with freq " + to_string(pair.second),
            "2",
            {{"char", string(1, pair.first)}, {"freq", pair.second}}
        });
    }

    while (pq.size() > 1) {
        auto left = pq.top(); pq.pop();
        auto right = pq.top(); pq.pop();
        auto parent = make_shared<Node>(left, right);
        pq.push(parent);
        steps.push_back({
            stepCounter++,
            "Merged nodes with freq " + to_string(left->freq) + " and " + to_string(right->freq),
            "4",
            {{"left_freq", left->freq}, {"right_freq", right->freq}, {"parent_freq", parent->freq}}
        });
    }

    return pq.top();
}

void generateCodes(shared_ptr<Node> root, const string &code,
                 unordered_map<char, string> &huffmanCode,
                 vector<Step> &steps, int &stepCounter) {
    if (!root) return;

    if (!root->left && !root->right) {
        huffmanCode[root->ch] = code;
        steps.push_back({
            stepCounter++,
            "Assigned code to character '" + string(1, root->ch) + "': " + code,
            "6",
            {{"char", string(1, root->ch)}, {"code", code}}
        });
    }

    generateCodes(root->left, code + "0", huffmanCode, steps, stepCounter);
    generateCodes(root->right, code + "1", huffmanCode, steps, stepCounter);
}

void huffmanEncodeRealTime() {
    cout << "Starting Huffman encoding..." << endl;
    cout << "Current path: " << fs::current_path() << endl;
    
    fs::path inputPath = fs::current_path() / "input" / "huffman.txt";
    cout << "Looking for input at: " << inputPath << endl;
    
    if (!fs::exists(inputPath)) {
        cerr << "Error: Input file not found at " << inputPath << "\n";
        return;
    }

    ifstream in(inputPath);
    if (!in.is_open()) {
        cerr << "Error: Couldn't open input file\n";
        return;
    }

    string text((istreambuf_iterator<char>(in)), istreambuf_iterator<char>());
    in.close();

    if (text.empty()) {
        cerr << "Error: Input file is empty\n";
        return;
    }

    unordered_map<char, int> freqMap;
    for (char c : text) freqMap[c]++;

    vector<Step> steps;
    int stepCounter = 1;

    auto start_time = chrono::high_resolution_clock::now();
    shared_ptr<Node> root = buildHuffmanTree(freqMap, steps, stepCounter);
    unordered_map<char, string> huffmanCode;
    generateCodes(root, "", huffmanCode, steps, stepCounter);

    string encoded;
    for (char c : text) encoded += huffmanCode[c];

    auto end_time = chrono::high_resolution_clock::now();
    double time_taken_ms = chrono::duration_cast<chrono::milliseconds>(end_time - start_time).count();

    json output;
    output["input"] = text;
    output["encoded"] = encoded;
    output["time_taken_ms"] = time_taken_ms;
    output["memory_used_bytes"] = sizeof(Node) * freqMap.size() * 2;

    json jsonSteps;
    for (const auto &step : steps) {
        jsonSteps.push_back({
            {"step_id", step.step_id},
            {"description", step.description},
            {"pseudocode_line", step.pseudocode_line},
            {"extra_info", step.extra_info}
        });
    }
    output["steps"] = jsonSteps;

    fs::path outputPath = fs::current_path() / "output" / "huffman.json";
    ofstream out(outputPath);
    if (!out.is_open()) {
        cerr << "Error: Couldn't write to output file\n";
        return;
    }
    out << setw(4) << output;
    out.close();

    cout << "Huffman encoding complete. Output saved to " << outputPath << "\n";
}