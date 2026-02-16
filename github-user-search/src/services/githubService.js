import axios from 'axios';

// 1. Access the token from the environment variable
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

// 2. Create the Axios instance
const githubClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    // This line attaches your "ID Card" to every request
    Authorization: token ? `Bearer ${token}` : "" 
  }
});

// 3. Define the search function
export const searchUsers = (username) => {
  // Now this request carries your token and gets the 5,000 limit!
  return githubClient.get(`/search/users?q=${username}`);
};