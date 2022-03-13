import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

}