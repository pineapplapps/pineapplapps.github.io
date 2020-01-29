

function sb_cl_bending_stress () { /*Concentrated Load */
var d={};

d.formulatable=function(){
return `
<div class='row' style='margin-bottom:2%;'>
<div class='col s12'>
<label>f<span style='font-size:10px;'>b</span>(Bending Stress)</label>


<div>
    <select id='sb_cl_bs_fb_mode' onchange='fb_mode()'>
      <option value="1">Solve for f<span style='font-size:10px;'>b</span>(Bending Stress)</option>
      <option value="2">Solve for M</option>
      <option value="3">Solve for C</option>
      <option value="4">Solve for I</option>
    </select>
</div>



<table class='table-bordered' border='1'>
<tr>
<td>f<span style='font-size:10px;'>b</span></td>
<td>M</td>
<td>C</td>
<td>I</td>
</tr>
<tr>
<td> <input type="text" id='sb_cl_bs_fb' class="" style='width:100%;' onchange="fb_mode_compute()"></td>
<td> <input type="text" id='sb_cl_bs_M' class="" style='width:100%;' onchange="fb_mode_compute()"></td>
<td> <input type="text" id='sb_cl_bs_C' class="" style='width:100%;' onchange="fb_mode_compute()"></td>
<td> <input type="text" id='sb_cl_bs_I' class="" style='width:100%;' onchange="fb_mode_compute()"></td>
</tr>
</table>


</div>
</div>



<div class='row' style='margin-bottom:2%;'>
<div class='col s12'>
<label>M (max. Moment)</label>
<div>
    <select id='sb_cl_bs_M_mode' onchange='M_mode()'>
      <option value="1">Solve for M</option>
      <option value="2">Solve for P</option>
      <option value="3">Solve for L</option>
    </select>
</div>

<table class='table-bordered' border='1'>
<tr>
<td>M</td>
<td>P</td>
<td>L</td>
</tr>
<tr>
<td> <input type="text" id='sb_cl_bs_M_M' class="" style='width:100%;' onchange='M_mode_compute()'></td>
<td> <input type="text" id='sb_cl_bs_M_P' class="" style='width:100%;' onchange='M_mode_compute()'></td>
<td> <input type="text" id='sb_cl_bs_M_L' class="" style='width:100%;' onchange='M_mode_compute()'></td>
</tr>
</table>


</div>
</div>

<label>C (Dist. from N.A to outermost fiber)</label>
<div>
    <select id='sb_cl_bs_C_mode' onchange='C_mode()'>
      <option value="1">Solve for C</option>
      <option value="2">Solve for d</option>
    </select>
</div>
<div class='row' style='margin-bottom:2%;'>
<div class='col s12'>

<table class='table-bordered' border='1'>
<tr>
<td>C</td>
<td>d</td>

</tr>
<tr>
<td> <input type="text" id='sb_cl_bs_C_C' class="" style='width:100%;' onchange='C_mode_compute()'></td>
<td> <input type="text" id='sb_cl_bs_C_d' class="" style='width:100%;' onchange='C_mode_compute()'></td>
</tr>
</table>


</div>
</div>



<div class='row' style='margin-bottom:2%;'>
<div class='col s12'>
<label>l(Moment of Inertia)</label>

<div>
    <select id='sb_cl_bs_l_mode' onchange='l_mode()'>
      <option value="1">Solve for l</option>
      <option value="2">Solve for b</option>
      <option value="3">Solve for d</option>
    </select>
</div>

<table class='table-bordered' border='1'>
<tr>
<td>l</td>
<td>b</td>
<td>d</td>
</tr>
<tr>
<td> <input type="text" id='sb_cl_bs_l_l' class="" style='width:100%;' onchange='l_mode_compute()'></td>
<td> <input type="text" id='sb_cl_bs_l_b' class="" style='width:100%;' onchange='l_mode_compute()'></td>
<td> <input type="text" id='sb_cl_bs_l_d' class="" style='width:100%;' onchange='l_mode_compute()'></td>
</tr>
</table>


</div>
</div>


`;	
}


d.result_form=function(){

return `

<div class='row' style='margin-bottom:2%;'>
<div class='col s12'>
<label>RESULT: </label>
<div style='width:100%; border:solid 2px rgba(0,0,0,1); min-height:200px;' >
<div id='sb_cl_bs_result1'></div>
<div id='sb_cl_bs_result2'></div>
<div id='sb_cl_bs_result3'></div>
<div id='sb_cl_bs_result4'></div>
</div>

</div>
</div>

`;
}




d.initialize_mode=function(){

fb_mode();
M_mode();
C_mode();
l_mode();



}










var str=`
`+header()+`
<div id='maincont'>
<div class='row'>
<div class='col s12 m12 l12'>`+d.formulatable()+`</div>
<!--<div class='col s12 m6 l6'>`+d.result_form()+`</div>-->
</div>

	</div>

	`;
	$('#main_content').html(str);
		$('#pagename').text("Concentrated Load / Bending Stress ");
           $('select').css({'display':'block'});
           setTimeout(function(){ d.initialize_mode(); },500);
           







}







