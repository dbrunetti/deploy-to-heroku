var lyric = "";

$.get('/api/lyrics', function(data){
	lyric = data;
	console.log(lyric);
	lyric.forEach(function(item){
		$('body').append("<p>"+ item + "</p>");
	});
	
});