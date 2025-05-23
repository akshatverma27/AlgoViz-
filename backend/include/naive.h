#ifndef NAIVE_H
#define NAIVE_H

#include <string>
#include <vector>
#include "common.h"

std::vector<int> naiveSearch(const std::string& text, const std::string& pattern, std::vector<Step>& steps, int& stepCounter);
void naiveSearchRealTime();

#endif // NAIVE_H