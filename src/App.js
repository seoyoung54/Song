import PropTypes from "prop-types";

function Song({name, picture, good}) {
  return (
    <div>
      <h2> G-FRIEND : {name}</h2>
      <h4>♥{good}</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const songILike = [
  {
    id : 1,
    name : 'White',
    image : 'https://image.bugsm.co.kr/album/images/500/4778/477881.jpg',
    good: 19798
  },
  { 
    id : 2,
    name : 'Vacation',
    image : 'https://image.bugsm.co.kr/album/images/500/201809/20180906.jpg',
    good: 17439
  },
  { 
    id : 3,
    name : 'Glow',
    image : 'https://image.bugsm.co.kr/album/images/500/202225/20222528.jpg',
    good: 8900
  },
  { 
    id : 4,
    name : 'Fever',
    image : 'https://image.bugsm.co.kr/album/images/500/202631/20263150.jpg',
    good: 61431
  },
  { 
    id : 5,
    name : 'Flower',
    image : 'https://image.yes24.com/goods/67542029/L',
    good: 9867
  }
];


function App() {
  return ( 
    <div> 
      {songILike.map ( gf => 
        <Song key={gf.id} name={gf.name} picture={gf.image} good={gf.good}/>
      )}
    </div>
  );
}

Song.prototype = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  good:PropTypes.number
}

export default App;
