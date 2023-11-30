import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state ={
      person:{
    fullName: 'Romnaldinho',
    bio: 'A Footballeur',
    imgSrc: 'https://th.bing.com/th/id/R.a207914115365e57eb8453adfe681f82?rik=%2bkPabNUmPEPjBg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-63RaY6V94s4%2fTk1XMV6zBkI%2fAAAAAAAAAOs%2fHs0J22Z2IR8%2fs1600%2fRonaldinho%2bin%2baction.jpg&ehk=qPYJi4Rf6AmBsYc2OlJ%2bKrUeE4qaC4lsmNvGaHd4%2bcQ%3d&risl=&pid=ImgRaw&r=0', 
    profession: 'Footballeur',
  
  shows :true,
  time :0
   }
  }
componentDidMount() { 
  setInterval(() => {
    this.setState(()=>({
      time : new Date().getSeconds()
    }))
  }, 100);
 }

  render() {
    
    
    return (
      
      <div>
        {(this.state.shows === true)?  
        <div>
        <h1>{this.state.person.fullName}</h1>
        <h1>{this.state.person.bio}</h1>
        <img  src={this.state.person.imgSrc} alt='' style={{ width:'25%' }} />
        <h1>{this.state.person.profession}</h1>
         <p>Time since mount: {this.state.time} seconds</p>
        </div> : null}
        <button onClick={()=>{(this.state.shows === true)? this.setState({shows :false}) :  this.setState({shows : true}) }}>show </button>
       
      </div>
    )
  }
}

