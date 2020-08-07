import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    // super is a reference to the parents(React.Component)
    // constructor function
    super(props);
    this.state = { lat: null, errorMessage: '' };

  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude}),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return (
      <div>Latitude:
        {
          !this.state.errorMessage ? this.state.lat : this.state.errorMessage
        }
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
