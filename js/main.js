var filterval= 'blur(3px)'
var filterval2= 'blur(0px)'

$(".work4").mouseover(function () {
    $(".goodlife").show();
    $(".work4").css('filter',filterval)
})
$(".work4").mouseleave(function(){
    $(".goodlife").hide()
    $(".work4").css('filter',filterval2)
})
$(".work3").mouseover(function () {
    $(".ontario").show();
    $(".work3").css('filter',filterval)
    
})
$(".work3").mouseleave(function(){
    $(".ontario").hide()
    $(".work3").css('filter',filterval2)
})
$(".work2").mouseover(function () {
    $(".sunshine").show();
    $(".work2").css('filter',filterval)
})
$(".work2").mouseleave(function(){
    $(".sunshine").hide()
    $(".work2").css('filter',filterval2)
})
$(".work1").mouseover(function () {
    $(".baywatch").show();
    $(".work1").css('filter',filterval)
})
$(".work1").mouseleave(function(){
    $(".baywatch").hide()
    $(".work1").css('filter',filterval2)
})

$(".work5").mouseover(function () {
    $(".tranquil").show();
    $(".work5").css('filter',filterval)
})
$(".work5").mouseleave(function(){
    $(".tranquil").hide()
    $(".work5").css('filter',filterval2)
})

$(".work6").mouseover(function () {
    $(".icecream").show();
    $(".work6").css('filter',filterval)
})
$(".work6").mouseleave(function(){
    $(".icecream").hide()
    $(".work6").css('filter',filterval2)
})
$(".work7").mouseover(function () {
    $(".coffee").show();
    $(".work7").css('filter',filterval)
})
$(".work7").mouseleave(function(){
    $(".coffee").hide();
    $(".work7").css('filter',filterval2)
})
$(".work8").mouseover(function () {
    $(".burgers").show();
    $(".work8").css('filter',filterval)
})
$(".work8").mouseleave(function(){
    $(".burgers").hide()
$(".work8").css('filter',filterval2)
   
})
$(".design-icon").mouseover(function(){
    $(".testing").show()
    $(".design-hide").hide()
  })
  $(".design-icon").mouseleave(function(){
      $(".testing").hide()
      $(".design-hide").show()
    })
    
  
  $(".development-icon").mouseover(function(){
      $(".testing-2").show()
      $(".development-hide").hide()
  })
  $(".development-icon").mouseleave(function(){
      $(".testing-2").hide()
      $(".development-hide").show()
  })
  
    
  
  $(".product-icon").mouseover(function(){
      $(".testing-3").show()
      $(".product-hide").hide()
  })
  
  $(".product-icon").mouseleave(function(){
      $(".testing-3").hide()
      $(".product-hide").show()
  })

var username = document.getElementById("name")
var email = document.getElementById("email")
var message= document.getElementById("message")
var form = document.getElementById("form")
var submit=document.getElementById("submit")

document.addEventListener("DOMContentLoaded",function(){
form.addEventListener("submit",function(event){

    // event.preventDefault()
    received()

})
  form.reset()
})


function received (){
    if(username.value === ''|| username.value === null) {
        alert("invalid input please enter a valid user name")
      if(email.value===''||email.value===null){
          alert("invalid input please enter a valid email")
      }
      if (message.value==='' || messages.value===null){
          alert("invalid input please write a message")
      }
   } else{
       alert("we have received your feed back we will be in touch soon")
   }
}