function fb_mode_compute(){

var mode=$('#sb_cl_bs_fb_mode').val();

var fb=($('#sb_cl_bs_fb').val()).replace(/[,]+/g,"");
var M=($('#sb_cl_bs_M').val()).replace(/[,]+/g,"");
var C=($('#sb_cl_bs_C').val()).replace(/[,]+/g,"");
var I=($('#sb_cl_bs_I').val()).replace(/[,]+/g,"");


if(mode==1){
	var res=parseFloat(M)*parseFloat(C)/ parseFloat(I);
	$('#sb_cl_bs_fb').val(res);
}
else if(mode==2){
	var res=parseFloat(fb)*parseFloat(I)/ parseFloat(C);
	$('#sb_cl_bs_M').val(res);
}
else if(mode==3){
	var res=parseFloat(fb)*parseFloat(I)/ parseFloat(M);
	$('#sb_cl_bs_C').val(res);
}
else if(mode==4){
	var res=parseFloat(M)*parseFloat(C)/ parseFloat(fb);
	$('#sb_cl_bs_I').val(res);
}

}




fb_mode=function(){
var mode=$('#sb_cl_bs_fb_mode').val();

$('#sb_cl_bs_fb').prop('disabled',false).val("");
$('#sb_cl_bs_M').prop('disabled',false).val("");
$('#sb_cl_bs_C').prop('disabled',false).val("");
$('#sb_cl_bs_I').prop('disabled',false).val("");

$('#sb_cl_bs_fb').parent().css({'background':'#fff'})
$('#sb_cl_bs_M').parent().css({'background':'#fff'});
$('#sb_cl_bs_C').parent().css({'background':'#fff'});
$('#sb_cl_bs_I').parent().css({'background':'#fff'});

setTimeout(function(){
if(mode==1){
	$('#sb_cl_bs_fb').prop('disabled',true);
	$('#sb_cl_bs_fb').parent().css({'background':'#a7f7ff'});	

}
else if(mode==2){
	$('#sb_cl_bs_M').prop('disabled',true);
	$('#sb_cl_bs_M').parent().css({'background':'#a7f7ff'});
}
else if(mode==3){
	$('#sb_cl_bs_C').prop('disabled',true);
	$('#sb_cl_bs_C').parent().css({'background':'#a7f7ff'});
}
else if(mode==4){
	$('#sb_cl_bs_I').prop('disabled',true);
	$('#sb_cl_bs_I').parent().css({'background':'#a7f7ff'});
}
},100);

}







function M_mode_compute(){

var mode=$('#sb_cl_bs_M_mode').val();

var M=$('#sb_cl_bs_M_M').val();
var P=$('#sb_cl_bs_M_P').val();
var L=$('#sb_cl_bs_M_L').val();



if(mode==1){
	var res=parseFloat(P)*parseFloat(L)/4;
	$('#sb_cl_bs_M_M').val(res);
}
else if(mode==2){
	var res=parseFloat(M)*4/parseFloat(L);
	$('#sb_cl_bs_M_P').val(res);
	
}
else if(mode==3){
	var res=parseFloat(M)*4/parseFloat(P);
	$('#sb_cl_bs_M_L').val(res);
}


}

