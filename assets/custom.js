$('.banner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('.main-review').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.home-collection-product').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})


$(document).ready(function () {
    var pTabItem = $(".prodNav .ptItem");
    $(pTabItem).click(function () {
      // Tab nav active functionality
      $(pTabItem).removeClass("active");
      $(this).addClass("active");
  
      // Tab container active functionality
      var tabid = $(this).attr("id");
      $(".prodMain").removeClass("active");
      $("#" + tabid + "C").addClass("active");
  
      return false;
    });
  });


  $(document).ready(function () {
    var pTabItem_ts = $(".prodNav_ts .ptItem");
    $(pTabItem_ts).click(function () {
      // Tab nav active functionality
      $(pTabItem_ts).removeClass("active");
      $(this).addClass("active");
  
      // Tab container active functionality
      var tabid_ts = $(this).attr("id");
      $(".prodMain_ts").removeClass("active");
      $("#" + tabid_ts + "C").addClass("active");
  
      return false;
    });
  });
  