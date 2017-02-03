var youtubeApi = 'https://www.googleapis.com/youtube/v3/search'

// youtube_api = youtube_api + '?key=' + key + '?part=' + params.part + '&q=' + searchTerm

function getDataFromApi (searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyBpx9SyyjB_JoH0iiXtVqETjacQfzf9mQA',
		q: searchTerm
	}
	$.getJSON(youtubeApi, params, function (data){
		var resultElement = '';
		if (data.items) {
			data.items.forEach(function(item) {
				resultElement += '<img src=' + item.snippet.thumbnails.default.url + '>'
			})
		} else {
			resultElement += '<h1>No Results Found </h1>';
		}
		$('.js-search-results').html(resultElement)
	})
}


$('.js-search-form').on('submit', function(e){
	e.preventDefault();
	var search = $('.js-query').val();
	getDataFromApi(search)
})

