import { useState } from "react";
import { fetchAdvancedUsers, fetchUserData} from "../services/githubService";

function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setPage(1);

    try {
        if (username.trim() !== "") {
            try {
                const user = await fetchUserData(username);
                setResults([user]);
                return; 
            } catch (err) {
                setResults(["Looks like we cant find the user"])
            }
        }

        const data = await fetchAdvancedUsers(username, location, minRepos, 1);

        if (!data.items || data.items.length === 0) {
            setResults(["Looks like we cant find the user"])
            setError("Looks like we cant find the user");
        } else {
            setResults(data.items);
        }

    } catch (err) {
        setResults(["Looks like we cant find the user"])
        setError("Looks like we cant find the user");
    } finally {
        setLoading(false);
    }
};



    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">

            <form onSubmit={handleAdvancedSearch} className="space-y-4">

                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input
                    type="number"
                    className="w-full px-4 py-2 border rounded"
                    placeholder="Minimum Repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />

                <button className="w-full py-2 bg-blue-600 text-white rounded">
                    Advanced Search
                </button>
            </form>

            {loading && <p className="mt-4 text-blue-600">Loading...</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}

            {/* Results */}
            <div className="mt-6 space-y-4">
                {results.map((user) => (
                    <div
                        key={user.id}
                        className="flex items-center gap-4 p-4 border rounded bg-gray-50"
                    >
                        <img
                            src={user.avatar_url}
                            className="w-16 h-16 rounded-full"
                        />
                        <div>
                            <p className="font-bold">{user.login}</p>
                            <a
                                href={user.html_url}
                                target="_blank"
                                className="text-blue-600 underline"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {results.length > 0 && (
                <button
                    onClick={loadMore}
                    className="w-full mt-4 py-2 bg-gray-800 text-white rounded"
                >
                    Load More
                </button>
            )}
        </div>
    );
}

export default Search;