function M_mode(){

var mode=$('#sb_cl_bs_M_mode').val();

$('#sb_cl_bs_M_M').prop('disabled',false).val("");
$('#sb_cl_bs_M_P').prop('disabled',false).val("");
$('#sb_cl_bs_M_L').prop('disabled',false).val("");

$('#sb_cl_bs_M_M').parent().css({'background':'#fff'});
$('#sb_cl_bs_M_P').parent().css({'background':'#fff'});
$('#sb_cl_bs_M_L').parent().css({'background':'#fff'});

setTimeout(function(){
if(mode==1){
	$('#sb_cl_bs_M_M').prop('disabled',true);	
	$('#sb_cl_bs_M_M').parent().css({'background':'#a7f7ff'});
}
else if(mode==2){
	$('#sb_cl_bs_M_P').prop('disabled',true);
	$('#sb_cl_bs_M_P').parent().css({'background':'#a7f7ff'});
}
else if(mode==3){
	$('#sb_cl_bs_M_L').prop('disabled',true);
	$('#sb_cl_bs_M_L').parent().css({'background':'#a7f7ff'});
}
},100);

}



















function C_mode_compute(){

var mode=$('#sb_cl_bs_C_mode').val();

var C=$('#sb_cl_bs_C_C').val();
var d=$('#sb_cl_bs_C_d').val();


if(mode==1){
	var res=parseFloat(d)/2;
	$('#sb_cl_bs_C_C').val(res);
}
else if(mode==2){
	var res=parseFloat(C)*2;
	$('#sb_cl_bs_C_d').val(res);
	
}



}






function C_mode(){
var mode=$('#sb_cl_bs_C_mode').val();

$('#sb_cl_bs_C_C').prop('disabled',false).val("");
$('#sb_cl_bs_C_d').prop('disabled',false).val("");

$('#sb_cl_bs_C_C').parent().css({'background':'#fff'});
$('#sb_cl_bs_C_d').parent().css({'background':'#fff'});

setTimeout(function(){
if(mode==1){
	$('#sb_cl_bs_C_C').prop('disabled',true);	
	$('#sb_cl_bs_C_C').parent().css({'background':'#a7f7ff'});
}
else if(mode==2){
	$('#sb_cl_bs_C_d').prop('disabled',true);
	$('#sb_cl_bs_C_d').parent().css({'background':'#a7f7ff'});
}

},100);

}


















function l_mode_compute(){

var mode=$('#sb_cl_bs_l_mode').val();

var l=$('#sb_cl_bs_l_l').val();
var b=$('#sb_cl_bs_l_b').val();
var d=$('#sb_cl_bs_l_d').val();

if(mode==1){
	var res=(parseFloat(b)* Math.pow(d,3))/12;
	$('#sb_cl_bs_l_l').val(res);
	
}
else if(mode==2){
	var res=(parseFloat(l)*12)/Math.pow(d,3);
	$('#sb_cl_bs_l_b').val(res);
	
}
else if(mode==3){
	var res=Math.cbrt((parseFloat(l)*12)/parseFloat(b));
	$('#sb_cl_bs_l_d').val(res);
	
}


}




function l_mode(){
var mode=$('#sb_cl_bs_l_mode').val();



$('#sb_cl_bs_l_l').prop('disabled',false).val("");
$('#sb_cl_bs_l_b').prop('disabled',false).val("");
$('#sb_cl_bs_l_d').prop('disabled',false).val("");

$('#sb_cl_bs_l_l').parent().css({'background':'#fff'});
$('#sb_cl_bs_l_b').parent().css({'background':'#fff'});
$('#sb_cl_bs_l_d').parent().css({'background':'#fff'});


setTimeout(function(){
if(mode==1){
	$('#sb_cl_bs_l_l').prop('disabled',true);	
	$('#sb_cl_bs_l_l').parent().css({'background':'#a7f7ff'});
}
else if(mode==2){
	$('#sb_cl_bs_l_b').prop('disabled',true);
	$('#sb_cl_bs_l_b').parent().css({'background':'#a7f7ff'});
}
else if(mode==3){
	$('#sb_cl_bs_l_d').prop('disabled',true);
	$('#sb_cl_bs_l_d').parent().css({'background':'#a7f7ff'});
}



},100);


}