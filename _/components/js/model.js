$(document).ready(function(){

	$(".include").each(function(){
		var $this = $(this);
		url = $this.attr("path");
		$this.load(url);
	})


})