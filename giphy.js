$(document).ready(function() {
	var $searchInput = $("#search_input");
	var $searchBtn = $("#search_button");
	var $removeBtn = $("#remove_button")
	var $searchRslts = $("#search_results");
	var apiKey = "af67f5493bf34a7f9d0ed933e93dd7dc";

	$searchBtn.on('click', function() {
		var $xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+$searchInput.val()+"&api_key=af67f5493bf34a7f9d0ed933e93dd7dc&limit=1");
		$xhr.done(function(data) {
			console.log("success got data", data);

			$newImage = $("<img>", {
				src: data.data[0].images.original.url,
				height: data.data[0].images.original.height,
				width: data.data[0].images.original.width,
				css: {
					"margin-top": 5 + "px",
					"margin-bottom": 5 + "px",
					"margin-right": 5 + "px",
					"margin-left": 5 + "px"
				}
			});

			$searchRslts.append($newImage);
		});
	});

	$removeBtn.on('click', function() {
		$searchRslts.empty();
	});
})

