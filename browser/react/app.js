'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import ArtistContainer from './containers/ArtistContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import SongsContainer from './containers/SongsContainer';
import Album from "./components/Album.js";

import {Router, Route, hashHistory, IndexRedirect} from "react-router";


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/artists"/>
        <Route path="/albums" component= {AlbumsContainer}/>
        <Route path="/albums/:albumId" component={AlbumContainer}/>
        <Route path="/artists" component= {ArtistsContainer}/>
        <Route path="/artists/:artistId" component={ArtistContainer}>
        	<Route path="/artists/:artistId/albums" component={AlbumsContainer}/>
        	<Route path="/artists/:artistId/songs" component={SongsContainer}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);


        // <IndexRoute component= {AlbumsContainer}/>

