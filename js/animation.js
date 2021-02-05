$(function(){
	$(window).scroll(function(){
		var scrollVal = $(this).scrollTop();
		console.log(scrollVal)

		if(scrollVal >=1100){
			$(".service_description").css({"opacity":"1","transform":"translateY(0px)"},);
			$(".service_title").css({"opacity":"1","transform":"translateY(0px)"},);
			$(".service_img_container").css("transform","scale(1)")
			$(".service_img_container img").css("width","130%")

		}
		if(scrollVal >=  2000){
			$(".client_img_PC").css({ 'opacity': '1'});
			$('.client_img_PC').css({ 'transform': 'translateY(0px)'})
		}
	});

	

});