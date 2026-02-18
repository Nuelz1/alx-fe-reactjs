import axios from "axios";

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = "";

  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>${minRepos}`;

  const searchUrl = `https://api.github.com/search/users?q=${query.trim()}&page=${page}&per_page=5`;

  try {
    const searchResponse = await axios.get(searchUrl);

    const basicUsers = searchResponse.data.items;

    // Fetch detailed info for each user
    const detailedUsers = await Promise.all(
      basicUsers.map(async (user) => {
        const detailResponse = await axios.get(user.url);
        return detailResponse.data;
      })
    );

    return {
      users: detailedUsers,
      totalCount: searchResponse.data.total_count,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
