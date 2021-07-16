import React from 'react'
import PlaceSpace from './PlaceSpace'
export default function PlaceList(){
    return (
      <div className="PlaceList">
        <PlaceSpace
          name="Buckingham Fountain"
          address="123 evergreen rd"
          image="buckingham-fountain.png"
        />
        <PlaceSpace
          name="Chicago RiverWalk"
          address="345 evergreen rd"
          image="chicago-riverwalk.jpeg"
        />
        <PlaceSpace
          name="Metric Caffee"
          address="789 evergreen rd"
          image="metric-coffee.jpeg"
        />
        <PlaceSpace
          name="Millenium Park"
          address="999 evergreen rd"
          image="millenium-park.jpeg"
        />
      </div>
    );
}

