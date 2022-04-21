function Song({name, picture}) {
  return (
    <div>
      <h2> I like {name}</h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name : 'White',
    image : 'https://image.bugsm.co.kr/album/images/500/4778/477881.jpg'
  },
  { name : 'Vacation',
  image : 'https://image.bugsm.co.kr/album/images/500/201809/20180906.jpg'
  },
  { name : 'Glow',
    image : 'https://image.bugsm.co.kr/album/images/500/202225/20222528.jpg'
  },
  { name : 'Fever',
    image : 'https://image.bugsm.co.kr/album/images/500/202631/20263150.jpg'
  },
  { name : 'Flower',
    image : 'https://image.yes24.com/goods/67542029/L'
  }
];

function App() {
  return ( 
    <div> 
     {foodILike.map(gf => <Song key={gf.name} name={gf.name} picture={gf.image}/>)}
    </div>
  );
}

export default App;
