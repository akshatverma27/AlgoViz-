#include "../include/rabin_karp.h"
#include "../include/json.hpp"
#include <iostream>
#include <fstream>
#include <cmath>

using namespace std;
using json = nlohmann::json;

const int d = 256;
const int q = 101; // A prime number for hash computation

vector<int> rabinKarpSearch(const string &text, const string &pattern, vector<Step> &steps, int &stepCounter)
{
    vector<int> occurrences;
    int n = text.length();
    int m = pattern.length();
    int p = 0; // hash value for pattern
    int t = 0; // hash value for text window
    int h = 1;

    for (int i = 0; i < m - 1; i++)
        h = (h * d) % q;

    for (int i = 0; i < m; i++)
    {
        p = (d * p + pattern[i]) % q;
        t = (d * t + text[i]) % q;
    }

    for (int i = 0; i <= n - m; i++)
    {
        Step step;
        step.step_id = stepCounter++;
        step.pseudocode_line = "if (p == t)";
        step.extra_info = {
            {"i", i},
            {"pattern_hash", p},
            {"text_window_hash", t}};

        if (p == t)
        {
            int j;
            for (j = 0; j < m; j++)
            {
                if (text[i + j] != pattern[j])
                    break;
            }

            if (j == m)
            {
                occurrences.push_back(i);
                step.description = "Pattern found at index " + to_string(i);
            }
            else
            {
                step.description = "Hash matched but characters did not match at index " + to_string(i);
            }
        }
        else
        {
            step.description = "Hash did not match at index " + to_string(i);
        }

        steps.push_back(step);

        if (i < n - m)
        {
            t = (d * (t - text[i] * h) + text[i + m]) % q;
            if (t < 0)
                t += q;
        }
    }

    return occurrences;
}

void rabinKarpSearchRealTime()
{
    string text, pattern;
    cout << "Enter the text: ";
    getline(cin, text);
    cout << "Enter the pattern: ";
    getline(cin, pattern);

    vector<Step> steps;
    int stepCounter = 1;
    vector<int> result = rabinKarpSearch(text, pattern, steps, stepCounter);

    json jsteps = json::array();
    for (const auto &s : steps)
    {
        json jstep;
        jstep["step_id"] = s.step_id;
        jstep["description"] = s.description;
        jstep["pseudocode_line"] = s.pseudocode_line;
        jstep["extra_info"] = s.extra_info;
        jsteps.push_back(jstep);
    }

    json output;
    output["input_text"] = text;
    output["pattern"] = pattern;
    output["matches"] = result;
    output["steps"] = jsteps;

    ofstream out("C:/Yashu Bansal/whatisthis/whatisthis/AlgoViz_Backend/output/rabin_karp.json");
    if (!out)
    {
        cerr << "Error opening output/rabin_karp.json for writing\n";
        return;
    }
    out << output.dump(4);
    out.close();

    cout << "Rabin-Karp algorithm steps saved to output/rabin_karp.json\n";
}

// int main() {
//    rabinKarpSearchRealTime();  // Call the main function to start the encoding process
//     return 0;
// }