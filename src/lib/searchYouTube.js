var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: true 
    },
    contentType: 'application/json',
    success: function (response) {
      console.log('successful get');
      console.log(response);
      callback(response.items);
    }, 
    error: function () {
      console.error('failed to get data: ', response);
    }
  });
};


window.searchYouTube = searchYouTube;
