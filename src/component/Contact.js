import React from'react';
import'./Contact.css';

function Contact(params) {
  return (
    <div className="Contact">
    <img className = "avatar" src={params.avatar}></img>
    <div>
        <h4 className = "name"> {params.name}</h4>
        <div className = "status"> 
         {
         params.status == true
         ?  <div>
                <span className = "status-online">
                    <p className = "status-text">Online</p>
                   </span> 
            </div>   
         :
            <div>
                <span className = "status-offline">
                    <p className = "status-text">Offline</p>
                </span>
                
            </div>       
        }
        </div>
    </div>
  </div>
  );
}

export default Contact;