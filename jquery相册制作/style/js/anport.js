/**
 *	万翔冷链物流网站功能
 *  作者：leycharl
 *	创建时间：2012-12-25
 *	最后修改时间：
 */
 
 
/* 导航 */
$(function(){
	var isShow = false;
	var timeOut = null;
	function renav(){
		$('#js-nav p a:not(.nav-on)').css({ color:'#767877', fontWeight:'normal'})
	}
	$('#js-nav p a').each(function(i){
		$(this).mouseover(function(){
			renav();
			$(this).css({ color:'#0965A4', fontWeight:'bold'});
			clearTimeout(timeOut);
			$('#js-nav ul li').css('display','none');
			if(i>0){$('#js-nav ul li').eq(i-1).show();}
		}).mouseout(function(){
			timeOut = setTimeout(function(){
				if(!isShow){
					$('#js-nav>ul>li').eq(i-1).css('display','none');
					renav();
				}
			},200);
		})
	})
	$('#js-nav ul li').mouseover(function(){
		clearTimeout(timeOut);
		isShow = true;	
	}).mouseout(function(){
		timeOut = setTimeout(function(){
			$('#js-nav ul li').css('display','none');
			renav();
		},100);
		isShow = false;	
	});
})

/* tab */
$(function(){
	$('.js-tabbtns ul li').each(function(i){
		$(this).mouseover(function(){
			$('.js-tabbtns ul li').removeClass('tabon');
			$(this).addClass('tabon');
			$('.js-tabcont dl').css('display','none').eq(i).css('display','block');
		})
	})
	var tabnum = 0;
	function tabShow(t){
		$('#js-indtab > div').eq(t).show().find('li').eq(0).addClass('tabon');	
		$('#js-indtab > div').eq(t).find('dl').eq(0).css('display','block')	
	}
	$('#js-tabpre').click(function(){
		if(tabnum > 0){
			tabnum-=1;
			$('#js-indtab > div').hide();
			tabShow(tabnum);
		}else{
			$('.js-tabbtns ul li').removeClass('tabon');
			tabShow(tabnum);
		}
	})
	$('#js-tabnxt').click(function(){
		if(tabnum < $('#js-indtab > div').length-1){
			tabnum+=1;
			$('#js-indtab > div').hide();
			tabShow(tabnum);
		}else{
			$('.js-tabbtns ul li').removeClass('tabon');
			tabShow(tabnum);
		}
	})
})

/* 语言选择 */
$(function(){
	var isShowlan = false;
	var lantm = null;
	$('#js-lanbtn').click(function(){
		$('#js-lanOpts1').hide();
		clearTimeout(lantm);
		$('#js-lanOpts').fadeIn(100);
	}).mouseout(function(){
		lantm = setTimeout(function(){
			if(!isShowlan){
			$('#js-lanOpts').fadeOut(200);
		}},500)
	});
	$('#js-lanOpts').mouseover(function(){
		clearTimeout(lantm);
		isShowlan = true;	
	}).mouseout(function(){
		lantm = setTimeout(function(){
			$('#js-lanOpts').fadeOut(200);	
		},500);
		isShowlan = false;	
	})
		$('#js-lanbtn1').click(function(){
			$('#js-lanOpts').hide();
		clearTimeout(lantm);
		$('#js-lanOpts1').fadeIn(100);
	}).mouseout(function(){
		lantm = setTimeout(function(){
			if(!isShowlan){
			$('#js-lanOpts1').fadeOut(200);
		}},500)
	});
	$('#js-lanOpts1').mouseover(function(){
		clearTimeout(lantm);
		isShowlan = true;	
	}).mouseout(function(){
		lantm = setTimeout(function(){
			$('#js-lanOpts1').fadeOut(200);	
		},500);
		isShowlan = false;	
	})
})

