#include <iostream>
#include <filesystem>
#include "../include/naive.h"
#include "../include/common.h"

namespace fs = std::filesystem;

int main() {
    // Verify output directory exists
    fs::path outputDir = fs::current_path() / "output";
    if (!fs::exists(outputDir)) {
        if (!fs::create_directory(outputDir)) {
            std::cerr << "Error: Failed to create output directory\n";
            return 1;
        }
    }

    std::cout << "Starting Naive String Matching...\n";
    std::cout << "Working directory: " << fs::current_path() << "\n";

    try {
        naiveSearchRealTime();
        std::cout << "Naive search completed successfully\n";
        return 0;
    } catch (const std::exception& e) {
        std::cerr << "Error during naive search: " << e.what() << "\n";
        return 1;
    }
}