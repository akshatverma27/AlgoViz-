#include <iostream>
#include <filesystem>
#include "../include/rabin_karp.h"
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

    std::cout << "Starting Rabin-Karp String Matching...\n";
    std::cout << "Working directory: " << fs::current_path() << "\n";

    try {
        rabinKarpSearchRealTime();
        std::cout << "Rabin-Karp search completed successfully\n";
        return 0;
    } catch (const std::exception& e) {
        std::cerr << "Error during Rabin-Karp search: " << e.what() << "\n";
        return 1;
    }
}