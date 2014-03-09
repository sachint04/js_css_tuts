$(document).ready(function(){

	$(".include").each(function(){
		var $this = $(this);
		url = $this.attr("path");
		$this.load(url);
	})

	$(".launchWin").each(function(){
		
		var $this = $(this);
		alert($this);
		$this.click(funtion(){
			url = $(this).attr("path");
			alert(url);
			window.open(url, 'Tutorial' "width=600,height=300");
		})
	})
})