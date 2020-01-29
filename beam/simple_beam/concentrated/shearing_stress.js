function sb_cl_shearing_stress () {
	var d={};

	d.formulatable=function(){
		return `
		<div class='row' style='margin-bottom:2%;'>
<div class='col s12'>
<label>f<span style='font-size:10px;'>b</span>(Bending Stress)</label>


<div>
    <select id='sb_cl_bs_fb_mode' onchange='fb_mode()'>
      <option value="1">Solve for f<span style='font-size:10px;'>b</span>(Bending Stress)</option>
      <option value="2">Solve for V</option>
      <option value="3">Solve for Q</option>
      <option value="4">Solve for b</option>
    </select>
</div>



<table class='table-bordered' border='1'>
<tr>
<td>f<span style='font-size:10px;'>b</span></td>
<td>V</td>
<td>Q</td>
<td>b</td>
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
      <option value="1">Solve for V</option>
      <option value="2">Solve for P</option>
     </select>
</div>

<table class='table-bordered' border='1'>
<tr>
<td>V</td>
<td>P</td>
</tr>
<tr>
<td> <input type="text" id='sb_cl_bs_M_M' class="" style='width:100%;' onchange='M_mode_compute()'></td>
<td> <input type="text" id='sb_cl_bs_M_P' class="" style='width:100%;' onchange='M_mode_compute()'></td>
</tr>
</table>


</div>
</div>

<label>C (Dist. from N.A to outermost fiber)</label>
<div>
    <select id='sb_cl_bs_C_mode' onchange='C_mode()'>
      <option value="1">Solve for Q</option>
      <option value="2">Solve for A</option>
      <option value="2">Solve for y</option>
    </select>
</div>
<div class='row' style='margin-bottom:2%;'>
<div class='col s12'>

<table class='table-bordered' border='1'>
<tr>
<td>Q</td>
<td>A</td>
<td>y</td>

</tr>
<tr>
<td> <input type="text" id='sb_cl_bs_C_C' class="" style='width:100%;' onchange='C_mode_compute()'></td>
<td> <input type="text" id='sb_cl_bs_C_d' class="" style='width:100%;' onchange='C_mode_compute()'></td>
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
		var str=`
	`+header()+`
	<div id='maincont'>`+d.formulatable()+`</div>

	`;
	$('#main_content').html(str);
	$('#pagename').text("Concentrated Load / Shearing Stress ");
}