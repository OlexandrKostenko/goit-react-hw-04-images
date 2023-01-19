import { Component } from "react";
import { SearchBar } from "./SearchBar/SearchBar";
import {Loader} from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import axios from "axios";
import { Wrapper } from "./App.styled";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state= {
    query: '',
    page: 1,
    status: 'idle',
    images: [],
    totalHits: 0,
    src: '',
    alt: '',
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
    this.setState({status: 'pending'});
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
    } finally {
      this.setState({status: 'success'})
    }
  }

  handleSubmit = query => {
    this.setState({query, images:[], page: 1});
  };

  handleLoadMore = () => {
    if (this.state.query !== '') {
      this.setState(prevState => ({ page: prevState.page +1 }))
    }
  };

  handleImageClick = event => {
    this.setState({ src: event.target.src, alt: event.target.alt});
  }

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.setState({src: '', alt:''});
    }
  }

  handleKeyDown = event => {
    if(event.key === 'Escape') {
      this.setState({src: '', alt:''});
    }
  }

  render () {
    const {status, totalHits, images, src, alt} = this.state;
    return(
    <Wrapper>
      <SearchBar onSubmit={this.handleSubmit}></SearchBar>
      {status === 'pending' && <Loader></Loader>}
      {totalHits > 0 && <ImageGallery 
      images={images}
      totalHits={totalHits}
      onImageClick={this.handleImageClick}
      ></ImageGallery>}
      {images.length < totalHits ? <Button onClick={this.handleLoadMore}></Button> : null}
      {src && <Modal src={src} alt={alt} onClick={this.handleOverlayClick} onEscPress={this.handleKeyDown}></Modal>}
    </Wrapper>
  )};
};
