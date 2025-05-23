#include <iostream>
#include <filesystem>
#include "../include/huffman.h"
#include "../include/common.h"

namespace fs = std::filesystem;

int main() {
    // Verify input file exists
    fs::path inputPath = fs::current_path() / "input" / "huffman.txt";
    if (!fs::exists(inputPath)) {
        std::cerr << "Error: Input file not found at " << inputPath << "\n";
        return 1;
    }

    // Verify output directory exists
    fs::path outputDir = fs::current_path() / "output";
    if (!fs::exists(outputDir)) {
        if (!fs::create_directory(outputDir)) {
            std::cerr << "Error: Failed to create output directory\n";
            return 1;
        }
    }

    std::cout << "Starting Huffman Encoding...\n";
    std::cout << "Input file: " << inputPath << "\n";
    std::cout << "Working directory: " << fs::current_path() << "\n";

    try {
        huffmanEncodeRealTime();
        std::cout << "Huffman encoding completed successfully\n";
        return 0;
    } catch (const std::exception& e) {
        std::cerr << "Error during Huffman encoding: " << e.what() << "\n";
        return 1;
    }
}