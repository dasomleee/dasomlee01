$(function(){
	
	
		/* pop T 01~02 */
	$(".h3").click(function(){
		$("#Tpop").show();
	});
	
	$(".Tclose a").click(function(){
		$("#Tpop").hide();
	});	
	
		
	$(".h3").click(function(){
		$("#pop01").show();
	});
	
	$(".close01 a").click(function(){
		$("#pop01").hide();
	});
	
	
	$(".rightUpMenu EVENT ").click(function(){
		$("#pop02").show();
	});
	
	$(".close02 a").click(function(){
		$("#pop02").hide();
	});
	
	
		/* slider */

		$(".slider01 li").each(function(aa){ //나열
				$(this).css("left",1200*aa);
			});  //0:1200 1:2400 2:3600 4:4800 5:6000
		
	 		setInterval(function(){ 
				$(".slider01 li").each(function(){  
					var nowLeft = parseInt($(this).css("left")); // 현재 이미지의 왼쪽 위치값을 읽어온다.
					var moveLeft = nowLeft - 1200;
					
						$(this).animate({left:moveLeft},1200, function(){
						if(moveLeft<=-1200){       // if(moveLeft<=-2400){
							$(this).css("left",3600); //     $(this).css("left",1200);
							

						}
					}); 
					
					
				});
			},6000);
			
			
			
			$(".slider03 li").each(function(aa){ //나열
				$(this).css("left",240*aa);
			});  
		
	 		setInterval(function(){ 
				$(".slider03 li").each(function(){  
					var nowLeft = parseInt($(this).css("left")); 
					var moveLeft = nowLeft - 240;
					
						$(this).animate({left:moveLeft},240, function(){
						if(moveLeft<=-240){       
							$(this).css("left",1680); 
							

						}
					}); 
					
					
				});
			},1440);	
			
			
	
	$(".slider02 li").each(function(aa){ //나열
				$(this).css("left",1200*aa);
			});  //0:1200 1:2400 2:3600 4:4800 5:6000
		
	 		setInterval(function(){ 
				$(".slider02 li").each(function(){  
					var nowLeft = parseInt($(this).css("left")); // 현재 이미지의 왼쪽 위치값을 읽어온다.
					var moveLeft = nowLeft - 1200;
					
						$(this).animate({left:moveLeft},1200, function(){
						if(moveLeft<=-1200){       // if(moveLeft<=-2400){
							$(this).css("left",2400); //     $(this).css("left",1200);
							

						}
					}); 
					
					
				});
			},3600);		
			
			
});  // $(function(){   끝