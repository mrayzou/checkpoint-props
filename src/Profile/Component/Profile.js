import React from 'react'

const Profile = (props) => {
  return (
    <div style={props.style}>
        <h1>{props.name} </h1>
        <h3>web developer</h3>
        {props.children}
    
     </div>    
   )
}

export default Profile;