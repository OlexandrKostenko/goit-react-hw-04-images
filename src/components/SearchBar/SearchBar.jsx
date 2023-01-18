import { Component } from "react";
import { PropTypes } from 'prop-types';
import { SearchBarStyled, SearchButton, SearchButtonLabel, SearchForm, SearchInput } from "./SearchBar.styled";

export class SearchBar extends Component {
    state = {
        query: '',
    }

    handleSearch = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({query: ''});
    };

    handleChange = event => {
        this.setState({query: event.target.value});
    };

    render() {
    return (
    <SearchBarStyled>
  <SearchForm onSubmit={this.handleSearch}>
    <SearchButton type="submit" >
      <SearchButtonLabel >Search</SearchButtonLabel>
    </SearchButton>

    <SearchInput
      onChange={this.handleChange}
      value={this.state.query}
      name='query'
      autoComplete="off"
      autoFocus
      type="text"
      placeholder="Search images and photos"
    />
  </SearchForm>
</SearchBarStyled>
)
}};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}