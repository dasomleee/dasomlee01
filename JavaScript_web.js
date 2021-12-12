$(function(){
	
		/* slider */

		$(".slider01 li").each(function(aa){ //나열
				$(this).css("left",250*aa);
			});  //0:1200 1:2400 2:3600 4:4800 5:6000
		
	 		setInterval(function(){ 
				$(".slider01 li").each(function(){  
					var nowLeft = parseInt($(this).css("left")); // 현재 이미지의 왼쪽 위치값을 읽어온다.
					var moveLeft = nowLeft - 250;
					
						$(this).animate({left:moveLeft},250, function(){
						if(moveLeft<=-250){       // if(moveLeft<=-2400){
							$(this).css("left",1000); //     $(this).css("left",1200);
							

						}
					}); 
					
					
				});
			},1250);
			
			
			
			$(".slider02 li").each(function(aa){ //나열
				$(this).css("left",250*aa);
			});  //0:1200 1:2400 2:3600 4:4800 5:6000
		
	 		setInterval(function(){ 
				$(".slider02 li").each(function(){  
					var nowLeft = parseInt($(this).css("left")); // 현재 이미지의 왼쪽 위치값을 읽어온다.
					var moveLeft = nowLeft - 250;
					
						$(this).animate({left:moveLeft},250, function(){
						if(moveLeft<=-250){       // if(moveLeft<=-2400){
							$(this).css("left",1000); //     $(this).css("left",1200);
							

						}
					}); 
					
					
				});
			},1250);
			
			
});  // $(function(){   끝