import React from 'react';
import { Card } from './styled'

const FollowerCard = ({user}) => {
  return (
    <Card>
      <div className="image-block">
        <img src={user.avatar_url} alt={user.login} />
      </div>

      <a href={user.html_url} rel="noreferrer" target="_blank" className="info-block">{user.login}</a>
    </Card>
  )
}

export default FollowerCard;