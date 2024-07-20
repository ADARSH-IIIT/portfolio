
gsap.registerPlugin(ScrollTrigger);


let skill_child = animator.from('.skill-child' , {

    duration : 1 , 

    y : 150 ,

    opacity : 0 , 
    stagger : .3  ,

    // scrollTrigger : '.skill-child'
    scrollTrigger: { trigger: ".skill-child"}

 
    

  
})  












let skill_child_b1 = animator.to('.skill-child > .box1' , {

    duration : .5 , 

    x : '-30%' ,

    y:'-30%'
}).pause()



let skill_child_b3 = animator.to('.skill-child > .box3' , {

    duration : .5 , 

    x : '30%' ,

    y:'30%'
}).pause()




let innerinfo = animator.to('.skill-child > .box2 > p' , { 

    duration : 3 , 

    opacity : 1 , 
    

}).pause()






// document.querySelector('.skill-child').addEventListener('mouseover' , (event)=>{

//     event.stopPropagation()
//     skill_child_b1.play()
//     skill_child_b3.play()
//     innerinfo.play()


  
// })

// document.querySelector('.skill-child').addEventListener('mouseout' , (event)=>{

//     event.stopPropagation()
//     skill_child_b1.reverse()
//     skill_child_b3.reverse()
//     innerinfo.reverse()

  
// })


let helper1 , helper2 , helper3 



function start_skill_animator(event){
    console.dir(event.currentTarget.id);



   helper1 =  animator.to(` #${event.currentTarget.id} > .box1` , {

        duration : .5 , 
    
        x : '-30%' ,
    
        y:'-30%' , 

       
    })



   helper2=  animator.to(` #${event.currentTarget.id} > .box3` , {

        duration : .5 , 
    
        x : '30%' ,
    
        y:'30%'
    })

   helper3 =  animator.to(`  #${event.currentTarget.id} > .box2 > p` , { 

        duration : 3 , 
    
        opacity : 1 , 
        
    
    })
}

function reverse_skill_animation(event){

    console.log(event.currentTarget.id);

     helper1.reverse()
     helper2.reverse()
     helper3.reverse()

}







function scroll_page_start(){

    height = window.innerHeight
    window.scroll({
        top: height/2 ,
      
        behavior: "smooth",
      });

      


}

