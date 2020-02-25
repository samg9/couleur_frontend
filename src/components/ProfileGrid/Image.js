import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 1.75em auto;
  cursor: pointer;
  height: 400px;
  transition: 0.5s all ease-in;
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: calc(75% - 50px);
  margin: 5px auto;
`;
const SwatchColor = styled.img`
    padding: 10px ;
    border: 1px solid white ;
    width: 50px;
`

function Image({ image, hexes }) {
  return (
    <ImgContainer >

      <Img src={image} onClick={() => { navigator.clipboard.writeText(hexes) }}
      />
      {hexes.map((item, i) =>
        <SwatchColor style={{ 'backgroundColor': item }} key={i} />
      )
      }
    </ImgContainer>
  );
}
export default Image;