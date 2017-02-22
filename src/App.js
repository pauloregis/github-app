import React, { Component } from 'react';
import './App.css';
import AppContainer from './components/app-container';
import ajax from '@fdaciuk/ajax';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    };
  }

  getGithubApiUrl(username, type) {
    const internalUsername = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';

    return `https://api.github.com/users${internalUsername}${internalType}`;
  }

  handleSearch(e) {
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;
    const value = e.target.value;

    if (ENTER === keyCode) {
      this.setState({
        isFetching: true
      });
      ajax().get(this.getGithubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              img: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => {
          this.setState({
            isFetching: false
          });
        });
    }
  }

  getRepos(type) {
    const user = this.state.userinfo.login;

    ajax().get(this.getGithubApiUrl(user, type))
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
            name: repo.name,
            link: repo.html_url
          }))
        })
      });
  }

  render() {
    return (
      <AppContainer
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        isFetching={this.state.isFetching}
        getRepos={() => {
          this.getRepos('repos');
          if(this.state.starred.length) {
            this.setState({
              starred: []
            })
          }
        }}
        getStarred={() => {
          this.getRepos('starred');
          if(this.state.repos.length) {
            this.setState({
              repos: []
            })
          }
        }}
      />
    );
  }
}

export default App;
