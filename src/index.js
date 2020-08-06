import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    // super is a reference to the parents(React.Component)
    // constructor function
    super(props);
    this.state = { lat: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      position => console.log(position.coords.latitude),
      // failure callback
      err => console.log(err)
    );

    return (
      <div>Latitude: </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
