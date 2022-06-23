// section 1
// scrolling down to sections

$(".link").click(function () {
  let offset = $(`#${this.innerHTML.toLowerCase()}`).offset().top;

  $("html,body").animate(
    {
      scrollTop: `${offset}px`,
    },
    1000
  );
});
// *************************************************************************************************************

// close and open nav box

$(".nav-box h3").click(function () {
  $(".nav-box").toggleClass("slide");
});

$(".exe").click(function () {
  $(".nav-box").toggleClass("slide");
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 250) {
    $(".nav-box h3").removeClass("d-flex");
    $(".nav-box h3").addClass("d-none");
  } else {
    $(".nav-box h3").removeClass("d-none");
    $(".nav-box h3").addClass("d-flex");
  }
});

// *************************************************************************************************************

// section 2
$(document).ready(function () {
  $(".singers p").slideUp();
});

$(".singers h3").click(function () {
  $(".singers p").not($(this).siblings()).slideUp(500);
  $(this).siblings().slideToggle(500);
});

// *************************************************************************************************************

// section 3 countdown

let countDown = setInterval(() => {
  let eventDate = new Date(2022, 10, 1);
  let todayDate = new Date();

  let remainingTime = eventDate - todayDate;

  var second = Math.floor(remainingTime / 1000);
  var minute = Math.floor(second / 60);
  var hour = Math.floor(minute / 60);
  var day = Math.floor(hour / 24);

  hour %= 60;
  minute %= 60;
  second %= 60;

  $("#day").html(day + " D");
  $("#hour").html(hour + " H");
  $("#minute").html(minute + " M");
  $("#second").html(second + " S");
}, 1000);

// *************************************************************************************************************

// section 4   contact

let message = $("#message");

$("#message").keyup(function () {
  $(".remained").html(
    `<span>${100 - message.val().length}</span> Character Remaining`
  );

  if ($("#message").val().length > 100) {
    $(".remained").html("Your available characters finished");
    $(".remained").css({
      color: "red",
      fontSize: "20px",
    });
    $("#message").attr("disabled", "disabled");
    $(".try").removeClass("d-none");
  }

  $(".try").click(function () {
    $("#message").removeAttr("disabled");
    $("#message").val("");
    $(".remained").html(
      `<span>${100 - message.val().length}</span> Character Remaining`
    );
    $(".remained").css({
      color: "black",
    });
    $(".try").addClass("d-none");
  });
});
