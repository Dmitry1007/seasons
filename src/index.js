import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    // super is a reference to the parents(React.Component)
    // constructor function
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      // success callback
      position => {
        this.setState({ lat: position.coords.latitude})
      },
      // failure callback
      err => console.log(err)
    );
  }

  render() {
    return (
      <div>Latitude: {this.state.lat}</div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
