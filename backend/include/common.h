#ifndef COMMON_H
#define COMMON_H

#include <string>
#include <unordered_map>
#include "../include/json.hpp"

using json = nlohmann::json;

// Shared Step structure
struct Step {
    int step_id;
    std::string description;
    std::string pseudocode_line;
    json extra_info;
};

// Serialization support for nlohmann::json
inline void to_json(nlohmann::json &j, const Step &s) {
    j = nlohmann::json{
        {"step_id", s.step_id},
        {"description", s.description},
        {"pseudocode_line", s.pseudocode_line},
        {"extra_info", s.extra_info}
    };
}

inline void from_json(const nlohmann::json &j, Step &s) {
    j.at("step_id").get_to(s.step_id);
    j.at("description").get_to(s.description);
    j.at("pseudocode_line").get_to(s.pseudocode_line);
    j.at("extra_info").get_to(s.extra_info);
}

#endif // COMMON_H