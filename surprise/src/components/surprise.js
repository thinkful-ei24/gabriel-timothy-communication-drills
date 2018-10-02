import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
  constructor(props) {
    super(props);

    this.state = { imageIsShown: false };
  }

  render() {
    // Show the button to start with
    if (this.state.imageIsShown) {
      return <SurpriseImage />;
    } else {
      return (
        <SurpriseButton
          showImage={() => {
            console.log('button clicked');
            this.setState({ imageIsShown: true });
          }}
        />
      );
    }
  }
}
