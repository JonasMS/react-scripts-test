import React, { Component } from 'react';
import Grid from './Grid';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: 'input a num 1 to 10',
      rows: 0,
      clickedRows: [],
    };
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleMakeGrid() {
    const rows = parseInt(this.state.input, 10);

    if (!isNaN(rows) && rows >= 1 && rows <= 10) {
      this.setState({rows: rows})
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input
          type="text"
          value={this.state.input}
          onChange={e => { this.handleChange(e); }}
        />
        <button
          className="make-grid-btn"
          onClick={() => { this.handleMakeGrid(); }} >
            Make Grid
        </button>
        <Grid rows={this.state.rows}/>
      </div>
    );
  }
}

export default App;
