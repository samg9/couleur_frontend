import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 10px);
  margin: .75em auto;
  cursor: pointer;
  height: 400px;
  transition: 0.5s all ease-in;
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: calc(85% - 50px);
  margin: -3px;
`;
const SwatchColor = styled.img`
    flex-basis: 100%;
    margin: 0px 0px 0px 0px;
    border: .1px solid white ;
    width: calc(11.7% - 1px);
    height: 100px;
`

function Image({ copy, image, hexes }) {
  return (
    <ImgContainer >

      <Img src={image} onClick={() => copy(hexes)}
      />
      {hexes.map((item, i) =>
        <SwatchColor style={{ 'backgroundColor': item }} key={i} />
      )
      }
    </ImgContainer>
  );
}
export default Image;