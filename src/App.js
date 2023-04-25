import Navb from "./Profile/Component/Navb";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile/Component/Profile';
import Product from "./Profile/Component/Product";
import './App.css';
import {Button} from 'react-bootstrap'
 



function App() {
  const myStyle = {color: 'black', textAlign: 'center'}
  const aziz = {height: 200 ,  borderRadius: '50%'
}
const styleCards = {display: 'flex', justifyContent: 'space-around'}
const handleName = (price) => {
  alert(`The price of this product is:  ${price}`)
}
const myName = 'aziz'
const handlename = () => {
  alert(`hello  ${myName}`)
}
  return (
    <div className="App">

  
   <Navb />
   <Profile name='Aziz Ridane' style={myStyle}><img className="aziz" alt='logo' src="https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-1/330770652_2396133717217623_259745379083449840_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ZPsJW24WLjgAX_j0suJ&_nc_ht=scontent.ftun2-2.fna&oh=00_AfA8oRCywzx0mM9b5sjuPXCZ9IjYH1oZhR9M6j-KykGtdQ&oe=644C9474 " style={aziz} ></img>   
</Profile>
<Button on onClick={handlename}>click me</Button>
 <div style={styleCards}>
      <Product handleName={handleName} brand='FIFA 23 STEAM NEW ACCOUNT' model='latest version' price={69.99 } > <img src='https://api.tiktak.space/media/static/media/GU1vXFJpbzGYNV6UN3U0Cnnb.jpeg' alt='logo'/> </Product>
      <Product handleName={handleName} brand='FORZA HORIZON 4 STEAM ACCOUNT' model=' Limited edition' price={59.99} > <img src='https://api.tiktak.space/media/static/media/apps.jpeg' alt='logo'/> </Product>
      <Product handleName={handleName} brand='CALL OF DUTY MODERN WARFARE ' model='latest version' price={59.99} > <img src='https://api.tiktak.space/media/static/media/81ukWFvMNeL.jpeg' alt='phone'/> </Product>
      </div>
      
      </div>
  );
}

export default App;
