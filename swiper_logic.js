const animator = gsap 




let box1 = animator.to('.swiper-box1'  ,  {

    duration : 1 , 

    transform : "translate( -100% , 0)" ,

  

}).pause()





let box3 = animator.to('.swiper-box3'  ,  {

    duration : 1 , 

    transform : "translate( 100% , 0)" ,

  

}).pause()




let box2 = animator.to('.swiper-box2>div'  ,  {

    duration : .4 , 

    flexGrow : 1 ,

    fontSize : '4rem' ,

    color : 'white'


}).pause()





function show_navbar(){
    box1.play()
    box2.play()
    box3.play()
}


function hide_navbar(){
    box1.reverse()
    box2.reverse()
    box3.reverse()
}



function toggle_navbar(event){

      

      event.currentTarget.isopen = event.currentTarget.isopen ?? false
      event.stopPropagation();

      if(!event.currentTarget.isopen){
          show_navbar()

          event.currentTarget.isopen = !event.currentTarget.isopen
      }

      else{
        hide_navbar()
        event.currentTarget.isopen = !event.currentTarget.isopen
      }
}



document.getElementById('logo').addEventListener('click' ,  toggle_navbar)