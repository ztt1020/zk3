require(['jquery','swiper','handlebars'],function($,swiper,Handlebars){
	
	
	
	$.ajax({
		url:"/lb",
		dataType: 'json',
		success:function(res){
			var data=JSON.parse(res).swiper;
			render(data)


		},
		error:function(error){
			console.warn(error)
		}
	})
	function render(data){
		console.log(data)
	var lbSource=$("#lb").html();

	var lbTemplate=Handlebars.compile(lbSource);
	var html=lbTemplate(data);
	$(".swiper-wrapper").html(html)
	new swiper(".swiper-container",{	    
		autoplay:1000,
		loop:true

	})
	}
	
	
})