/* 友情链接 
$(function(){
	$('#js-flink').click(function(){
		$('#js-flink').find('ul').slideDown(100);
	});
	$('#js-flink').hover(function(){
		return false;
	},function(){
		$('#js-flink').find('ul').slideUp(100);
	})
});*/



/* 输入框获取焦点后默认文字消失 
$(function(){
	$('input:text').each(function(){  
		var txt = $(this).val();  
		$(this).focus(function(){  
			if(txt === $(this).val()) $(this).val("");  
		}).blur(function(){  
			if($(this).val() == "") $(this).val(txt);  
		});  
	})
})*/


window.onload = function dd(){
	var em = document.getElementById('email');
	var txt = em.value;
	em.onfocus = function(){
		if(txt == em.value){em.value = '';}	
	};
	em.onblur = function(){
		if(em.value == ''){em.value = txt}	
	}
};
 
/* 侧边导航hover */
$(function(){
	$('#js-sidebar li:not(.side-on)').hover(function(){
		$(this).css('background','url(style/images/side-on.gif) repeat-x')	
	},function(){
		$(this).css('background','url(style/images/side-bg.png) repeat-x')
	})	
})

/* news tab */
$(function(){
	$('#js-news h2 a').eq(0).addClass('indnews-on');
	$('#js-news>dl').eq(0).show();
	$('#js-news h2 a').hover(function(){
		$(this).addClass('indnews-on').siblings('a').removeClass('indnews-on');
		i = $(this).index();
		$('#js-news>dl').eq(i).fadeIn(200).siblings('dl').hide();
	},function(){return 0});	
})


/* 在线咨询 */
/*$(function(){
	$(".livechat .close").click(function(e) {
        $(".livechat").animate({right:'-50px'},"fast",function(){
			$(".livechat").hide();
			$(".linkcontact").show();
			})
    });
	$(".linkcontact").click(function(e) {
        $(".linkcontact").hide();
		$(".livechat").css({right:"10px"}).show();
    });
})*/
$(function(){
	$(".livechat .close").click(function(e) {
        
			$(".livechat").hide();
			$(".linkcontact").show();
		
    });
	$(".linkcontact").click(function(e) {
        $(".linkcontact").hide();
		$(".livechat").show();
    });
})

//满意度调查表
 $(".table_data tr:even").css({background:"#fcfcfc"});

/*$(function(){
	var defH = $('#js-lvct01').position().top;
	setInterval(function(){
		var scrollH = document.documentElement.scrollTop;
		$('#js-lvct01').css('top',defH+scrollH);	
	},50);
	$('#js-lvct01 a').hover(function(){
		$(this).stop().animate({
			width:'138px'
		},100);	
	},function(){
		$(this).stop().animate({
			width:'33px'
		},200);	
	});
})*/




//

 $(function(){
    var oBox=$("#select1").find("dt")
    var oSlect=oBox.find("ul");
    var oSlectLi=oSlect.find("li");
    var oH3=oBox.find("h3");
    var oSel=oBox.find("a");
    oH3.each(function(){
       $(this).click(function(e){
           $(this).parents("dt").find("ul").show();
           stopFunc(e);
        });
    })

    oSlectLi.each(function(){
        $(this).hover(function(){
            $(this).addClass("hover");
        },function(){
            $(this).removeClass("hover");
        })
        $(this).click(function(e){
            var oValue=$(this).text();
            $(this).parents("dt").find("h3").text(oValue);
            $(this).parents("dt").find("ul").hide();

        })
    })
    $(document).click(function(e){
        oSlect.hide();
        })
	
	var oNav=$("#nav").find("li");
	oNav.each(function(){
	  $(this).hover(function(){
			$(this).children('div').show();	
			$(this).children('div').find('a').show();
		},function(){
			$(this).children('div').hide();
			})				   
	})
	
})
function stopFunc(e){
    document.all? event.cancelBubble = true : e.stopPropagation();
}
  
	




















 
 
 
 
 