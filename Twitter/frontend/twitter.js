const FollowToggle = require("./follow_toggle.js");
const APIUtil = require("./api_util.js");
//let followToggles = [];

function setUpButtons() {
  const $followButtons = $(".follow-toggle");
  $followButtons.each((i, button) => {
    let $button = $(button);
    $button = new FollowToggle($button, i);
    //
    // followToggles.push($button);
  });

//   $(".follow-toggle").on("click", e => {
//   //  alert("Stop poking me");
//
//     let index = $(e.target).data("index");
//     followToggles[index].handleClick();
//   });
}

$(setUpButtons);
