#include <iostream>
#include <string>
#include "../include/common.h"
#include "../include/huffman.h"
#include "../include/kmp.h"
#include "../include/rabin_karp.h"
#include "../include/naive.h"

using namespace std;

int main(int argc, char* argv[]) {
    if (argc < 2) {
        cerr << "Usage: algoviz <algorithm>\n";
        cerr << "Available algorithms: huffman, kmp, rabin_karp, naive\n";
        return 1;
    }

    string algorithm = argv[1];
    
    if (algorithm == "huffman") {
        huffmanEncodeRealTime();
    } 
    else if (algorithm == "kmp") {
        kmpSearchRealTime();
    }
    else if (algorithm == "rabin_karp") {
        rabinKarpSearchRealTime();
    }
    else if (algorithm == "naive") {
        naiveSearchRealTime();
    }
    else {
        cerr << "Invalid algorithm specified!\n";
        return 1;
    }

    return 0;
}