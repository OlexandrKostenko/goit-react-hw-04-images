import { Component } from "react"

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
    <header >
  <form onSubmit={this.handleSearch}>
    <button type="submit" >
      <span >Search</span>
    </button>

    <input
      onChange={this.handleChange}
      value={this.state.query}
      name='query'
      autoComplete="off"
      autoFocus
      type="text"
      placeholder="Search images and photos"
    />
  </form>
</header>
)
}};