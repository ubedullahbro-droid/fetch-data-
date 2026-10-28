import React from "react";

function GithubCard({ user }) {
  return (
    <div className="github-card">
      <img src={user.avatar_url} alt={user.login} />

      <h2>{user.login}</h2>

      <p>User ID: {user.id}</p>

      <a href={user.html_url} target="_blank" rel="noreferrer">
        View GitHub Profile
      </a>
    </div>
  );
}

export default GithubCard;