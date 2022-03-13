import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container, { Icon } from '../../components/Container';
import api from '../../services/api';

import { Form, SubmitButton, List, ErrorMessage } from './MainStyles';
import Container, { Icon } from '../../components/Container';

class Main extends Component {

    state = {
        newRepo: '',
        repositories: [
          {
            name: 'DBSetyawan/3PS-OpenAPI-Open-Source',
            owner: {
              name: 'facebook',
              avatar_url: 'https://avatars.githubusercontent.com/u/31942002?v=4',
            },
          },
        ],
        loading: false,
        error: false,
        errorMessage: '',
      };

      componentDidMount() {
        const repositories = localStorage.getItem('repositories');
    
        repositories && this.setState({ repositories: JSON.parse(repositories) });
      }
      
      handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
      };
    
      componentDidUpdate(_, prevState) {
        const { repositories } = this.state;
    
        prevState.repositories !== repositories &&
          localStorage.setItem('repositories', JSON.stringify(repositories));
      }
}

export default Main;
