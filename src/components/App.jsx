import { SearchBar } from "./SearchBar/SearchBar";
import {Loader} from "./Loader/Loader";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import axios from "axios";
import { Wrapper } from "./App.styled";
import { Button } from "./Button/Button";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [images, setImages] = useState([]);
  const [totalHits, setTotalHits] = useState(0);

  
  useEffect(() => {
    const handleFetch = async () => {
      setStatus('pending');

      try {
        const results = await fetch(query, page);
        const { hits, totalHits } = results.data;

        setTotalHits(totalHits);
        setImages(prev => [...prev, ...hits])

        if (hits.lengts === 0) {
          return alert('We can not find images with this name');
        }
      } catch (error) {
        console.log(error)
      } finally {
        setStatus('success');
      }
    }
    if (query) {
      handleFetch();
    }
  }, [query, page]);

  const fetch = async (query, page) => {
    try {
      const API_KEY = '30972640-fd90cea4a7431b6e8e60cb6a9';
      const options = 'image_type=photo&orientation=horizontal&per_page=12';
      const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&${options}&page=${page}`

      return await axios.get(url);
    } catch (error) {
      console.log(error);
    };
  };

  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    if (query !== '') {
      setPage(prev => prev + 1);
    }
  };
 
  return (
    <Wrapper>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {status === 'pending' && <Loader></Loader>}
      {totalHits > 0 && <ImageGallery
        images={images}
        totalHits={totalHits}
      ></ImageGallery>}
      {images.length < totalHits ? <Button onClick={handleLoadMore}></Button> : null}
    </Wrapper>
  )
};
