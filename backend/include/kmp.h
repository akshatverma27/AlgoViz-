#ifndef KMP_H
#define KMP_H

#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <memory>
#include <chrono>
#include "common.h"

using namespace std;

void preprocessPattern(const string &pattern, vector<int> &lps, vector<Step> &steps, int &stepCounter);
vector<int> KMPSearch(const string &text, const string &pattern, vector<Step> &steps, int &stepCounter);
void kmpSearchRealTime();

#endif // KMP_H