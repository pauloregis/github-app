import React from 'react';

import Profile from './profile';
import Actions from './actions';
import Repos from './repos';

const UserInfo = ({ userinfo, repos, starred, getRepos, getStarred }) => (
  <div className="user-info">

    <Profile profile={userinfo} />

    <Actions getRepos={getRepos} getStarred={getStarred} />

    {!!repos.length &&
      <Repos
        title="Repositórios"
        className="repos"
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        title="Favoritos"
        className="starred"
        repos={starred}
      />
    }


  </div>
);

export default UserInfo;