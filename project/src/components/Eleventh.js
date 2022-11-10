import React from "react";
import './Eleventh.css';
import './EleventhProp';
import EleventhProp from "./EleventhProp";
import segunImage from '../Images/image 7.jpg';


const Eleventh=()=>{
    return(
        <div className="card-wrap1">
            <EleventhProp
            displayImg={segunImage}
            bio ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora unde odio maxime dolores veritatis corporis fugit, fugiat dicta, enim, porro vitae! Maiores dolore, veritatis accusantium voluptatem, possimus, molestiae fugit sequi amet ea praesentium inventore iste totam illum nesciunt! Asperiores?'
              />
              <EleventhProp
            displayImg={segunImage}
            bio ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora unde odio maxime dolores veritatis corporis fugit, fugiat dicta, enim, porro vitae! Maiores dolore, veritatis accusantium voluptatem, possimus, molestiae fugit sequi amet ea praesentium inventore iste totam illum nesciunt! Asperiores?'
              />
              <EleventhProp
            displayImg={segunImage}
            bio ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora unde odio maxime dolores veritatis corporis fugit, fugiat dicta, enim, porro vitae! Maiores dolore, veritatis accusantium voluptatem, possimus, molestiae fugit sequi amet ea praesentium inventore iste totam illum nesciunt! Asperiores?'
              />

        </div>



    );
}





export default Eleventh