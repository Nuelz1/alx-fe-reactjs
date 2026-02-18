import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (pageNumber) => {
    setLoading(true);
    setError(false);
    try {
      const result = await searchUsers({
        username,
        location,
        minRepos,
        page: pageNumber,
      });
      setUsers((prevUsers) => [...prevUsers, ...result.users]);
      setHasMore(result.users.length > 0);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsers([]);
    setPage(1);
    fetchData(1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 space-y-6 transition-transform transform hover:scale-[1.01]"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Advanced GitHub User Search
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />

          <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 shadow-md transition"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-6 text-gray-600 font-medium">Loading...</p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center mt-6 text-red-500 font-medium">
          Something went wrong. Please try again.
        </p>
      )}

      {/* No Results */}
      {!loading && users.length === 0 && (
        <p className="text-center mt-6 text-gray-500 font-medium">
          No users found.
        </p>
      )}

      {/* Results Grid */}
      {users.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-28 h-28 mx-auto rounded-full border-2 border-gray-200"
              />

              <h2 className="mt-4 font-semibold text-xl text-gray-800">
                {user.name || user.login}
              </h2>

              <p className="text-gray-600 mt-1">📍 {user.location || "N/A"}</p>
              <p className="text-gray-600 mt-1">📦 Repositories: {user.public_repos}</p>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 hover:underline font-medium"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && !loading && users.length > 0 && (
        <div className="text-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 shadow-md transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
