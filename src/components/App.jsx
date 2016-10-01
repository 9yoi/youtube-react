class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      video: 
      {
        kind: '',
        etag: '',
        id: {
          kind: '',
          videoId: ''
        },
        snippet: {
          publishedAt: '',
          channelId: '',
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
              width: 0,
              height: 0
            },
            medium: {
              url: '',
              width: 0,
              height: 0
            },
            high: {
              url: '',
              width: 0,
              height: 0
            }
          },
          channelTitle: '',
          liveBroadcastContent: ''
        }
      },
      results: []
    };
  }

  onListItemClick(props) {
    //console.log(props);
    //console.log(props.video.snippet.thumbnails.default.url);
    this.setState( {
      video: props.video
    });
  }

  getVideos () {
    console.log('getVideos');
    var initialize = {};
    initialize.key = window.YOUTUBE_API_KEY;
    initialize.q = 'cats';

    window.searchYouTube(initalize, render);
  }


  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} onVideoClick={this.onListItemClick.bind(this)}/>
        </div>
      </div>

    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;