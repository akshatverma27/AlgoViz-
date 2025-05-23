#include "../include/naive.h"
#include "../include/json.hpp"
#include <iostream>
#include <fstream>

using namespace std;
using json = nlohmann::json;

vector<int> naiveSearch(const string &text, const string &pattern, vector<Step> &steps, int &stepCounter)
{
    vector<int> occurrences;
    int n = text.length();
    int m = pattern.length();

    for (int i = 0; i <= n - m; i++)
    {
        Step step;
        step.step_id = stepCounter++;
        step.pseudocode_line = "for i in 0 to n - m";
        step.extra_info = {{"i", i}};

        bool match = true;
        for (int j = 0; j < m; j++)
        {
            Step compareStep;
            compareStep.step_id = stepCounter++;
            compareStep.pseudocode_line = "if text[i + j] != pattern[j]";
            compareStep.extra_info = {{"i", i}, {"j", j}, {"text[i+j]", text[i + j]}, {"pattern[j]", pattern[j]}};

            if (text[i + j] != pattern[j])
            {
                compareStep.description = "Mismatch at text[" + to_string(i + j) + "] and pattern[" + to_string(j) + "]";
                steps.push_back(compareStep);
                match = false;
                break;
            }
            else
            {
                compareStep.description = "Match at text[" + to_string(i + j) + "] and pattern[" + to_string(j) + "]";
                steps.push_back(compareStep);
            }
        }

        if (match)
        {
            step.description = "Pattern found at index " + to_string(i);
            occurrences.push_back(i);
        }
        else
        {
            step.description = "Pattern not found at index " + to_string(i);
        }

        steps.push_back(step);
    }

    return occurrences;
}

void naiveSearchRealTime()
{
    string text, pattern;
    cout << "Enter the text: ";
    getline(cin, text);
    cout << "Enter the pattern: ";
    getline(cin, pattern);

    vector<Step> steps;
    int stepCounter = 1;
    vector<int> result = naiveSearch(text, pattern, steps, stepCounter);

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
    output["steps"] = jsteps;

    ofstream out("C:/Yashu Bansal/whatisthis/whatisthis/AlgoViz_Backend/output/naive.json");
    if (!out)
    {
        cerr << "Error opening output/naive.json for writing" << endl;
        return;
    }
    out << output.dump(4);
    out.close();

    cout << "Naive string matching steps saved to output/naive.json\n";
}

// int main() {
//     naiveSearchRealTime();
//     return 0;
// }