import React from 'react';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  height: 400px;
  transition: 0.5s all ease-in;
`;
const ImgIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-right: 20px;
  svg {
    margin-right: 10px;
  }
`;
const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: calc(75% - 50px);
`;


const SwatchColor = styled.img`
    padding: 10px ;
    border: 1px solid white ;
    width: 50px
`

function Image({ image, hexes }) {
  return (
    <ImgContainer >

      <Img src={image} onClick={() => { navigator.clipboard.writeText(hexes) }}
      />
      {/* {copySuccess ? <div className="alert alert-success">
        <strong>Success!</strong> Indicates a successful or positive action.
                    </div>
        : ""} */}
      <ImgMeta>
        <ImgIcons>
          {/* {image.isVideo ? <Play /> : <Heart />} {image.likes} */}
        </ImgIcons>
        <ImgIcons>
          {/* <Comment /> {image.comments} */}
        </ImgIcons>
      </ImgMeta>
      {hexes.map((item, i) =>
        <SwatchColor style={{ 'backgroundColor': item }} key={i} />
      )
      }
    </ImgContainer>
  );
}
export default Image;