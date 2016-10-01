class App extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      video: exampleVideoData[0]
    };
  }

  onListItemClick(props) {
    console.log(props);
    console.log(props.video.snippet.thumbnails.default.url);
    this.setState( {
      video: props.video
    });
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