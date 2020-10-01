



$( document ).ready(function() {

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	
	//------------------field 1 validation---------------------
	
	// username
	var x = document.forms["applyform"]["username"].value;
	if (x == "") {
		$('#username').addClass('error-text').focus();
		//$("#username").css({"border-bottom": "1px solid red"}).focus();
	   return false;
	}
	else{
		$("#username").removeClass('error-text');
	}

	//Date
	var x = document.forms["applyform"]["date"].value;
	if (x == "") {
		$('#birthDate').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#birthDate").removeClass('error-text');
	}

	//Gender
	if ($('input[name="gender"]:checked').length == 0) {
		$('.error').show();
		$('#male').focus();	
		return false;
	} 
	else{
		$('.error').hide();
	}

	// number
	var x = document.forms["applyform"]["mobile-number"].value;
	if (x == "") {
		$('#mob-number').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#mob-numbet").removeClass('error-text');
	}

	// mail
	var x = document.forms["applyform"]["email"].value;
	if (x == "") {
		$('#mail-id').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#mail-id").removeClass('error-text');
	}

	// location
	var x = document.forms["applyform"]["location"].value;
	if (x == "") {
		$('#state').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#state").removeClass('error-text');
	}

	// qualification
	var x = document.forms["applyform"]["qualification"].value;
	if (x == "") {
		$('#education').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#eduction").removeClass('error-text');
	}

	// organization
	if ($('input[name="orgone[]"]:checked').length == 0) {
		$('.error').show();
		$('#contcheck').focus();	
		return false;
	} 
	else{
		$('.error').hide();
		
	}	
	// ------------------field1--------------------
	
	// ---transition to next slide
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});

});

// ---------------field set 2-----------------
$(".nexttwo").click(function(){
	
	//------------------field 2 validation---------------------
	
	// companyname
	var x = document.forms["applyform"]["company-name"].value;
	if (x == "") {
		$('#compname').addClass('error-text').focus();
		//$("#username").css({"border-bottom": "1px solid red"}).focus();
	   return false;
	}
	else{
		$("#compname").removeClass('error-text');
	}

	//businessage
	var x = document.forms["applyform"]["businessage"].value;
	if (x == "") {
		$('#companyage').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#companyage").removeClass('error-text');
	}

	//genbusiness
	if ($('input[name="business-gen"]:checked').length == 0) {
		$('.error').show();
		$('#businessone').focus();	
		return false;
	} 
	else{
		$('.error').hide();
	}

	// authority
	var x = document.forms["applyform"]["authority"].value;
	if (x == "") {
		$('#authmaking').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#authmaking").removeClass('error-text');
	}

	//sectors
	if ($('input[name="sectors[]"]:checked').length == 0) {
		$('.error').show();
		$('#contcheck').focus();	
		return false;
	} 
	else{
		$('.error').hide();
	}

	// company employee
	var x = document.forms["applyform"]["employee"].value;
	if (x == "") {
		$('#comp-employee').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#comp-employee").removeClass('error-text');
	}

	// turnover
	if ($('input[name="turnradio"]:checked').length == 0) {
		$('.error').show();
		$('#moneyone').focus();	
		return false;
	} 
	else{
		$('.error').hide();
		
	}	
	// ------------------field-2--------------------
	
	// ---transition to next slide
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});

});



// ---------------field set 3-----------------
$(".nextthree").click(function(){
	
	//------------------field 3 validation---------------------
	
	//formaleducation
	if ($('input[name="accounts"]:checked').length == 0) {
		$('.error').show();
		$('#Influence').focus();	
		return false;
	} 
	else{
		$('.error').hide();
	}

	// finance elemetns
	if ($('input[name="finance"]:checked').length == 0) {
		$('.error').show();
		$('#financialone').focus();	
		return false;
	} 
	else{
		$('.error').hide();
	}


	//company year
	var x = document.forms["applyform"]["company-years"].value;
	if (x == "") {
		$('#yearexp').addClass('error-text').focus();
	   return false;
	}
	else{
		$("#yearexp").removeClass('error-text');
	}

	//acces control
	if ($('input[name="access"]:checked').length == 0) {
		$('.error').show();
		$('#accessone').focus();	
		return false;
	} 
	else{
		$('.error').hide();
	}

	
	// ------------------field-3--------------------
	
	// ---transition to next slide
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});

});

// ----------previous button ----------------  

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});

});





// ----fieldset 1 keypress validtion---
$('.username').keypress(function (evt) { 
    
    
	var inputValue = (evt.which) ? evt.which : evt.keyCode;
	if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)  && inputValue != 46) { 
	 evt.preventDefault(); 
    }
});

$('.ph-no').keypress(function (evt) { 
    
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 
	&& (charCode < 48 || charCode > 57))
	return false;

	return true;
	 
});

$('#mail-id').on('keypress', function() {
    var re = /([A-Z0-9a-z_-][^@])+?@[^$#<>?]+?\.[\w]{2,4}/.test(this.value);
    if(!re) {
        $('#error').show();
    } else {
        $('#error').hide();
    }
})

$('.companyname').keypress(function (evt) { 
    
	var inputValue = (evt.which) ? evt.which : evt.keyCode;
	if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)  && inputValue != 46) { 
	evt.preventDefault(); 
	}
	
});

$('.authorityname').keypress(function (evt) { 
    
	var inputValue = (evt.which) ? evt.which : evt.keyCode;
	if(!(inputValue >= 65 && inputValue <= 120) && (inputValue != 32 && inputValue != 0)  && inputValue != 46) { 
	evt.preventDefault(); 
	}
	
});

$('.numemployee').keypress(function (evt) { 
    
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 
	&& (charCode < 48 || charCode > 57))
	return false;

	return true;
	 
});












// --------noneand other chech box vaidation------------

$(":checkbox").on("change", function() {

	if (this.id === "none" && this["name"] === "orgone[]" && this.checked) {
		$('#myCheck').attr('disabled', true);
		$('.org').attr('disabled', true);
	}
	else if (this.id === "myCheck" && this["name"] === "orgone[]" && this.checked) {
		$('.org').attr('disabled', true);
		$('#none').attr('disabled', true);
	}
	else{
		$('.org'). attr('disabled', false);
		$('#myCheck').attr('disabled', false);
		$('#none').attr('disabled', false);
	}
	
});



	// ----------data---table-------
	var table = $('#example').DataTable( {
		rowReorder: {
			selector: 'td:nth-child(2)'
		},
		"columnDefs": [
			{"className": "dt-center", "targets": "_all"}
		  ],
		responsive: true
	} );


 
	var table = $('#exampletwo').DataTable( {
		rowReorder: {
			selector: 'td:nth-child(2)'
		},
		responsive: true
	} );



});

