'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import {fetchAndGoToAlbum} from '../action-creators/albums.js'

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

// const mapDispatchToProps = dispatch => ({
//   grabAlbum: album => dispatch(fetchAndGoToAlbum(album))
// });

export default connect(
  mapStateToProps
)(Album);