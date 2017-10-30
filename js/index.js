$(function()
{
	var play_btn=$(".play_btn");

	var number_div=$(".numbers");
	var div_one=$("#one");
	var div_two=$("#two");
	var div_three=$("#three");

	var go_score=$("#go_score");
	var retry_btn=$('#retry');

	
	var prgressfill=$('.progress');	

	var prg1=$('#progress1');
	var prg2=$('#progress2');
	var prg3=$('#progress3');

	//for javascript
	/*var prg1=document.getElementById('progress1');
	var prg2=document.getElementById('progress2');
	var prg3=document.getElementById('progress3');*/

	var id;
	var score=0;

	var start_boolean=true;
	var progress_cnt=1;
	var enter_value=null;
	var question_array=['2-1','3-2','1+2','1+1','2+3-2','3-1','3-2','2+1','1+2-1','1+2-2','2-1+1','2+1-2','3-3+2','3-3+1','3+2-3','3+1-3'];
	var answer_array=['1','1','3','2','3','2','1','3','2','1','2','1','2','1','2','1'];
	var index_value=Math.floor((Math.random()*question_array.length));
	$("#que").text(question_array[index_value]);
	/*console.log("random nu = "+index_value);
	console.log("question  = "+question_array[index_value]);
	console.log("answer  = "+answer_array[index_value]);*/

/*	$(window).bind("orientationchange", function(){
    var orientation = window.orientation;
    var new_orientation = (orientation) ? 0 : 180 + orientation;
    $('body').css({
        "-webkit-transform": "rotate(" + new_orientation + "deg)"
    });
});*/

	   play_btn.click(function()
      {
        
         $(".first_screen").hide();
		$(".game_screen").show();
        $(".final_container").hide();
        load();
      
      });

	div_one.click(function()
		{
			enter_value=div_one.text();
			check(enter_value);
		});
	div_two.click(function()
		{
			enter_value=div_two.text();
			check(enter_value);

			
		});
	div_three.click(function()
		{
			enter_value=div_three.text();
			check(enter_value);

			
		});

	function check(enter_value)
	{
		if(enter_value==answer_array[index_value])
			{
				score+=5;
				$("#nscore").text(score);
				index_value=Math.floor((Math.random()*question_array.length));
				$("#que").text(question_array[index_value]);
				//$("#game_box").css("background-color","green");
				progress();
			}
			else
			{
				result();
			}
			if(start_boolean)
			{
				start_boolean=false;
				progress();
			}
			

	}

	function progress()
	{
		clearInterval(id);
		progress_cnt=1;
		 id=setInterval(frame,25);
		
	}

	function frame()
		{
			if(progress_cnt >= 100)
			{
				result();
			
			}
			else
			{
				progress_cnt+=1;

				//for javascript
			/*	prg1.style.width=progress_cnt+ '%';
				prg2.style.width=progress_cnt+ '%';
				prg3.style.width=progress_cnt+ '%';*/

				//for jquery
				/*prg1.css("width",progress_cnt+ '%');
				prg2.css("width",progress_cnt+ '%');
				prg3.css("width",progress_cnt+ '%');*/
				prgressfill.css("width",progress_cnt+ '%');
			
			}
		}

		function load()
		{
			var hiscore=localStorage.getItem("scr");
			if(hiscore=='undefined')
			{
				score=0;
				localStorage.setItem("scr",score);
			}
			$("#highest_score").text("Best = "+hiscore);
		}

		function result()
		{
			
			var hiscr=localStorage.getItem("scr");
			if(hiscr<score)
			{
				localStorage.setItem("scr",score);
			}
			else
			{
				localStorage.setItem("scr",hiscr);
			}
			
			//$("#highest_score").text("HighestScore = "+score);
			go_score.text("Score = "+score);
				clearInterval(id);
				score=0;
				$("#game_box").css("background-color","red");
			 	$(".first_screen").hide();
				$(".game_screen").hide();
        		$(".final_container").show();
		}
		retry_btn.click(function()
      	{
        	location.reload();
      	});
});