import React from 'react';
import youtube from '../api/youtube';
import './App.css';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { video: [], selectedVideo: null };

  componentDidMount() {
    this.onFromSubmit('Enrique Eglesious');
  }

  //TODO : Fatch youtube video fucntion

  onFromSubmit = async (term) => {
    //console.log(term);

    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(response);
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    //console.log('From The app component', video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui-container">
        <SearchBar onFromSubmit={this.onFromSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.video}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
