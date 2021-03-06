import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import ExampleChart from './components/ExampleChart';


class App extends Component {
  state = {
    currentTime: '',
    planets: [],
    myData: [
      {id: '00036', y: 200400, x: 1504121437},
      {id: '00036', y: 200350, x: 1504121156},
      {id: '00036', y: 200310, x: 1504120874},
      {id: '00036', y: 200260, x: 1504120590},
      {id: '00036', y: 200210, x: 1504120306},
      {id: '00036', y: 200160, x: 1504120024},
      {id: '00036', y: 200120, x: 1504119740},
      {id: '00036', y: 200070, x: 1504119458},
      {id: '00036', y: 200020, x: 1504119177},
      {id: '00036', y: 199980, x: 1504118893},
      {id: '00036', y: 199930, x: 1504118611},
      {id: '00036', y: 199880, x: 1504118330},
      {id: '00036', y: 199830, x: 1504118048},
      {id: '00036', y: 199790, x: 1504117763},
      {id: '00036', y: 199740, x: 1504117481}
    ],
  }

  setTime(){
    const date = new Date()
    const timeOptions = {hour: '2-digit', minute:'2-digit', second:'2-digit'}
    const currentTime = date.toLocaleTimeString([], timeOptions)

    this.setState({
      currentTime: currentTime
    })
  }

  componentDidMount(){
    //initial data fetch
    // axios.get(`https://swapi.co/api/planets`)
    // .then(res => {
    //   const planets = res.data.results;
    //   this.setState({ planets });
    // })
    
    window.setInterval(function () {
      this.setTime()
    }.bind(this), 1000)
  }

  

  render() {
    const { myData, currentTime } = this.state;
    return (
      <div className="App">
        <Header currentTime={currentTime} />
        <Body>
          <ExampleChart myData={myData}/>
          <ExampleChart myData={myData}/>
          <ExampleChart myData={myData}/>
          <ExampleChart myData={myData}/>
        </Body>
        <Footer />
      </div>
    );
  }
}

export default App;
