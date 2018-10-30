import React, { Component } from 'react';

class Coin extends Component {
  render() {
    let coinStyle = '';
    console.log('What is props?', this.props);
    if (this.props.face !== 'heads') {
      coinStyle = {
        width: '500px',
        height: '500px',
        backgroundImage:
          'url("https://www.usmint.gov/wordpress/wp-content/uploads/2017/12/2018-roosevelt-dime-proof-reverse-300x300.jpg")'
      };
    } else {
      coinStyle = {
        width: '500px',
        height: '500px',
        backgroundImage: 'url("http://cointrackers.com/img/Roosevelt-Dime.png")'
      };
    }
    return <div className="Coin" style={coinStyle} />;
  }
}

export default Coin;
