import React from 'react';
import styled from 'styled-components';
import './ProfileGrid.css';
import SingleImage from './Image.js';

// var data0 = { "result": [{ "hexes": ["#fafcf1", "#fbfbfb", "#cbbabc", "#3a1517", "#7d464e", "#782230"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83845696_590001218248561_6896216827833685859_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0dX3LIc-z84AX_8RN3A&oh=9e2e5eb9c0b636fe2148cb8c8a8082aa&oe=5E85F6DE" }, { "hexes": ["#111e27", "#a5b7c2", "#374f5f", "#080d12", "#1e2b35", "#668496"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83894168_542981193279747_7016972731454571004_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=A2w6VHhEzQMAX-KLNT7&oh=487219eebf72577d61ee080a916c9ac9&oe=5E848EDA" }, { "hexes": ["#191919", "#979797", "#d4d4d4", "#333333", "#111111", "#070707"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/85157739_186551862758048_4191359564881375209_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=rZnIXKZb7fwAX-s4Tx7&oh=b2ca2cd4b81d5d90605589b1aba377f0&oe=5E841C78" }, { "hexes": ["#583327", "#ddf1e7", "#6d4f3c", "#442e25", "#938968", "#32211d"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/87624038_3524065887666448_5737960671947981766_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=fkN_6Qv8C_8AX9ErEQu&oh=343ac0c121f58c415e429ba62fde9c43&oe=5E8A1FAD" }, { "hexes": ["#ded3f1", "#c0d2f1", "#e8f1fd", "#9b8ab1", "#d7e6fd", "#cae5fe"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83895618_865699157194261_4758985712237541917_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=btxZenQokNcAX8XxV5I&oh=1698bc83e5a3aca6d82dba340da4d0be&oe=5E82BC5E" }, { "hexes": ["#817d6f", "#2d1a2f", "#fbf4ce", "#433440", "#131211", "#a3e0b2"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/81865595_220760472305068_2952965313647173550_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=ruery8yKLzwAX9JFIeK&oh=6860a2c2c86a58ca9fd439368a6dd120&oe=5E882342" }, { "hexes": ["#271e1d", "#151212", "#111010", "#0f0d0e", "#81686c", "#cfc2b9"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/84479763_497858841133742_1729356116726298511_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=mLoBhav424AAX80IGw0&oh=a996ba01f912dab1c60a5bcedb852a46&oe=5E828E13" }, { "hexes": ["#df1f76", "#e17d43", "#ecbb5f", "#361425", "#f9403e", "#654055"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/84363592_1077972209247357_9001082324650269222_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=2BOepIoSJFMAX-c1Wwy&oh=3614bf5e98d93611e44e190ef9554110&oe=5E8578D1" }, { "hexes": ["#c5b9c2", "#18142a", "#656d9a", "#000509", "#3f4366", "#000000"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/84285160_218904559294458_3688656446932889168_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=106&_nc_ohc=4J2nLLUlBX8AX-MRSl2&oh=d01263e73376df7c1a8afee04a292f85&oe=5E57299F" }, { "hexes": ["#281d34", "#4b3957", "#25162c", "#151617", "#121314", "#7dafb8"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/84182963_618982188670993_386541565739899162_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=101&_nc_ohc=AeGdA0H3nvUAX-t8Zyg&oh=9e77cf93421a959f69e95150e4e6027a&oe=5E83864A" }, { "hexes": ["#747cac", "#90b7f6", "#243055", "#b0c9ea", "#c2e2f9", "#4761a4"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/84572190_630838431050726_218685246941580860_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=b7s7OWf-Nq0AX9mkOpd&oh=7529ef09bf1a738e2c7c5296c48b329f&oe=5E849057" }, { "hexes": ["#acbfcc", "#223b55", "#677888", "#3a546b", "#7e909e", "#5d6e7e"], "source": "https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/83940722_619378085519733_80600079069204935_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=Lhi6pfWUQ3IAX8VQPAD&oh=47b78b2e8ebb6f256ad3c976d4b7bf1c&oe=5E8BE99E" }] }

var data = [
  {
    id: 0,
    hexes: [
      "#201d1b",
      "#c1b8ac",
      "#38322f",
      "#766c63",
      "#766c63",
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
      "#61707d",
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
      "#c3a46a",
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
      "#453421",
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
      "#3e3e3b",
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
      "#e7af63",
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
      "#1d2c24",
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
      "#16190e",
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
      "#161209",
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
      "#2f3136",
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
      "#202b23",
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
      "#bacacf",
      "#bacacf",
      "#27271b"
    ],
    source: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/e35/80804214_525360171657254_7479895271875728296_n.jpg?_nc_ht=instagram.fyvr4-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Ym0vlSwgTE0AX99SadF&oh=1e031b8b1fe18ffa8dc9db912e2f9dca&oe=5EA86BD8"
  }
]

const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 5px auto;
`;

const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
`;
// const HeadingThreeText = styled.h3``;
const HeadingTwoText = styled.h2`
  color: white;
  font-weight: bold;
  font-size: 2em;
  align-items: center;
  justify-content: center;
  margin: 1px auto;
`
  ;
const HeadingFourText = styled.h5`
  color: white;
  font-size: 1em;
  align-items: center;
  justify-content: center;
`;

const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  margin: 5px auto;
`;

const ProfileGrid = ({ username, datain }) => {
  data = datain; //uncomment to test 
  return (
    <ProfileContainer>
      {username === "" ? "" : <HeadingFourText>Click on an image to copy the palette values!</HeadingFourText>}
      <ProfileDetailsUsername>
        <HeadingTwoText>{username}</HeadingTwoText>
      </ProfileDetailsUsername>
      <ImagesWrapper>
        {data.map((item, i) =>
          <SingleImage image={item.source} hexes={item.hexes} key={i} />
        )
        }
      </ImagesWrapper>
    </ProfileContainer>
  );
}
export default ProfileGrid;
