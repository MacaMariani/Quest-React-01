import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact';

let contacts= [
  {
      name :  "Diva",
      avatar :  "https://ih1.redbubble.net/image.483716454.8943/flat,1000x1000,075,f.u1.jpg",
      status : true
  },
  {
      name : "Wuachiturro",
      avatar : "http://2.bp.blogspot.com/-D6mPJ5JMi9E/Tq3QLkRG_DI/AAAAAAAACwE/an0xccq4Ww8/s1600/simon+wachiturros+1.jpg",
      status : false
  },
  {
      name : "Banana",
      avatar : "https://img.favpng.com/23/4/23/emoji-banana-fruit-text-messaging-clip-art-png-favpng-B7axbrircZ7Mg4z7hfTFMHZLx.jpg",
      status : false
  }
];

function App() {
  return (
    <div className = "App">
      <Contact name = {contacts[0].name} avatar = {contacts[0].avatar} status={contacts[0].status} />
      <Contact name = {contacts[1].name} avatar = {contacts[1].avatar} status={contacts[1].status} />
      <Contact name = {contacts[2].name} avatar = {contacts[2].avatar} status={contacts[2].status} />
    </div>
  );
}

export default App;
