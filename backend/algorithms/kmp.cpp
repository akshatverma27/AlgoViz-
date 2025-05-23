#include <fstream>
#include "../include/kmp.h"

void preprocessPattern(const string &pattern, vector<int> &lps, vector<Step> &steps, int &stepCounter) {
    int len = 0;
    lps[0] = 0;
    for (int i = 1; i < pattern.length(); ++i) {
        while (len > 0 && pattern[len] != pattern[i]) {
            len = lps[len - 1];
            steps.push_back({stepCounter++, "Mismatch at position " + to_string(i), "3", {{"i", i}, {"len", len}}});
        }

        if (pattern[len] == pattern[i]) {
            len++;
        }
        lps[i] = len;
        steps.push_back({stepCounter++, "Computed LPS[" + to_string(i) + "] = " + to_string(len), "4", {{"i", i}, {"LPS", len}}});
    }
}

vector<int> KMPSearch(const string &text, const string &pattern, vector<Step> &steps, int &stepCounter) {
    vector<int> lps(pattern.length(), 0);
    preprocessPattern(pattern, lps, steps, stepCounter);

    vector<int> result;
    int i = 0, j = 0;
    while (i < text.length()) {
        if (pattern[j] == text[i]) {
            i++;
            j++;
        }

        if (j == pattern.length()) {
            result.push_back(i - j);
            j = lps[j - 1];
        } else if (i < text.length() && pattern[j] != text[i]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
        
        // Add visualization step for each comparison
        steps.push_back({stepCounter++, "Text character " + string(1, text[i]) + " compared to pattern character " + string(1, pattern[j]), "5", {{"i", i}, {"j", j}}});
    }
    return result;
}

void kmpSearchRealTime() {
    cout << "Enter text: ";
    string text;
    getline(cin, text);
    cout << "Enter pattern: ";
    string pattern;
    getline(cin, pattern);

    vector<Step> steps;
    int stepCounter = 1;
    auto start_time = chrono::high_resolution_clock::now();

    vector<int> matches = KMPSearch(text, pattern, steps, stepCounter);

    auto end_time = chrono::high_resolution_clock::now();
    double time_taken_ms = chrono::duration<double, milli>(end_time - start_time).count();
    size_t memory_used = sizeof(char) * (text.length() + pattern.length());

    json output;
    output["input_text"] = text;
    output["pattern"] = pattern;
    output["matches"] = matches;
    output["time_taken_ms"] = time_taken_ms;
    output["memory_used_bytes"] = memory_used;

    json jsonSteps = json::array();
    for (auto &step : steps) {
        json js;
        js["step_id"] = step.step_id;
        js["description"] = step.description;
        js["pseudocode_line"] = step.pseudocode_line;
        js["extra_info"] = step.extra_info;
        jsonSteps.push_back(js);
    }

    output["steps"] = jsonSteps;

    ofstream out("C:/Yashu Bansal/whatisthis/whatisthis/AlgoViz_Backend/output/kmp.json");
    out << setw(4) << output;
    out.close();

    cout << "KMP search complete. Output saved to output/kmp.json\n";
}

//int main() {
//    kmpSearchRealTime();  // Call the main function to start the KMP search process
//    return 0;
//}