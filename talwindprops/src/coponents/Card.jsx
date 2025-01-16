
import React from 'react'

function Card({username,btntext})   {

console.log(username);

    // function Card(props)  
    //console.log("props",props);
    //this tells about we can use components 

    // ab if agr hume name chnage krna hai any card p ya kuch change krna hai to 
    // function  card(username ),console.log(username) krenge and pir <card username={any name }/> in app.jsx mai 


    return ( 

<div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-1 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{username}  </h1>
         
            <h1 className="font-bold font-RubikBold">{btntext}</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>


)

}
export default Card