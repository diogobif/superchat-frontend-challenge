import React from 'react';
import { Card } from './styled';

const RepoCard = ({repo}) => {

  function copyToClipboard() {
    navigator.clipboard.writeText(repo.clone_url).then(function() {
      alert("Url copied to clipboard!");
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }
  
  return (
    <Card>
      <span className="repo-title">{repo.name}</span>
      <span className="repo-desc">{repo.description}</span>
      <div className="line">
        <a href={repo.html_url} className="btn btn-primary" target="_blank" rel="noreferrer">Open</a>
        <button type="button" className="btn btn-primary" onClick={() => copyToClipboard()} target="_blank" rel="noreferrer">Clone</button>
      </div>
    </Card>
  );
}

export default RepoCard;