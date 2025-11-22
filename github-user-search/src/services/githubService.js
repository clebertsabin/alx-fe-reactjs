import axios from "axios";

const SEARCH_URL = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async ({
    username = "",
    location = "",
    minRepos = "",
    page = 1,
    perPage = 10
} = {}) => {
    try {
        if (username && !location && !minRepos) {
            try {
                const user = await fetchUserData(username);
                return { items: [user] }; 
            } catch (err) {
                
            }
        }

        let queryParts = [];
        if (username) queryParts.push(`${username} in:login`);
        if (location) queryParts.push(`location:${location}`);
        if (minRepos) queryParts.push(`repos:>=${minRepos}`);

        const query = queryParts.join(" ");

        if (!query) throw new Error("Please enter at least one search field");

        const headers = {};
        if (import.meta.env.VITE_APP_GITHUB_API_KEY) {
            headers["Authorization"] = `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`;
        }

        const response = await axios.get(
            `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
            { headers }
        );

        if (!response.data.items || response.data.items.length === 0) {
            throw new Error("Looks like we can't find the user");
        }

        return response.data;
    } catch (error) {
        console.error("GitHub API Error:", error.response?.data || error.message);
        throw new Error("Looks like we can't find the user");
    }
};

 export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;  
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error;
  }
}
