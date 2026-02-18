import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  // Form state
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  // Results state
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch data function (reusable for pagination)
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

      // Append new users (important for pagination)
      setUsers((prevUsers) => [...prevUsers, ...result.users]);

      // Determine if more pages likely exist
      setHasMore(result.users.length > 0);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Initial search submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset before new search
    setUsers([]);
    setPage(1);

    fetchData(1);
  };

  // Load more handler
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">
          Advanced GitHub User Search
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <p className="text-center mt-6 text-gray-600">
          Loading...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center mt-6 text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      {/* No Results */}
      {!loading && users.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No users found.
        </p>
      )}

      {/* Results Grid */}
      {users.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 mx-auto rounded-full"
              />

              <h2 className="mt-3 font-semibold">
                {user.name || user.login}
              </h2>

              <p className="text-gray-600">
                📍 {user.location || "Location not specified"}
              </p>

              <p className="text-gray-600">
                📦 Repositories: {user.public_repos}
              </p>

              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && !loading && users.length > 0 && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
