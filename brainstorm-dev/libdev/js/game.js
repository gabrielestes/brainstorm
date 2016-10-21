'use strict';

//Mute button functionality
$('.mute-button').on('click', function () {
  $('.music').prop('muted', !$('.music').prop('muted'));
});

function generateProblem() {
  var operator = "";
  var operNumber = Math.ceil(Math.random() * 4);
  if (operNumber === 1) {
    operator = "+";
  } else if (operNumber === 2) {
    operator = "-";
  } else if (operNumber === 3) {
    operator = "*";
  } else {
    operator = "/";
  };
  console.log(operator);
}
generateProblem();
//# sourceMappingURL=game.js.map
