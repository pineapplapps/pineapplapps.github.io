function sb_cl_shearing_stress () {
	var d={};

	d.formulatable=function(){
		return `Under Construction`;
	}
		var str=`
	`+header()+`
	<div id='maincont'>`+d.formulatable()+`</div>

	`;
	$('#main_content').html(str);
	$('#pagename').text("Concentrated Load / Shearing Stress ");
}