import React, { createContext, useState } from 'react';
export const ArtContext = createContext();

const ArtContextProvider = (props) => {
  const [artData, setArtData] = useState(null);

  const loadArtData = (artData) => {
    setArtData(artData)
  };
  return (
    <ArtContext.Provider value={{ artData, loadArtData }}>
      {props.children}
    </ArtContext.Provider>
  );
}
 
export default ArtContextProvider;