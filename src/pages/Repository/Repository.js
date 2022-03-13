import React, { Component } from 'react';

export default class Repository extends Component {
    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          repo: PropTypes.string,
        }),
      }).isRequired,
    };
  
    state = {
      repo: {},
      issues: [],
      loading: true,
      filters: [
        { state: 'all', label: 'All Issues', active: true },
        { state: 'open', label: 'Open', active: false },
        { state: 'closed', label: 'Closed', active: false },
      ],
      filterIndex: 0,
      page: 1,
    };
  
    async componentDidMount() {
      const { match } = this.props;
      const { filters } = this.state;
  
      const repoName = decodeURIComponent(match.params.repo);
  
      const [repo, issues] = await Promise.all([
        await api.get(`/repos/${repoName}`),
        await api.get(`/repos/${repoName}/issues`, {
          params: {
            state: filters.find(filter => filter.active).state,
            per_page: 4,
          },
        }),
      ]);
  
      this.setState({
        repo: repo.data,
        issues: issues.data,
        loading: false,
      });
    }
  
    loadFilters = async () => {
      const { match } = this.props;
      const { filters, filterIndex, page } = this.state;
  
      const repoName = decodeURIComponent(match.params.repo);
  
      const response = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters[filterIndex].state,
          per_page: 4,
          page,
        },
      });
  
      this.setState({ issues: response.data });
    };
  
    handleFilters = async filterIndex => {
      await this.setState({ filterIndex });
      this.loadFilters();
    };
  
    handlePage = async action => {
      const { page } = this.state;
      await this.setState({ page: action === 'back' ? page - 1 : page + 1 });
      this.loadFilters();
    };
  
  
}