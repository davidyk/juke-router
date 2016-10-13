'use strict';

import React from 'react';
import {Link} from "react-router"
 
// {params.artistId, albums, go }
export default (props) => {
  const artistId = props.params.artistId;
  const {albums, go} = props;

console.log("artistId:    ", artistId)
  //debugger;
  if(artistId){
    // for(var i = 0; i < albums.length; i++){
    //   const filteredAlbums.push 
    // }

    var filteredAlbums = albums.filter(album=> (+album.artistId === +artistId))
  }
  else{
    var filteredAlbums = albums;
  }
  // if(filteredAlbums === undefined){ filteredAlbums = [];
  //   //console.log("filteredalbums:    ", filteredAlbums)
  // }
  return (
    <div>
      <h3>Albums</h3>
      <div className="row">
        {
          filteredAlbums && filteredAlbums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <Link className="thumbnail" to={`/albums/${ album.id }`} onClick={() => go(album)}>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}