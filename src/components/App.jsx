import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import React from 'react';
export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    pageNr: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const inputForSearch = e.target.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      return;
    }
    const response = await fetchImages(inputForSearch.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      currentSearch: inputForSearch.value,
      pageNr: 1,
    });
  };
}