const listofallspan = document.querySelectorAll('.cursor_overflow>div>span' )


console.log(listofallspan);




listofallspan.forEach(  (item)=>{   item.addEventListener('mouseover' ,

                                                        function (event){
                                                                 
                                                            console.dir(event.currentTarget)
                                                          event.currentTarget.already =   event.currentTarget.already ?? 'first'
                                                        //   event.currentTarget.classList.add('removeblur')

                                                          
                                                          if(event.currentTarget.already == 'first'){
                                                             
                                                              event.currentTarget.classList.add('textstroke')
                                                            event.currentTarget.classList.remove('onlycolor')

                                                              event.currentTarget.already = 'second'
                                                          }

                                                          else{

                                                            event.currentTarget.classList.remove('textstroke')
                                                            event.currentTarget.classList.add('onlycolor')


                                                            event.currentTarget.already = 'first'



                                                          }


                                                                        }       )    
                                                                    
                                }  )











//// animator is already defined in any other js file declased before this 

const timeline = animator.timeline()



timeline.from('.box' ,  {


  duration : .5 , 

  y : -500 , 


  

  stagger : .1 ,

  yoyo : true ,

   
})


timeline.to( '.box' , {


  duration : 1 , 
 
  // textStroke : '5px white' ,

  color : 'transparent' , 

  stagger : .1  ,

  repeat : 1 , 

  filter : 'blur(2px)'  , 

  yoyo : true 


} )