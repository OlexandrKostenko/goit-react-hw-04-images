import { Component } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import {Loader} from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import axios from "axios";



export class App extends Component {
  state= {
    query: '',
    page: 1,
    status: 'idle',
    images: [],
    totalHits: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const {query, page} = this.state;
    if( (prevState.page !== page&&page >1)||(query !== prevState.query && query !== '')) {
      this.handleFetch();
    }
  };

   async fetch (query, page = 1) {
    try{
      const API_KEY = '30972640-fd90cea4a7431b6e8e60cb6a9';
      const options = 'image_type=photo&orientation=horizontal&per_page=12';
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&${options}&page=${page}`

      return await axios.get(url);
    } catch (error) {
      console.log(error);
    };
  };

  handleFetch = async () => {
    this.setState({status: 'loading'});
    try {
      const { query, page} = this.state;
      const results = await this.fetch(query, page);
      const {hits, totalHits} = results.data;

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits,
      }))
      if (hits.lengts === 0) {
        return alert ('We can not find images with this name');
    }
    } catch (error){
      console.log(error)
    }
  }

  handleSubmit = query => {
    this.setState({query});
  };

  handleLoadMore = () => {
    if (this.state.query !== '') {
      this.setState(prevState => ({ page: prevState.page +1 }))
    }
  };

  render () {
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar onSubmit={this.handleSubmit}></SearchBar>
      <Loader></Loader>
      <ImageGallery images={this.state.images}
      totalHits={this.state.totalHits}></ImageGallery>
    </div>
  )};
};
