// 1. Import the Axios library so we can make HTTP requests
import axios from 'axios';

/**
 * 2. This function takes a 'username' (the string from our Search state)
 * and sends it to GitHub.
 */
export const fetchUserData = async (username) => {
  
  // 3. Define the "Address" we are visiting
  const url = `https://api.github.com/users/${username}`;

  // 4. Use a try/catch block to handle "Happy Path" vs "Error Path"
  try {
    // 5. 'await' tells JavaScript: "Wait here until GitHub answers"
    // axios.get sends the request to the URL
    const response = await axios.get(url);

    // 6. 'response.data' contains the actual JSON from GitHub (name, bio, etc.)
    return response.data;

  } catch (error) {
    // 7. If GitHub sends a 404 (User Not Found) or 500 (Server Down), this runs
    console.error("Error fetching data from GitHub:", error);
    
    // 8. We "re-throw" the error so our React component knows something went wrong
    throw error;
  }
};