import React from 'react';
const esther={
    textAlign: 'justify',
    color: 'red',
    padding: "20px"
}

const First=()=>{
    return(  
    <div className ='Wrapper'style={{border:'solid', borderRadius:'15px 0 15px 0', width:"50%", margin:"10px auto"}}>

        <div className ='wrap' style={esther}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, natus?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ut accusamus nihil nesciunt asperiores pariatur molestias, corporis sequi blanditiis fugit doloremque provident et neque omnis! Deserunt quae error sequi aliquam facere quasi sed obcaecati excepturi, laborum quia, ducimus, velit ipsum?</p>
            
        </div>

    </div>
    );
}



export default First