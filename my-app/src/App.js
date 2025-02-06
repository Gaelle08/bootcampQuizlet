import React from 'react';
import CardEditor from './CardEditor';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { front: 'front1', back: 'back1' },
        { front: 'front1', back: 'back1' },
      ],
    };
  }

  render() {
    return <CardEditor cards={this.state.cards} />;
  }
}

export default App;
