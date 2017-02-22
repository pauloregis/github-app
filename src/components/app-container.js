import React, { PropTypes } from 'react';

import logo from './../logo.svg';
import Header from './header';
import Search from './search';
import UserInfo from './user-info';

const AppContainer = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred, isFetching }) => (
  <div className="App">

    <Header
      logo={logo}
    />

    <div className="App-content">
      <Search
        handleSearch={handleSearch}
        isDisabled={isFetching}
      />
      {isFetching && <div>Carregando...</div>}
      {(!isFetching && !!userinfo) &&
        <UserInfo
          userinfo={userinfo}
          repos={repos}
          starred={starred}
          getRepos={getRepos}
          getStarred={getStarred}
        />
      }

    </div>

  </div>
);

AppContainer.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
};

export default AppContainer;