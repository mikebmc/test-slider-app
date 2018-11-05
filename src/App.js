import React, { Component } from 'react';
import './App.css';
import PageCanvas from './PageCanvas/PageCanvas'

class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="problem-description">
					<h1 id="problem-title">Comparison</h1>
					<p id="problem-description">Mark says 1/4 of his candy bar is smaller than 1/5 of the same candy bar. Is Mark right? Yes or No. Draw a picture or use words to explain why you think Mark is right or wrong.
					 </p>
				</div>
				<PageCanvas />
      </div>
    );
  }
}

export default App;
