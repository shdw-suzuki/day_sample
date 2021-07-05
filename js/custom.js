// JavaScript Document

$(document).ready(function(){

    var gallery_id_array = ["Landscape", "Lifestyle", "Food", "Hotel", "Craft", "Studio", "Calendar", "Still Life"],
        gallery_num_array = ["6","5","5","2","6","2","2","2"],
	gallery_url_array = ["landscape", "lifestyle", "food", "hotel", "craft", "studio", "calendar", "still-life"],

        sub_id_array = [["ESTONIA", "hawaii 01","hawaii 02","hawaii 03","HIMALAYA", "LATVIA"],
                        ["Oahu 01 _ Hawaii Style","Oahu 02 _ Hawaii Style", "私がととのう作業場。_ キナリノ","平戸 _ DISCOVER JAPAN", "料理上手の器選び"],
                        ["ON THE DISH", "今日の晩ごはん", "フランスの季節を楽しむお菓子作り", "自慢の煮込み","大豆で美味しい毎日レシピ"],
                        ["DISCOVER JAPAN", "Tokyo Lifestyle Hotel"],
                        ["KIMURA LAUHARA SHOP _ HAWAII", "OTA MOKKO _ ODAWARA","SNOWPEAK _ TSUBAMESANJO","TADAFUSA _ TSUBAMESANJO","TAKEUCHI OPTICAL _ SABAE","YOSHINORI TAKEMURA"],
                        ["BIGDOG", "RERIC"],
			["HAWAII CALENDAR2021", "Hawaii Style Calendar 2019"],
			["", ""],
                       ],
        sub_num_array = [["39","35","83","36","46","31"],
                         ["27","17","8","24","11"],
                         ["14","23","14","7","11"],
                         ["36","60"],
                         ["12","30","7","24","20","15"],
                         ["22","8"],
			 ["14","9"],
                         ["0","0"],
                        ],

        sub_name_array = [["Estonia", "Hawaii 01","Hawaii 02","Hawaii 03","Himalaya", "Latvia"],
                        ["Oahu 01 | Hawaii Style","Oahu 02 | Hawaii Style", "私がととのう作業場。| キナリノ","平戸 | DISCOVER JAPAN", "料理上手の器選び"],
                        ["ON THE DISH", "今日の晩ごはん", "フランスの季節を楽しむお菓子作り", "自慢の煮込み","大豆で美味しい毎日レシピ"],
                        ["DISCOVER JAPAN", "Tokyo Lifestyle Hotel"],
                        ["KIMURA LAUHARA SHOP | HAWAII", "OTA MOKKO | ODAWARA","SNOWPEAK | TSUBAMESANJO","TADAFUSA | TSUBAMESANJO","TAKEUCHI OPTICAL | SABAE","YOSHINORI TAKEMURA"],
                        ["BIGDOG", "RERIC"],
			["HAWAII CALENDAR2021", "Hawaii Style Calendar 2019"],
			["", ""],
                       ]

    function gls(id, sid ,label){

        var myhtml = "",
            k = "";
            id = id.substr(3);

    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン
	var myurl = gallery_url_array[id] + '.html?sub=' + sid;
            window.location.href = myurl;
    } else {
        // PC
	var myurl = gallery_url_array[id] + '.html?sub=' + sid;
            window.location.href = myurl;
    }


    };


    function opening_load(){

        var myhtml = "",
            k = "";

        $("#gallery").empty();
        myhtml += '<div class="gallery_label"></div>';

    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン
            myhtml += '<ul class="gallery" id="gallery99">';
            for(id = 0; id <= 7; id++){
                for(i = 0; i < gallery_num_array[id]; i++){
                    myhtml += '<li data-original="photo/'+gallery_id_array[id]+'/'+sub_id_array[id][i]+'/000.webp" class="lazy g'+id+'s'+i+'">'+
			'<div  class="_title0">'+gallery_id_array[id]+'</div><div  class="_title">'+sub_name_array[id][i]+'</div></li>'
                }
            }
            myhtml += '</ul></div>';
            $("#gallery").append(myhtml);
            $('.g0s0').on('click', function () {gls('gn_0', '0','HAWAII CALENDAR2021');});
            $('.g0s1').on('click', function () {gls('gn_0', '1','Hawaii Style Calendar 2019');});
            $('.g1s0').on('click', function () {gls('gn_1', '0','KIMURA LAUHARA SHOP _ HAWAII');});
            $('.g1s1').on('click', function () {gls('gn_1', '1','OTA MOKKO _ ODAWARA');});
            $('.g1s2').on('click', function () {gls('gn_1', '2','SNOWPEAK _ TSUBAMESANJO');});
            $('.g1s3').on('click', function () {gls('gn_1', '3','TADAFUSA _ TSUBAMESANJO');});
            $('.g1s4').on('click', function () {gls('gn_1', '4','TAKEUCHI OPTICAL _ SABAE');});
            $('.g1s5').on('click', function () {gls('gn_1', '5','YOSHINORI TAKEMURA');});
            $('.g2s0').on('click', function () {gls('gn_2', '0','今日の晩ごはん');});
            $('.g2s1').on('click', function () {gls('gn_2', '1','フランスの季節を楽しむお菓子作り');});
            $('.g2s2').on('click', function () {gls('gn_2', '2','大豆で美味しい毎日レシピ');});
            $('.g2s3').on('click', function () {gls('gn_2', '3','自慢の煮込み');});
            $('.g2s4').on('click', function () {gls('gn_2', '4','ON THE DISH');});
            $('.g3s0').on('click', function () {gls('gn_3', '0','DISCOVER JAPAN');});
            $('.g3s1').on('click', function () {gls('gn_3', '1','Tokyo Lifestyle Hotel');});
            $('.g4s0').on('click', function () {gls('gn_4', '0','ESTONIA');});
            $('.g4s1').on('click', function () {gls('gn_4', '1','hawaii 01');});
            $('.g4s2').on('click', function () {gls('gn_4', '2','hawaii 02');});
            $('.g4s3').on('click', function () {gls('gn_4', '3','hawaii 03');});
            $('.g4s4').on('click', function () {gls('gn_4', '4','HIMALAYA');});
            $('.g4s5').on('click', function () {gls('gn_4', '5','LATVIA');});
            $('.g5s0').on('click', function () {gls('gn_5', '0','LIFESTYLE');});
            $('.g5s1').on('click', function () {gls('gn_5', '1','LIFESTYLE');});
            $('.g5s2').on('click', function () {gls('gn_5', '2','LIFESTYLE');});
            $('.g5s3').on('click', function () {gls('gn_5', '3','LIFESTYLE');});
            $('.g5s4').on('click', function () {gls('gn_5', '4','LIFESTYLE');});
            $('.g6s0').on('click', function () {gls('gn_6', '0','BIGDOG');});
            $('.g6s1').on('click', function () {gls('gn_6', '1','RERIC');});

    } else {
        // PC
            myhtml += '<ul class="gallery" id="gallery99">';
            for(id = 0; id <= 7; id++){
                for(i = 0; i < gallery_num_array[id]; i++){
                    myhtml += '<li data-original="photo/'+gallery_id_array[id]+'/'+sub_id_array[id][i]+'/000.webp" class="lazy g'+id+'s'+i+'">'+
			'<div  class="_title0">'+gallery_id_array[id]+'</div><div  class="_title">'+sub_name_array[id][i]+'</div></li>'
                }
            }
            myhtml += '</ul></div>';
            $("#gallery").append(myhtml);
            $('.g0s0').on('click', function () {gls('gn_0', '0','HAWAII CALENDAR2021');});
            $('.g0s1').on('click', function () {gls('gn_0', '1','Hawaii Style Calendar 2019');});
            $('.g1s0').on('click', function () {gls('gn_1', '0','KIMURA LAUHARA SHOP _ HAWAII');});
            $('.g1s1').on('click', function () {gls('gn_1', '1','OTA MOKKO _ ODAWARA');});
            $('.g1s2').on('click', function () {gls('gn_1', '2','SNOWPEAK _ TSUBAMESANJO');});
            $('.g1s3').on('click', function () {gls('gn_1', '3','TADAFUSA _ TSUBAMESANJO');});
            $('.g1s4').on('click', function () {gls('gn_1', '4','TAKEUCHI OPTICAL _ SABAE');});
            $('.g1s5').on('click', function () {gls('gn_1', '5','YOSHINORI TAKEMURA');});
            $('.g2s0').on('click', function () {gls('gn_2', '0','今日の晩ごはん');});
            $('.g2s1').on('click', function () {gls('gn_2', '1','フランスの季節を楽しむお菓子作り');});
            $('.g2s2').on('click', function () {gls('gn_2', '2','大豆で美味しい毎日レシピ');});
            $('.g2s3').on('click', function () {gls('gn_2', '3','自慢の煮込み');});
            $('.g2s4').on('click', function () {gls('gn_2', '4','ON THE DISH');});
            $('.g3s0').on('click', function () {gls('gn_3', '0','DISCOVER JAPAN');});
            $('.g3s1').on('click', function () {gls('gn_3', '1','Tokyo Lifestyle Hotel');});
            $('.g4s0').on('click', function () {gls('gn_4', '0','ESTONIA');});
            $('.g4s1').on('click', function () {gls('gn_4', '1','hawaii 01');});
            $('.g4s2').on('click', function () {gls('gn_4', '2','hawaii 02');});
            $('.g4s3').on('click', function () {gls('gn_4', '3','hawaii 03');});
            $('.g4s4').on('click', function () {gls('gn_4', '4','HIMALAYA');});
            $('.g4s5').on('click', function () {gls('gn_4', '5','LATVIA');});
            $('.g5s0').on('click', function () {gls('gn_5', '0','LIFESTYLE');});
            $('.g5s1').on('click', function () {gls('gn_5', '1','LIFESTYLE');});
            $('.g5s2').on('click', function () {gls('gn_5', '2','LIFESTYLE');});
            $('.g5s3').on('click', function () {gls('gn_5', '3','LIFESTYLE');});
            $('.g5s4').on('click', function () {gls('gn_5', '4','LIFESTYLE');});
            $('.g6s0').on('click', function () {gls('gn_6', '0','BIGDOG');});
            $('.g6s1').on('click', function () {gls('gn_6', '1','RERIC');});
    }


        $( ".lazy" ).lazyload(
            {
                threshold: 200 ,			// 200pxの距離まで近づいたら表示する
                effect: "fadeIn" ,		// じわじわっと表示させる
                effect_speed: 1500 ,		// 3秒かけて表示させる
            } ) ;

	$("body,#wrapper").css("background-color",gallery_bgc_array[id]);

    };



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

    var outlineTop = $("#opening").offset().top;
    var contentTop = $("#content").offset().top;
    var galleryTop = $("#gallery").offset().top;

    function scroll_effect(){

        if( $(this).scrollTop() > contentTop ) {
            $("#opening").addClass("sticky");
        } else {
            $("#opening").removeClass("sticky");
	}

        if( $(this).scrollTop() > contentTop - 100 ) {
            $("#maintitle").addClass("sticky");
            $("#headertitle").removeClass("sticky");
	    $("header").css({"background-color":"#ffffff"});
	    $("footer").css({"position":"fixed"});
        } else {
            $("#headertitle").addClass("sticky");
            $("#maintitle").removeClass("sticky");
	    $("header").css({"background-color":"#c8cdcd"});
	    $("footer").css({"position":"unset"});
           
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



$(function () {
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
        // スマートフォン
    var $nav = $('#nav_wrapper');
	$nav.addClass('is-visible');
	$("header").css({"visibility":"hidden"});
	$("header").css({"display":"none"});
	$("#opening").css({"display":"none"});
	$("#link02").css({"z-index":"9999"});
		        opening_load();

    } else if (ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
        // タブレット
	$(function() {
	$('.dropdown').hover(function() {
	$('#dropdown-menu').slideToggle();
	}, function() {
	$('#dropdown-menu').hide();
	});
	});
    } else {
        // PC
	$(".openbtn").css({"display":"none"});
	$(function() {
	$('.dropdown').hover(function() {
	$('#dropdown-menu').slideToggle();
	}, function() {
	$('#dropdown-menu').hide();
	});
	});
        opening_load();
        $('#dropdown').click(function (){
		        opening_load();
            var position = $('#gallery').offset().top;
            $("body,html").animate({scrollTop: position}, 1500,  'easeInOutExpo');
    	});
    };
        $('.js-close , #overlay').click(function () {
          $("body").removeClass("no_scroll"); // 背景固定させるクラス削除
          $('#overlay, .modal-window').fadeOut();
        });
});


});