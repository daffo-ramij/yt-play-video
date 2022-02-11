import React from 'react';
import youtube from '../api/youtube';
import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
  state = { video: [], selectedVide: null };

  //TODO : Fatch youtube video fucntion

  onFromSubmit = async (term) => {
    //console.log(term);

    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({ video: response.data.items });
  };

  onVideoSelect = (video) => {
    //console.log('From The app component', video);
    this.setState({ onVideoSelect: video });
  };

  render() {
    return (
      <div className="ui-container">
        <SearchBar onFromSubmit={this.onFromSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.video}
        />
      </div>
    );
  }
}

export default App;
