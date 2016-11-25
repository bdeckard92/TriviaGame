$function(){
	var timer = setInterval(showQ, 5000);
	var counter = 0;

	function showQ(){
		if (counter ==0) {conter ++; return;}
		$("q","#container")
		.stop()
		.hide()
		.filter( function() {return this.idematch('q' + counter);}
		.show('fast');
		counter == 3? coutner =0 counter++;
	}
});
	