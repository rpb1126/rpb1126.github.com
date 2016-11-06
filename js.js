$(function(){
    $('#list li').hover(function(){
        $(this).css('background','#ccc')
    },function(){
        $('#list li').css('background','none')
    })
    $('li').each(function(i){
        $(this).css('left',i*150)
    });
     setTimeout(function(){
        $('#banner .one').animate({'left':500},'easing');
        $('#banner .two').animate({'left':400},'easing')
    },500);
    var n = 0;
    timer = setInterval(function(){
        n++;
        $('#banner1').animate({'left':n*-1349},function(){
            if(n==3){
                $('#banner1').css('left',0);
                n=0;
            }
        })
    },3000);
    $('#banner1').mouseenter(function(){
        clearInterval(timer)
    })
    $('#banner1').mouseleave(function(){
        timer = setInterval(function(){
            n++;
            $('#banner1').animate({'left':n*-1349},function(){
                if(n==3){
                    $('#banner1').css('left',0);
                    n=0;
                }
            })
        },5000);
    });
    var x=-40;
    setInterval(function(){
        x+=10;
        $('.bot').css('background-position',x)
    },30);
	$('.mid-r p').hover(function(){
			$('.mid-r p .top').stop().animate({top:0});
			$('.mid-r p .botm').stop().animate({bottom:0});
		},function(){
			$('.mid-r p .top').stop().animate({top:-125})
			$('.mid-r p .botm').stop().animate({bottom:-125})
			});
    $('.mid-r1 p').hover(function(){
        $('.mid-r1 p .top').stop().animate({top:0});
        $('.mid-r1 p .botm').stop().animate({bottom:0});
    },function(){
        $('.mid-r1 p .top').stop().animate({top:-125})
        $('.mid-r1 p .botm').stop().animate({bottom:-125})
    });
    $('.mid-r2 p').hover(function(){
        $('.mid-r2 p .top').stop().animate({top:0});
        $('.mid-r2 p .botm').stop().animate({bottom:0});
    },function(){
        $('.mid-r2 p .top').stop().animate({top:-125})
        $('.mid-r2 p .botm').stop().animate({bottom:-125})
    });
    var bOk=false;
    var iNow = 0;
    $('.btn li').click(function(index){
        iNow = $(this).index();
        tab(iNow);
    });
    $('.left1').click(function(){
        if(bOk)return;
        bOk=true;
        iNow++;
        tab(iNow);
    });
    $('.right1').click(function(){
        if(bOk)return;
        bOk=true;
        iNow--;
        if(iNow==-1){iNow=2};
        tab(iNow);

    });
    function tab(index){
        $('.btn li').removeClass('active1');
        $('.btn li').eq(index%3).addClass('active1');
        $('.box-3').stop().animate({left:index*-265},function(){
            if(iNow==3){
                $(this).css('left',0);
                iNow=0;
            }
            bOk=false;
        })
    }
    $('.top1').click(function(){
        $('body').stop().animate({'scrollTop':0})
    })
    $('.top1').hover(function(){
        $('.top1').css('opacity','0.4')
    },function(){
        $('.top1').css('opacity',1)
    })
});