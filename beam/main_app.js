window.addEventListener('popstate', function(e) {
        var location = e.state;
        console.log(location);
        load_pages(location);       
         e.preventDefault();
        
    });


$(document).ready(function(){

mediaquery(function(){
console.log('sidenav hide');

localStorage.setItem('sideon',0);
},function(){
console.log('sidenav show');
localStorage.setItem('sideon',1);

},"992px");


/*set link when refreshed*/
setTimeout(function(){
if(window.location.hash=="#sb_cl_bending_stress"){
	load_pages(1);
}
else if(window.location.hash=="#sb_cl_shearing_stress"){
	load_pages(2);
}
else if(window.location.hash=="#sb_cl_spacing"){
	load_pages(3);
}

},500);













});



$(window).resize(function() {

mediaquery(function(){
console.log('sidenav hide');

localStorage.setItem('sideon',0);
},function(){
	console.log('sidenav show');
localStorage.setItem('sideon',1);

},"992px");

});
function mediaquery(funct1,funct2,max_width){
var mq = window.matchMedia("(max-width: "+max_width+")");
 if (mq.matches) { // If media query matches
  funct1();
  } else {
   funct2();
  }

}




function header(){
	return `
	<div style='border-bottom:solid 1px rgba(0,0,0,0.2); height:60px;'></div>
<div class='pageheader' style='border-bottom:solid 1px rgba(0,0,0,0.2); height:30px;'><div id='pagename'></div></div>
	
	`;
}

function setlint(x,y){
if(x==1){
	if(y==1){ history.pushState(1, null, "#sb_cl_bending_stress");  }
	if(y==2){ history.pushState(2, null, "#sb_cl_shearing_stress");  }
	if(y==3){ history.pushState(3, null, "#sb_cl_spacing");  }
}

if(localStorage.getItem('sideon')==0){ /*if sidebar is hidden*/
$('.sidenav-overlay').click();	
}




}


function load_pages(id){
if (id != null) {
    if(id==1){ sb_cl_bending_stress(); }
    else if(id==2){ sb_cl_shearing_stress(); }
    else if(id==3){ sb_cl_spacing(); }

} 
else{ main_app(); }
        
}




function main_app () {
	var str=`
	`+header()+`
	<div id='maincont'>
	<div style='text-align:center; padding-top:5  	 	%;'>
	<img src='./resources/logo.png' style='margin-top:2%; opacity:0.1; width:200px;'/>

	</div>

	</div>

	`;
	$('#main_content').html(str);
	$('#pagename').text("Dashboard ");
}