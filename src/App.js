import React, { Component } from 'react';
import Chart from 'chart.js';
import logo from './logo.svg';
import './App.css';

import HeaderTopp from "./components/header_topp";
import MainContent from "./components/main_content";

{/*window.onload = function () {

  var ctx = document.getElementById("myChart");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ["Ja", "Fe", "Ma", "Ap", "Ma", "Ju", "Ju", "Au", "Se", "Oc", "No", "De"],
      datasets: [{
        label: "My First dataset",
        backgroundColor: '#ffffff',

        borderColor: '#1096c1',
        borderWidth: 5,
        lineTension: 0,
        pointRadius: 5,
        pointHitRadius: 5,
        pointHoverBackgroundColor: '#53c6ea',
        pointHoverBorderColor: '#53c6ea',
        pointHoverBorderWidth: 5,
        pointHoverRadius: 5,
        data: [0, 100, 150, 250, 220, 450, 250, 350],

      },
      {
        label: "kjhgfd",
        backgroundColor: '#ffffff',

        borderColor: '#1096c1',
        borderWidth: 5,
        lineTension: 0,
        pointRadius: 5,
        pointHitRadius: 5,
        pointHoverBackgroundColor: '#53c6ea',
        pointHoverBorderColor: '#53c6ea',
        pointHoverBorderWidth: 5,
        pointHoverRadius: 5,
        data: [50, 100, 250, 220, 350],
      }
      ]
    },

    // Configuration options go here
    options: {}
  });
}
*/}

class App extends Component {

  render() {
    return (
      <div className="App">
        <HeaderTopp />
        <MainContent/>

      </div>
    );
  }
}

export default App;
