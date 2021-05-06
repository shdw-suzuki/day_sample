// JavaScript Document

$(document).ready(function(){



    var gallery_id_array = ["CALENDAR_1", "CALENDAR_2", "FOOD_1", "FOOD_2", "FOOD_3", "FOOD_4", "LIFESTYLE_1", "LIFESTYLE_2", "LIFESTYLE_3"],
        gallery_num_array = ["9","13","7","18","7","5","24","11","8"]
        gallery_bgc_array = ["pink","pink","lightyellow","lightyellow","lightyellow","lightyellow","cornsilk","cornsilk","cornsilk"]

    function gallery_load(id, label){

        var myhtml = "",
            k = "";

        $("#gallery").empty();
        myhtml += '<div class="gallery_label">'+label+'</div>';

            id = id.substr(3);

    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン

            myhtml += '<ul class="gallery" id="gallery'+id+'">';
            for(i = 1; i <= gallery_num_array[id]; i++){
                if(i < 10) {k = "00"+i;} else {k = "0"+i;}
                myhtml += 
                    '<li data-original="sample/'+gallery_id_array[id]+'/'+k+'.jpg" class="lazy g'+id+'"><a href="sample/'+gallery_id_array[id]+'/'+k+'.jpg" data-lightbox="lgb"></a>'+
                    '</li>'  //
            }
            myhtml += '</ul></div>';
            $("#gallery").append(myhtml);

    } else {
        // PC

            myhtml += '<ul class="gallery" id="gallery'+id+'">';
            for(i = 1; i <= gallery_num_array[id]; i++){
                if(i < 10) {k = "00"+i;} else {k = "0"+i;}
                myhtml += 
                    '<li data-original="sample/'+gallery_id_array[id]+'/'+k+'.jpg" class="lazy g'+id+'">'+
                    '</li>'  //
            }
            myhtml += '</ul></div>';
            $("#gallery").append(myhtml);
            $('.g0').on('click', function () {gl('gn_0', 'CALENDAR_1');});
            $('.g1').on('click', function () {gl('gn_1', 'CALENDAR_2');});
            $('.g2').on('click', function () {gl('gn_2', 'FOOD_1');});
            $('.g3').on('click', function () {gl('gn_3', 'FOOD_2');});
            $('.g4').on('click', function () {gl('gn_4', 'FOOD_3');});
            $('.g5').on('click', function () {gl('gn_5', 'FOOD_4');});
            $('.g6').on('click', function () {gl('gn_6', 'LIFESTYLE_1');});
            $('.g7').on('click', function () {gl('gn_7', 'LIFESTYLE_2');});
            $('.g8').on('click', function () {gl('gn_8', 'LIFESTYLE_3');});
            $('.g9').on('click', function () {gl('gn_9', '**********');});
    }


        $( ".lazy" ).lazyload(
            {
                threshold: 200 ,			// 200pxの距離まで近づいたら表示する
                effect: "fadeIn" ,		// じわじわっと表示させる
                effect_speed: 1500 ,		// 3秒かけて表示させる
            } ) ;

	$("body,#wrapper").css("background-color",gallery_bgc_array[id]);

    };

    function gl(id, label){

        var myhtml = "",
            k = "";

        $("#gallery").empty();
        myhtml += '<div class="gallery_label">'+label+'</div>';

            id = id.substr(3);

            myhtml += '<div class="flexslider" id="gallery'+id+'"><ul class="slides">';  //

            for(i = 1; i <= gallery_num_array[id]; i++){
                if(i < 10) {k = "00"+i;} else {k = "0"+i;}
                myhtml += 
                    '<li ><a href="sample/'+gallery_id_array[id]+'/'+k+'.jpg"  data-lightbox="lgbpc">'+
                    '<img src="sample/'+gallery_id_array[id]+'/'+k+'.jpg" class="lazy"></a></li>'  //
            }

            myhtml += '</ul></div>';  //
            $("#gallery").append(myhtml);

            //$('#gallery'+id).slickLightbox();

        $( ".lazy" ).lazyload(
            {
                threshold: 200 ,			// 200pxの距離まで近づいたら表示する
                effect: "fadeIn" ,		// じわじわっと表示させる
                effect_speed: 1500 ,		// 3秒かけて表示させる
            } ) ;


        $('.flexslider').flexslider({
		animation: "slide",
    		animationLoop: true,
                slideshow: false,
                itemWidth: 350,
                itemMargin: 15,
                minItems: 1,
		move: 1
	});

    };


     
    //    gallery_load("gn_1", "advertisement");


    $('#gallery_nav .gallery_nav_item').bind('click', function() {


        var myID = $(this).attr("id");
        var myLabel = $(this).find('.gallery_title').text();

        //ナビアイテムのアクティブ化
        var $navItem = $("#gallery_nav").find('.gallery_nav_item');
        $navItem.removeClass("active");
        $(this).addClass("active");


        var position = $('#gallery').offset().top;
        $("body,html").animate({scrollTop: position}, 1500,  'easeInOutExpo');


        gallery_load(myID, myLabel);
	$('#dropdown-menu').css('display','none');

        $('#nav_wrapper').removeClass('is-visible');

    });





    var $header = $('body');
    var headerHidden = true;

    var outlineTop = $("#header_logo").offset().top;
    var globalnavTop = $("#global_nav").offset().top;
    var gallerynavTop = $("#gallery_nav").offset().top;

    function scroll_effect(){
        if( $(this).scrollTop() > gallerynavTop ) {
            $("#gallery_nav").addClass("sticky");
        } else {
            $("#gallery_nav").removeClass("sticky");
        }

        if( $(this).scrollTop() > globalnavTop ) {
            $("#global_nav").addClass("sticky");
        } else {
            $("#global_nav").removeClass("sticky");
        }

        if( $(this).scrollTop() > outlineTop ) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }

        if( $(this).scrollTop() > 550) {
            $("#global_nav").addClass("sticky");
        } else {
            $("#global_nav").removeClass("sticky");
        }

        if( $(this).scrollTop() > 200 ) {
            if( headerHidden ) {
                $header.removeClass("opening");
                headerHidden = false;
            }
        }else {
            if( !headerHidden ) {
                $header.addClass("opening");
                headerHidden = true;
            }
        }
    };

    $(window).scroll(function () {
        scroll_effect();
    });

    scroll_effect();


    var timer = false;
    $(window).resize(function() {
        if (timer !== false) {clearTimeout(timer);}
        timer = setTimeout(function() {
            scroll_effect();
        }, 200);
    });




    var $nav = $('#global_nav');
    $("#smp_btn").click(function (){
        $nav.addClass("is-visible");
        return false;
    });

    $("#profile_btn").click(function (){
        $("#profile_wrapper").addClass("is-visible");
        return false;
    });

    $("#profile_wrapper").click(function (){
        $("#profile_wrapper").removeClass("is-visible");
        return false;
    });

    $(window).load(function() {
        $('body,html').animate({scrollTop:0}, 1, 'easeInOutExpo');
        $("body").css({"opacity":1});
    });

$(function() {
    $('.multiple-item').slick({
          infinite: true,
          dots:true,
          slidesToShow: 6,
          slidesToScroll: 6,
          responsive: [{
               breakpoint: 768,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
               }
          },{
               breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                    }
               }
          ]
     });
});

$(function() {
	$('#dropdown').hover(function() {
	$('#dropdown-menu').slideToggle();
	}, function() {
	$('#dropdown-menu').hide();
	});
});

$(function () {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン

	$('#dropdown').click(function (){
        	$('#nav_wrapper').addClass('is-visible');
        	return false;
    	});


    	$('#nav_close').click(function (){
        	$('#nav_wrapper').removeClass('is-visible');
        	return false;
	});

    } else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
        // タブレット
    } else {
        // PC
	$('#dropdown').css('background','rgba(0, 0, 0, 0)');
    };
});



});