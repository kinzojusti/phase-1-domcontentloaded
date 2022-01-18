// Your code goes here
// document.addEventListener( "DOMContenLoaded", () => {
//     let text = document.getElementById('test');
//     text.textContext = "this is really cool."
//     console.log (text);
// });

   
document.addEventListener( "DOMContentLoaded", function () {
  updateDOM()
} );


function updateDOM() {
  document.getElementById( "text" )
    .innerHTML = "This is really cool!";
}
