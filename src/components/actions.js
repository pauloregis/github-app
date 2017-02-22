import React, { PropTypes } from 'react';

const Actions = ({ getRepos, getStarred }) => (
  <div className="actions">
    <button onClick={getRepos}><i className="ion-cube"></i> Ver repositórios</button>
    <button onClick={getStarred}><i className="ion-ios-heart"></i> Ver favoritos</button>
  </div>
);

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
};

export default Actions;