'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import { fetchAndGoToAlbum } from "../action-creators/albums.js"

export default class Album extends React.Component {

  componentDidMount () {
    fetchAndGoToAlbum({id: req.params.albumId});
  }


  render () {
    selectedAlbum = this.props.selectedAlbum;

    return (
      <div className="album">
        <div>
          <h3>{ selectedAlbum.name }</h3>
          <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
        </div>
        <SongsContainer songs={selectedAlbum.songs} />
      </div>
      )
  }

}
