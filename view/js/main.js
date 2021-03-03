const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://recipe-puppy.p.rapidapi.com/?p=1&i=onions%2Cgarlic&q=omelet",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "a1bca28f62mshbea80f8316490ddp11c9c0jsnd2dab23f5d22",
		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});