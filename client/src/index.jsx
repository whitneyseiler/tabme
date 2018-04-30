import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    console.log('component mounted')
    var context = this;
    axios.get('/api', {})
      .then(function (response) {
        // context.setState({repos: response.data})
      })
      .then(function () {
        // context.getTopRepos();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
        <div className = "App" >
            <header className = "App-header" >
                <h1 className = "App-title" > Tab Me </h1> 
            </header> 
            <p className = "App-intro" >Your Tabs</p> 
            <div id = "search" >
            </div> 
        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
