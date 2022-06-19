import React from 'react';
import './App.css';
import Compteur from './Compteur';
class App extends React.Component {  
  constructor(props){
    super(props);
    this.state= {show: false};
    }
  render() {
    return <div style={{position:"relative",marginTop:"150px"}}>
      <div style={{textAlign: "center"}}><button onClick={()=> this.setState({show :!this.state.show})}>click me!</button>
         </div>
      { this.state.show?<div style={{textAlign: "center" ,marginTop:"50px"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNaHVhHHPWuKHsygonqKTpsWX5YJHE6JXB8Q&usqp=CAU" alt="" />
        <h3>Zribi Omar</h3>
        <h4>Developper JS</h4>
        <Compteur>clearInterval(intervalID)</Compteur>  
        </div> 
        :null}
      </div>
}}
export default App;