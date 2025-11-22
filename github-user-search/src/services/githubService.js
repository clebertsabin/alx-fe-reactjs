import axios from "axios";

const SEARCH_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
    try {
        let query = "";

        if (username) query += `${username} in:login`;
        if (location) query += location ? ` location:${location}` : "";
        if (minRepos) query += minRepos ? ` repos:>${minRepos}` : "";

        if (!query) throw new Error("Please enter at least one search field");

        const headers = {};

        if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
            headers["Authorization"] = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
        }

        const response = await axios.get(`${SEARCH_URL}?q=${query}&page=${page}&per_page=10`, {
            headers,
        });

        return response.data;
    } catch (error) {
        console.error("GitHub API Error:", error.response?.data || error.message);
        throw new Error("Search failed");
    }
};


async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  // GitHub user data
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
}
