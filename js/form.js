//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var current_section = 0;
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var duration = 600;

// copied from https://stackoverflow.com/questions/57939882/saving-form-submitted-data-to-csv-file-using-javascript-jquery
function clearForm() {
  document.getElementById("msform").reset();
}

function submitForm() {
  clearForm();
}

// validate email
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// validate age
function validateAge(ageText) {
  const regex = /^(?:1[0-1][0-9]|120|[1-9][0-9]?)$/;
  return regex.test(ageText);
}

// validate zipcode
function validateZipCode(zipcodeText) {
  const regex = /^[0-9]{5}$/;
  return regex.test(zipcodeText);
}

$(document).ready(function () {
  $(".next-section").click(function () {
    // console.log("current_fs", current_fs);

    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    // console.log("current_section", current_section);
    current_section += 1;
    // console.log("moved to section", current_section);

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq(current_section).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({opacity: opacity });
        },
        duration: duration,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        // easing: "easeInOutBack",
      }
    );
  });

  $(".previous-section").click(function () {
    if (animating) return false;
    animating = true;

    // console.log("current_fs", current_fs);

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $("#progressbar li").eq(current_section).removeClass("active");

    // console.log("current_section", current_section);
    current_section -= 1;
    // console.log("moved to section", current_section);

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = (1 - now) * 50 + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          // current_fs.css({ left: left });
          previous_fs.css({
            transform: "scale(" + scale + ")",
            opacity: opacity,
          });
        },
        duration: duration,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        // easing: "easeInOutBack",
      }
    );
  });

  $(".next").click(function () {
    // console.log("current_fs", current_fs);
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({opacity: opacity });
        },
        duration: duration,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        // easing: "easeInOutBack",
      }
    );
  });

  $(".previous").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = (1 - now) * 50 + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          // current_fs.css({ left: left });
          previous_fs.css({
            transform: "scale(" + scale + ")",
            opacity: opacity,
          });
        },
        duration: duration,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        // easing: "easeInOutBack",
      }
    );
  });

  // $(".submit").click(function () {
  //   submitForm();
  //   // window.location.replace("completed.html");
  //   return false;
  // });
});
