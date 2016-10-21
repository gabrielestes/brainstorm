//Mute button functionality
$('.mute-button').on('click', function(){
  $('.music').prop('muted',!$('.music').prop('muted'));
})


function generateProblem() {
  let operator = "";
  let operNumber = Math.ceil(Math.random()*4);
  if (operNumber === 1){
    operator = "+";
  } else if(operNumber === 2){
    operator = "-";
  } else if(operNumber === 3){
    operator = "*";
  } else {
    operator = "/";
  };
  console.log(operator);
}
generateProblem();
