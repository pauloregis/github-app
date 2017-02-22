import React, { PropTypes } from 'react';

const Profile = ({ profile }) => (
  <div className="user-info__container">
    <div className="user-info-avatar">
      <img src={profile.img} alt="user avatar" />
    </div>
    <div className="repos-info">
      <h1><a href={`https://github.com/${profile.login}`}>{profile.username}</a></h1>
      <ul>
        <li><i className="ion-cube"></i> Repositórios: <strong>{profile.repos}</strong></li>
        <li><i className="ion-forward"></i> Seguidores: <strong>{profile.followers}</strong></li>
        <li><i className="ion-reply"></i> Seguindo: <strong>{profile.following}</strong></li>
      </ul>
    </div>
  </div>
);

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
};

export default Profile;