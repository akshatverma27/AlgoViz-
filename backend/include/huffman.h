#ifndef HUFFMAN_H
#define HUFFMAN_H

#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
#include <queue>
#include <memory>
#include <chrono>
#include <fstream>
#include "../include/json.hpp"
#include "common.h"

using namespace std;
using json = nlohmann::json;

// Node for Huffman Tree
struct Node {
    char ch;
    int freq;
    shared_ptr<Node> left, right;
    Node(char c, int f) : ch(c), freq(f), left(nullptr), right(nullptr) {}
    Node(shared_ptr<Node> l, shared_ptr<Node> r);
};

// Comparator for priority queue
struct Compare {
    bool operator()(shared_ptr<Node> a, shared_ptr<Node> b);
};

// Core Functions
shared_ptr<Node> buildHuffmanTree(const unordered_map<char, int> &freqMap,
                                  vector<Step> &steps, int &stepCounter);
void generateCodes(shared_ptr<Node> root, const string &code,
                   unordered_map<char, string> &huffmanCode,
                   vector<Step> &steps, int &stepCounter);
void huffmanEncodeRealTime();

#endif // HUFFMAN_H