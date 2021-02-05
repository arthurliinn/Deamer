$(function(){
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    if($(window).width() >= 768 ){
      if(scrollVal > 0){
        $(".navbar").css({"background-color":"#131635","box-shadow":"5px 5px 6px #23274d"});
      }else{
        $(".navbar").css({"background-color":"#131635","box-shadow":"unset"})
      }
    }

    
    let nav_height = $(".phone_nav").height();
    $(".phone_nav").css("height",nav_height);
    setTimeout(function(){
      $(".phone_nav").css("height","0px");
    },300);
    phone_switch = false;

    let nav_link_list_height = $(".phone_link_list").height();
    $(".phone_link_list").css("height",nav_link_list_height);
    setTimeout(function(){
      $(".phone_link_list").css("height","0px");
    },300);
    phone_linklist_switch = false;
  
  });

  $(".works_slider").slick({
    dots: false,
    nav: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoPlaySpeed: 10000,
    speed: 2000,
    arrows: false,
    prevArrow: "<img class='slick-arrow slick-prev' src='img/arrow-left.svg'><div class='sk-circle left_hover_circle'><div class='sk-circle1 sk-child'></div><div class='sk-circle2 sk-child'></div><div class='sk-circle3 sk-child'></div><div class='sk-circle4 sk-child'></div><div class='sk-circle5 sk-child'></div><div class='sk-circle6 sk-child'></div><div class='sk-circle7 sk-child'></div><div class='sk-circle8 sk-child'></div><div class='sk-circle9 sk-child'></div><div class='sk-circle10 sk-child'></div><div class='sk-circle11 sk-child'></div><div class='sk-circle12 sk-child'></div></div>",
    nextArrow: "<img class='slick-arrow slick-next' src='img/arrow-right.svg'><div class='sk-circle right_hover_circle'><div class='sk-circle1 sk-child'></div><div class='sk-circle2 sk-child'></div><div class='sk-circle3 sk-child'></div><div class='sk-circle4 sk-child'></div><div class='sk-circle5 sk-child'></div><div class='sk-circle6 sk-child'></div><div class='sk-circle7 sk-child'></div><div class='sk-circle8 sk-child'></div><div class='sk-circle9 sk-child'></div><div class='sk-circle10 sk-child'></div><div class='sk-circle11 sk-child'></div><div class='sk-circle12 sk-child'></div></div>",
    mobileFirst:true,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          slidesToShow: 3,
          slidesToScroll:3,
          
        }
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow: 3,
          slidesToScroll:3,
        }
      },
      {
        breakpoint:640,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
          
        }
      },
      {
        breakpoint:480,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
          
        }
      },
      {
        breakpoint:360,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
          
        }
      },
      {
        breakpoint:320,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
        }
      },
      {
        breakpoint:260,
        settings:{
          slidesToShow: 1,
          slidesToScroll:1,
        }
      },
    ]
  });

  $(".client_slider").slick({
    slidesToShow: 4,
    slidesToScroll:1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
  });


});


let phone_switch = false;
$(".phone_btn").on("click",function(){
  if(phone_switch == false){
    $(".phone_nav").css("height","250px");
    phone_switch = true;
    setTimeout(function(){
      $(".phone_nav").css("height","auto");
    },500);
  }else{
    let nav_height = $(".phone_nav").height();
    $(".phone_nav").css("height",nav_height);
    setTimeout(function(){
      $(".phone_nav").css("height","0px");
    },300);
    phone_switch = false;


    let nav_link_list_height = $(".phone_link_list").height();
    $(".phone_link_list").css("height",nav_link_list_height);
    setTimeout(function(){
      $(".phone_link_list").css("height","0px");
    },300);
    phone_linklist_switch = false;


  }

});



$(".work_btn").on("click",function(){
  $('.type_container').css("display",'none');
  let work_type_btn = '.' +"works_type_"+ $(this).attr('class').split(' ')[1];
  $(work_type_btn).css("display",'block');
});


// $(".service_btn_index").on("click",function(){
//   let targetPosition = $(".service_container").offset().top - 200;
//   $("html,body").animate({scrollTop:targetPosition},1000);
// });

$(".contact_btn").on("click",function(){
  let targetPosition = $("footer").offset().top;
  $("html,body").animate({scrollTop:targetPosition},1000);
});


$("#gotop").on("click",function(){
  $("html,body").animate({scrollTop:0},1000);
});

$(".linklist_btn").mouseover(function(){
  $('.link_list').css("height","170px")
})

$(".linklist_btn").mouseout(function(){
  $('.link_list').css("height","0px")
})

let phone_linklist_switch = false;
$('.phone_link_list_btn').on('click',function(){
  if( phone_linklist_switch == false){
    $(".phone_link_list").css("height","170px");
    setTimeout(function(){
      $(".phone_link_list").css("height","auto");
    },300);
    phone_linklist_switch = true;
  }else{
    let nav_height = $(".phone_link_list").height();
    $(".phone_link_list").css("height",nav_height);
    setTimeout(function(){
      $(".phone_link_list").css("height","0px");
    },300);
    phone_linklist_switch = false;
  }
  

})


