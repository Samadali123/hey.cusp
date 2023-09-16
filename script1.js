function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  
  }
  locoscroll();
  
  
  // animation loader 
  
  function loader(){
    var  img = document.querySelector("#loader #content  img");
  var arrimages  = [
  
    "https://images.prismic.io/cusp/93995c93-8dfe-4f3f-b0d7-727c20c758db_81b79566090147.5b249527da157.jpg?auto=compress,format",
  
    "https://images.prismic.io/cusp/43da11bd-03f5-426f-804b-c79112adf8a3_sprout.jpg?auto=compress,format",
  
    "https://images.prismic.io/cusp/ca9636a5-0dec-45e7-ad5a-d32bb15ac63f_factory_preview_main.jpg?auto=compress,format",
  
  ]
  
  
  var index = 0;
  setInterval(function(){
      img.setAttribute("src",arrimages[index]);
      index++;
    } , 300);
  
  // clearInterval();
  
  
  var p = document.querySelector("#loader #text p");
  var line  = document.querySelector("#loader #text .line");
  var sec = document.querySelector("#loader #text #sec");
  
  
  var tln = gsap.timeline();
  tln.to("#loader #text p", {
    opacity:1,
    ease:Power1,
  }, ' s')
  
  tln.to("#loader #text .line", {
    width: "84%",
    duration:1,
    ease:Power1,
    // delay:0.5,
  }, 's')
  
  
    var a = 0;
      setInterval(function () {
          a = a + Math.floor(Math.random() * 35);
          if (a < 100) {
              document.querySelector("#loader #text #sec").innerHTML = a;
          }
  
          else {
              a = 100;
              document.querySelector("#loader #text #sec ").innerHTML = a;
          }
          
      }, 150)
  
  
  
      tln.to("#loader #text ", {
        opacity:0,
        duration:1,
        ease:Power1,
      })
  
      tln.to("#loader ", {
        transform: "translateY(-100vh)",
        duration:1,
      })
  
  }
  
  
  loader();
  // animation page1onload..................
  var tl = gsap.timeline({
    repeat : -1,
    scrollTrigger: {
      trigger: ".trigger",
      scroller:"#main",
    }
  });
  
  tl.from("#page1 #center-elem", {
    height: "0px",
    ease: Expo.ease,
    delay:3,
  })
  
  
  tl.to("#page1 #left-elem", {
    left: "37%",
    rotate: -17,
    duration: .5,
    ease: Power4,
    opacity: 1,
    // duration:2.5,
  }, 'a')
  
  
  tl.to("#page1 #right-elem", {
    left: "63%",
    rotate: 17,
    // duration: 2.5,
    ease: Power4,
    opacity: 1,
  }, 'a')
  
  
  tl.to("#page1 #center-heading h1", {
    transform: "translateY(0)",
    stagger: .1,
    ease: Power4,
    delay: -.5,
  
  })
  
  // ............................................................... page1 load up 
  
  
  tl.to("#page1 #left-elem", {
    left: "48%",
    duration: 1,
    ease: Power3,
    opacity: 0,
    
  }, 'c')
  
  
  tl.to("#page1 #right-elem", {
    left: "52%",
    duration: 1,
    ease: Power3,
    opacity: 0,
   
  }, 'c')
  
  
  
  
  tl.to("#page1 #center-elem", {
    y: "-140vh",
    duration: .5,
    ease: Power3.ease,
    opacity: .8,
    delay: 1,
  }, )
  
  tl.to("#page1 #center-heading h1", {
    transform: "translateY(-70%)",
    stagger: .1,
    ease: Power3,
    opacity: 0,
    delay:-1,
  }, )
  
  
  
  
  ///page2 upppp....
  tl.to("#page2 ", {
    y: "-100vh",
    duration:1,
    ease:Power3.Expo,
    opacity:0.9,
  })
  
  
  tl.to("#page2 #center-heading2 h1" , {
       transform: "translateY(0%)",
       stagger:.1,
       ease:Power3,
  
  } , 'same')
  
  tl.to("#page2 #left-elem2", {
    left: "37%",
    // y: "-100vh",
    // opacity:1,
    duration:0.5,
    ease:Power3,
  } ,  'sp')
  
  
  tl.to("#page2 #right-elem2", {
    left: "63%",
    // y:"-100vh",
    // opacity:1,
    duration:0.5,
    ease:Power3,
  } , 'sp' )
  
  
  
  
  ////page2 up to screenn...
  
  tl.to("#page2 #left-elem2", {
    left: "48%",
    duration: 1,
    ease: Power3,
    opacity: 0,
    
  }, 'k')
  
  
  tl.to("#page2 #right-elem2", {
    left: "52%",
    duration: 1,
    ease: Power3,
    opacity: 0,
   
  }, 'k')
  
  
  tl.to("#page2 #center-elem2", {
    y: "-140vh",
    duration: .5,
    ease: Power3.ease,
    opacity: .8,
    delay: 1,
  }, )
  
  tl.to("#page2 #center-heading2 h1", {
    transform: "translateY(-70%)",
    stagger: .1,
    ease: Power3,
    opacity: 0,
    delay:-1,
  }, )
  
  
  // page3 uppp coming to second page .... 
  
  
  
  tl.to("#page3 ", {
    y: "-200vh",
    duration:1,
    ease:Power3.Expo,
    opacity:0.9,
  } , )
  
  
  tl.to("#page3 #center-heading3 h1" , {
       transform: "translateY(0%)",
       stagger:.1,
       ease:Power3,
  } , )
  
  tl.to("#page3 #left-elem3", {
    left: "37%",
    // y: "-100vh",
    // opacity:1,
    duration:0.5,
    ease:Power3,
  } ,  'sp2')
  
  
  tl.to("#page3 #right-elem3", {
    left: "63%",
    // y:"-100vh",
    // opacity:1,
    duration:0.5,
    ease:Power3,
  } , 'sp2' )
  
  
  /// creating menu on click feature using dom features
  
  var menu = document.querySelector("#nav #menu");
  var uppernav = document.querySelector("#uppernav");
  var nav =  document.querySelector("#nav");
  var closedbtn = document.querySelector("#closed");
  
  // menu.addEventListener("click", function(){
  //    menu.style.cursor = "pointer";
  //     uppernav.style.top = "0px";
  //      uppernav.style.transition =  " all linear .5s";
  //     nav.style.opacity = 0;
  //      nav.style.transition = "all linear .5s";
  // })
  
  menu.addEventListener("click", function(dets){
  
    var tl = gsap.timeline();
    tl.to("#uppernav", {
      top: "0%",
      duration:0.7,
      ease:Power3,
    })
  
    tl.to("#nav", {
      visibility: "hidden",
      ease:Power3,
    })
  
  
    tl.to("#uppernav .open h1 ", {
       opacity:.7,
      transform: "translateY(0)",
      stagger:.1,
      ease:Power3.easeInOut,
      duration:1,
    })
  
  })
  
  
  
  closedbtn.addEventListener("click", function(){
    var tl = gsap.timeline();
    
    tl.to("#uppernav .open h1 ", {
      opacity:0,
     transform: "translateY(100%)",
     stagger:.1,
     ease:Power3.easeInOut,
     duration:1,
   })
  
  
   tl.to("#uppernav", {
    top: "-130vh",
    duration:1,
    ease:Power3,
  
   })
  
   tl.to("#nav", {
    visibility: "visible",
    ease:Power3,
  })
  
  
  })
  
  
  
  
  
      
  
    
  
  
  
  
  
  
  
  
  
  