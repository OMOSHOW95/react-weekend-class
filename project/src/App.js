
import './App.css';
import First from './components/First';
import Second from './components/Second';
import Classwork from './components/Classwork';
import Third from './components/Third';
import Fourth from './components/Fourth';
import  Message  from './components/Message';
import  Fifth  from './components/Fifth';
import Classwork2 from './components/Classwork2';
import Classwork3 from './components/Classwork3';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import Eighth from './components/Eighth';
import Nineth from './components/Nineth';
import Tenth from './components/Tenth';
import Eleventh from './components/Eleventh';
import Twelveth from './components/Twelveth';
import Message1 from './components/Message1';
import Thirteenth from './components/Thirteenth';
import Fourteenth from './components/Fourteenth';
import Fifteenth from './components/Fifteenth';

function App() {
  return (
    <div className="App">
      
      <h1>Hello World</h1>
      {/* <First></First> */}
      <First/>
      <Second></Second>
      <Classwork></Classwork>
      {/* <Third></Third> */}
      <Third 
      name ="Esther Michael"
      title ="Frontend Developer"
      bio = 'Lorem ipsum dolor sit amet'
      desc ='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem minima possimus mollitia eveniet doloremque, reprehenderit cum beatae rerum rem quia iste numquam atque quibusdam enim. Ratione esse amet nobis iste pariatur laudantium illum autem placeat. Dolorem hic accusamus tenetur dolorum.'
        />
        <Third
        name = "Olusegun Okoh"
        title = "Fullstack Developer"
        bio ='Lorem ipsum dolor sit amet'
        desc = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. At quidem maiores inventore, aut ullam ipsa necessitatibus neque magni dolorem id a quaerat facilis eligendi magnam quasi, quo eaque debitis? Aliquam possimus alias repellendus laborum deserunt, ad consectetur recusandae praesentium eveniet!'
           />
           <Fourth/>
           <Message/>
           <Fifth/>
           <Classwork2/>
           <Classwork3/>
           <Sixth/>
           <Seventh/>
           <Eighth/>
           <Nineth/>
           <Tenth/>
           <Eleventh/>
           <Twelveth/>
           <Message1/>
           <Thirteenth/>
           <Fourteenth/>
           <Fifteenth/>

    </div>

  );
}

export default App;
