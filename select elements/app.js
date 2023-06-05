$(document).ready(function() {

    if(jQuery){
  console.log("jQuery is working!");

}else{
    console.log("jQuery is not working");
}
 });


 $(document).ready(function(){

  $('.btn').click(function(){
   // console.log("text: " + $('li').html());
  $("ul li:last-child").addClass('item');
  });
 });


 