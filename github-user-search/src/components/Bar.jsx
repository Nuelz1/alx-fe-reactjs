import React, { useState } from 'react';
// 1. Import our delivery truck (the function we just wrote)
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  
  // 2. New state to hold the actual user data once it arrives
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Searching for", username  );
    
    // 3. Clear the previous user data so the screen resets
    setUserData(null);

    try {
      // 4. Call the API. We 'await' here because it takes time.
      const data = await fetchUserData(username);
      console.log("2. Data received from GitHub:", data);
      
      // 5. Save the result into our state so React displays it
      setUserData(data);
    } catch (error) {
        console.error("23. API Error:", error.message);
      alert("User not found!");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* 6. "Conditional Rendering": Only show this div if userData exists */}
      {userData && (
        <div className="result-card">
          {/* 7. Display the user's avatar and name */}
          <img src={userData.avatar_url} alt={userData.name} width="100" />
          <h2>{userData.name || "No name provided"}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;