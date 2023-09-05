function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  
  loco();


// var text = document.querySelectorAll(".vlleft");
// text.forEach(function(val, index){
// val.addEventListener("mouseenter", function(){
//     gsap.to(".img1",{
//         opacity:1,
//     })
// })

// })

var hoverFirst = document.querySelector(".hover1");
hoverFirst.addEventListener("mouseenter", function(){
  gsap.to(".img1",{
    opacity:1,
    y:"-10px",
    scale:1.2,
  })
    })
    var hoverFirst = document.querySelector(".hover1");
hoverFirst.addEventListener("mouseleave", function(){
  gsap.to(".img1",{
    opacity:0,
    y:"0px",
    scale:1,
  })
    })
    // 

    var hoverTwo = document.querySelector(".hover2");
    hoverTwo.addEventListener("mouseenter", function(){
  gsap.to(".img2",{
    opacity:1,
    y:"-10px",
    scale:1.2,
  })
    })
    var hoverFirst = document.querySelector(".hover2");
hoverFirst.addEventListener("mouseleave", function(){
  gsap.to(".img2",{
    opacity:0,
    y:"0px",
    scale:1,
  })
    })
    // 


    var hoverThree = document.querySelector(".hover3");
    hoverThree.addEventListener("mouseenter", function(){
  gsap.to(".img3",{
    opacity:1,
    y:"-10px",
    scale:1.2,
  })
    })
    var hoverThree = document.querySelector(".hover3");
    hoverThree.addEventListener("mouseleave", function(){
  gsap.to(".img3",{
    opacity:0,
    y:"0px",
    scale:1,
  })
    })
    var box = document.querySelector("#page_2");
    var eyes = document.querySelector(".eyes");
    box.addEventListener("mousemove", function(dets){
  gsap.to(".eyes",{
    x: dets.x*0.05 - 2 + "px",
    y: dets.y*0.05 - 2 + "px"
  })
    })
    // eyes.style.top = dets.y*0.05 + "px"
    // eyes.style.right = dets.x*0.005 + "px"



      // 
      if(screen.width <= 600){
    var tl = gsap.timeline({
        scrollTrigger: {
          trigger:"#page_3",
          scroller :"#main",
          scrub:1,

          start:"55% 0%",  
        pin:true,
        
        }
      })
      tl.to(".transform1",{
        y: "-500px",
        duration:5,
      })
      tl.to(".transform2",{
        y: "-560px",
         duration:5,
      })
      
      tl.to(".transform3",{
        y: "-1100px",
         duration:5,
      })
      }
      else{
            var tl = gsap.timeline({
        scrollTrigger: {
          trigger:"#page_3",
          scroller :"#main",
          scrub:1,

          start:"0% 0%",  
        pin:true,
        
        }
      })
      tl.to(".transform1",{
        y: "-500px",
      })
      tl.to(".transform2",{
        y: "-560px",
      })
      tl.to(".transform2",{
        y: "-1040px",
      })
      tl.to(".transform3",{
        y: "-1100px",
      })
      }


      // 
      var page2 = gsap.timeline({
        scrollTrigger:{
          trigger:"#page_2",
          scroller :"#main",
          scrub:1,
          start:"10% 50%", 
          end:"40% 50%",
         
        }
       
      })
      page2.from(".box1", {
        y: "80px",
        opacity:"0",
      })
      page2.from(".box2", {
        y: "80px",
        opacity:"0",
      })

      var mouse = document.querySelector(".btncenter");
      mouse.addEventListener("mouseenter", function(){
        mouse.classList.toggle("active");
      })