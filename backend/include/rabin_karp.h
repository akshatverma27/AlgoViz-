#ifndef RABIN_KARP_H
#define RABIN_KARP_H

#include "common.h"
#include <string>
#include <vector>

// Function declarations
std::vector<int> rabinKarpSearch(const std::string &text, const std::string &pattern, std::vector<Step> &steps, int &stepCounter);
void rabinKarpSearchRealTime();

#endif // RABIN_KARP_H