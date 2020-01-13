import React from 'react';
import styled from 'styled-components';
import './FaceRecognition.css';
import SingleImage from './Image.js';


const feedsource = [
  {
    source:
      'https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/80474108_2292172297742904_8720493052155632384_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fMXxL6HDDeIAX9-KVbI&oh=475fcaa302eff54d91cc3c07293bb632&oe=5EA8C484',
    likes: '43',
    comments: '3',
    isVideo: false,
    id: 0,
  },
  {
    source: 'https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg',
    likes: '313',
    comments: '10',
    isVideo: true,
    id: 1,
  },
  {
    source: 'https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_01.jpg',
    likes: '29',
    comments: '2',
    isVideo: false,
    id: 2,
  },
  {
    source:
      'https://scontent-lhr3-1.cdninstagram.com/vp/3c9520014265a02a446841b20c529066/5D188BE1/t51.2885-15/e35/c135.0.810.810/s240x240/14294939_1218250054909378_1762757626_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com',
    likes: '18',
    comments: '2',
    isVideo: false,
    id: 3,
  },
  {
    source:
      'https://scontent-lhr3-1.cdninstagram.com/vp/34afcdf7b06fc1f4a6b1a0e7985ebe1a/5D24FDF9/t51.2885-15/e35/c135.0.810.810/s480x480/14240669_1005823466206583_2103344102_n.jpg?_nc_ht=scontent-lhr3-1.cdninstagram.com',
    likes: '30',
    comments: '4',
    isVideo: false,
    id: 4,
  },
];

const data = [
  {
    id: 0,
    hexes: [
      "#201d1b",
      "#c1b8ac",
      "#38322f",
      "#766c63",
      "#ece5dc"
    ],
    source: 'https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/81957336_2445921395646650_4777805263679442706_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=6R3tbxbQKcoAX-sLiEj&oh=eb5e6f1f2a659c91e69453f87ca003ba&oe=5E954A5A'
  },
  {
    id: 1,
    hexes: [
      "#b1bfcc",
      "#1d1e22",
      "#9fb1c0",
      "#61707d",
      "#c1cad5"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/81437428_180811882997488_9142996044963542828_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=rIlhVTrzVzAAX-kzjs1&oh=50280bbc62a7e48942770e21b150af7b&oe=5E936A7B"
  },
  {
    id: 2,
    hexes: [
      "#9d7f49",
      "#765e31",
      "#50391d",
      "#c3a46a",
      "#1f210d"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/81782041_540665729863190_6482520691844286583_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=4qL8Bo5rBHEAX8KeyI2&oh=c83ba0eb57469eb2dcc5370f8c05f767&oe=5E9904EA"
  },
  {
    id: 3,
    hexes: [
      "#191f10",
      "#d0dbde",
      "#453421",
      "#b3cad1",
      "#7a816e"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/82801882_111435373549964_5828060754753594896_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=amWSd0ABhSMAX8lSmwK&oh=fa0cef388073b49d4fd097856ae7a49e&oe=5EA20195"
  },
  {
    id: 4,
    hexes: [
      "#3e3e3b",
      "#cfdde3",
      "#7bb6cd",
      "#608290",
      "#a6c0cb"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/80474108_2292172297742904_8720493052155632384_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=fMXxL6HDDeIAX9-KVbI&oh=475fcaa302eff54d91cc3c07293bb632&oe=5EA8C484"
  },
  {
    id: 5,
    hexes: [
      "#503d33",
      "#e7af63",
      "#ab6e44",
      "#3c2c27",
      "#694531"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/81942169_530347377863970_3424320618476427921_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f047J1vqoCIAX-WTzQV&oh=f641e42e6856488dda4120d7b994a32c&oe=5E93C3D9"
  },
  {
    id: 6,
    hexes: [
      "#7e9daf",
      "#1d2c24",
      "#b0c3d2",
      "#d8e2ec",
      "#4a6262"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/80722077_157250808916326_5669474111951618148_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=-XYBdsC3jfYAX_hcEF8&oh=56dfce6cbcf1f0beda4f829786bb84e3&oe=5E932B62"
  },
  {
    id: 7,
    hexes: [
      "#403e31",
      "#16190e",
      "#2a3222",
      "#5b675f",
      "#b9c1bd"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/80078519_571811890279888_929098907250011793_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Ecq1UuRCRDwAX-AAu4s&oh=b934b1b30965ac883cb6d3f9e2286115&oe=5EA4B96B"
  },
  {
    id: 8,
    hexes: [
      "#453f24",
      "#161209",
      "#2a2615",
      "#a1a465",
      "#656337"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/76731482_510162016286008_5068908892862101032_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=4U7zIq1GvE0AX-sM1w9&oh=0e79a643e4da014d493fdae77e3c381f&oe=5E9323C3"
  },
  {
    id: 9,
    hexes: [
      "#959593",
      "#131414",
      "#2f3136",
      "#c2b094",
      "#6a6765"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/81640348_742963976190476_303108637509246098_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=I9ofZ2ue3A0AX-9LzpG&oh=dd68b13a9ee024a788808d1e4d92b8cd&oe=5EA00D4F"
  },
  {
    id: 10,
    hexes: [
      "#161f1a",
      "#5f6d55",
      "#202b23",
      "#314430",
      "#9da193"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/78781374_554118635444981_4135424122402958741_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=OaYUhTSI0ksAX_mna5D&oh=526a0442d9c981c5fcea5cf80ce0c7ba&oe=5EA6DD16"
  },
  {
    id: 11,
    hexes: [
      "#3f3f2e",
      "#8a9c9f",
      "#5d5b41",
      "#bacacf",
      "#27271b"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/80804214_525360171657254_7479895271875728296_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Ym0vlSwgTE0AX99SadF&oh=1e031b8b1fe18ffa8dc9db912e2f9dca&oe=5EA86BD8"
  }
]

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;
const ProfileDetails = styled.div`
  display: flex;
`;
const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
const HeadingThreeText = styled.h3``;
const ParagraphText = styled.p`
  margin-right: 25px;
`;
const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;
const ProfileDetailsName = styled.div`
  text-align: left;
`;
const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const FaceRecognition = () => {
  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        </ProfileDetailsLeft>
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>yomieluwande</HeadingThreeText>
            <EditProfileButton>Edit profile</EditProfileButton>
          </ProfileDetailsUsername>
          <ProfileDetailsMeta>
            <ParagraphText>
              <strong>5</strong> posts
            </ParagraphText>
            <ParagraphText>
              <strong>296</strong> followers
            </ParagraphText>
            <ParagraphText>
              <strong>269</strong> following
            </ParagraphText>
          </ProfileDetailsMeta>
          <ProfileDetailsName>
            <ParagraphText>
              <strong>Yomi</strong>
            </ParagraphText>
          </ProfileDetailsName>
        </ProfileDetailsRight>
      </ProfileDetails>
      <ImagesWrapper>
        {data.map(item =>
          <SingleImage image={item.source} hexes={item.hexes} key={item.id} />
        )
        }
      </ImagesWrapper>
    </ProfileContainer>
  );
}
export default FaceRecognition;
