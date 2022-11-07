/*document.write("<script id='ze-snippet' src='https://static.zdassets.com/ekr/snippet.js?key=d3df8cc0-9e78-467b-b1fe-a01db0403abb'> </script>");*/

// window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
// d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
// _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
// $.src="https://v2.zopim.com/?6GvltVS44PSBF2lPlsA0vf2m7cRNpXTw";z.t=+new Date;$.
// type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

/*ReadMore Read Less*/
$('.readclick').click(function(){
   $('.expandtext').slideToggle();
  $(this).toggleClass('active');
});
/*ReadMore Read Less*/

$( document ).ready(function() {


    var waitForZopim = setInterval(function () {

        if (window.$zopim === undefined || window.$zopim.livechat === undefined) {
            return;
        }

        function setButtonURL() {
        	zE.activate();
        }


        $('.chat').click( function(){
        	zE.activate();
        });
        $('.chat_now').click( function(){
        	zE.activate();
        });


        $('.thankyou-chat').click( function(){
        	zE.activate();
        });


      /*  zE(function(){
            $zopim(function(){

              $zopim.livechat.theme.setColors({badge: '#e30b0d', primary: '#e30b0d'});

              $zopim.livechat.departments.filter('Senior Consultant', 'Senior Consultant');
                 $zopim.livechat.concierge.setTitle('Senior Consultant');
                 $zopim.livechat.concierge.setName('Brad Wilson');
                 $zopim.livechat.window.setTitle("Go Animation Deal");
        		 $zopim.livechat.badge.setText('Chat Now & Avail 70% Discount Now!');

              $zopim.livechat.theme.reload(); // apply new theme settings
            });
        }); */


    clearInterval(waitForZopim);

    }, 100);
});


$(document).ready(function(){
	$('.menu').click(function(){
		$(this).toggleClass('open');
		$('.main-nav').toggleClass('open');
		$('body').toggleClass('ovr-hidden');
	});

	$('.additinal-li ul.additinal-li-ul li').hover(function(){
        $('.additinal-li ul.additinal-li-ul li').removeClass('activelink');
        $(this).addClass('activelink');
        var tagid = $(this).data('tag');
        $('.additnal-tab').toggleClass('active');
        $('.additnal-tab>div').hide();
        $('#'+tagid).show();
    });

	$(".clickRead").click(function() {
		var kkk = $(this).text();
		if (kkk == "Read More" ) {
			$(this).hide();
			$(this).closest('.contentExtra').find(".load-more").removeClass('hidden').fadeIn('slow');

		}else {
			//$("#clickRead").text("Read More");
		}
	});
	$('.rght-open .side-head').on('click', function() {
      $('.rght-open').toggleClass('active');
      $('.black-layout').fadeToggle();
    });

    $('.lft-open .side-head').on('click', function() {
      $('.lft-open').toggleClass('active');
      $('.black-layout').fadeToggle();
    });

    $(function(){
		$("header").before($(".StickyHeader").clone().addClass("stick"));
		$(window).scroll(function(){
			if($(window).scrollTop() >= 300){
				$('.side-bar-sm-frm.rght-open').addClass('openfrm');
				$('.side-bar-sm-frm.lft-open').addClass('openfrm');
			}
		else{
			$('.side-bar-sm-frm.rght-open').removeClass('openfrm');
			$('.side-bar-sm-frm.lft-open').removeClass('openfrm');
		}

		});
	});

	$('ul.diff-ul li').click(function(){
		$(this).prevAll('li').removeClass('current');
		$(this).prevAll('li').find('p').slideUp();
		$(this).nextAll('li').removeClass('current');
		$(this).nextAll('li').find('p').slideUp();
		$(this).addClass('current');
		$(this).find('p').slideDown();
	});

	$('.triggerpopup').click(function() {
		var thisrel = $(this).attr('rel');
		var type = $(this).data('category');
	    var amount = $(this).attr('name');


		$('.popupform1 input[name="packageid"]').val(thisrel);

		$('input[name=lead_type]').val(type);
		$('input[name=lead_amount]').val(amount);

		$('.popupform1').toggleClass('active');
		$('body').toggleClass('overlay');




	});

	$('.triggerpopup1').click(function() {

		var thisrel = $(this).attr('rel');
		var type = $(this).data('category');
	    var amount = $(this).attr('name');


		$('input[name=lead_type]').val(type);
		$('input[name=lead_amount]').val(amount);


		$('.popupform1 input[name="packageid"]').val('1001');
		$('.popupform1').toggleClass('active');
		$('body').toggleClass('overlay');


	});

	$('.triggerpopup2').click(function() {
		$('.popupform1 input[name="packageid"]').val('1001');
		$('.popupform1').toggleClass('active');
		$('body').toggleClass('overlay');
	});

	$('#pop_lead').validate();
	$('#pop_discount').validate();
	$('#footerForm').validate();


	$('.closethis1').click(function() {
	$('.popupform1 input[name="packageid"]').val('1001');
		$('.popupform-style').removeClass('active');
		$('body').toggleClass('overlay');
	});

	$('#closethis').click(function(){
	 	$('.popupform').toggleClass('active');
	 	$('body').toggleClass('overlay');
	});

/* tabbing Function */
	$('[data-targetit]').on('click', function (e) {
		$('.pkg-slidr').slick('slickGoTo', 0)
	    $(this).addClass('active');
	    $(this).siblings().removeClass('active');
	    var target = $(this).data('targetit');
	    $('.' + target).siblings('[class^="box-"]').hide();
	    $('.' + target).show();
  	});

});


$(window).on('load', function(){

	$('.grid').isotope({
	  itemSelector: '.grid-item',
	});

	// filter items on button click
	$('.filter-button-group .filter').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $('.grid').isotope({ filter: filterValue });
	  $('.filter-button-group li').removeClass('active');
	  $(this).addClass('active');
	});

	$(".filter li").on("click", function() {
		var getdata = $(this).text();
		$(".dat").text(getdata);
		console.log(getdata);
	});


    var imgh = $(".imgheight").height();
    $('.h-custom').height(imgh);
    var imgh2 = $(".imgheight2").height();
    $('.h-custom2').height(imgh2);
});

$('.review-slider').slick({
	dots: true,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true
});

$('.pkg-slidr').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('#vidanimation').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.client-txt-slidr').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.client-img-slidr, .cstmr-portfolio-slidr'
});
$('.cstmr-portfolio-slidr').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.client-txt-slidr',
  dots: false,
  arrows: true,
  fade: true,
  focusOnSelect: true
});
$('.client-img-slidr').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  focusOnSelect: true,
  asNavFor: '.client-txt-slidr',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




if ($(window).width() < 824) {

	$('.f-details ul li a').each(function(){
	    $(this).html($(this).html().replace(/&nbsp;/gi,''));
	});

	$('ul.logo-ul').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	});

	$('.logo-client-sec ul').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	});

	$('ul.service-ul').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	});

	$('ul.process-ul').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	});

	$('ul.main-points-ul').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	});

	$('.disclaimer p:first-child').click(function(){
		$('.disclaimer p:first-child').toggleClass('active');
		$('.disclaimer p:last-child').slideToggle();
	});

	$('.footr-hd').click(function(){
		if($(this).hasClass('active') == false){
			$('ul.footr-menu').slideUp();
			$(this).siblings('ul.footr-menu').slideToggle();
			$('.footr-hd').removeClass('active');
			$(this).toggleClass('active');
		}
		else if($(this).hasClass('active') == true){
			$('ul.footr-menu').slideUp();
			$('.footr-hd').removeClass('active');
		}
	});

}
