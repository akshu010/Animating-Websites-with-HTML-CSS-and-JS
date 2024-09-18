const locomotiveAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};
const loadingAnimation = () =>{
  var tl = gsap.timeline()
  tl.from("#page1", {
      opacity: 0,
      duration: 0.2,
      delay: 0.2,
      // backgroundColor:"white"
  })
  tl.from("#page1", {
      transform: "scaleX(0.2) scaleY(0.7) transformY(80%)", 
      borderRadius: "100px",
      duration: 1.5,
      ease: "expo.out"
  })
  tl.from("nav", {
      opacity: 0,
      delay: -0.2
  })
  tl.from("#page1 h1, #page1 p, #page1 div", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
  })
};
const navAnimation = () => {
  var nav = document.querySelector("nav")

  nav.addEventListener("mouseenter", function () {
      let tl = gsap.timeline()

      tl.to("#nav-bottom", {
          height: "21vh",
          duration: 0.5
      })
      tl.to(".nav-part2 h5", {
          display: "block",
          duration: 0.1

      })
      tl.to(".nav-part2 h5 span", {
          y: 0,
          // duration:0.3,
          stagger: {
              amount: 0.5
          }
      })
  })
  nav.addEventListener("mouseleave", function () {
      let tl = gsap.timeline()
      tl.to(".nav-part2 h5 span", {
          y: 25,
          stagger: {
              amount: 0.2
          }
      })
      tl.to(".nav-part2 h5", {
          display: "none",
          duration: 0.1
      })
      tl.to("#nav-bottom", {
          height: 0,
          duration: 0.2
      })
  })
};
const page2Animation = () => {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 35,
        y: dets.y - elem.getBoundingClientRect().y - 120,
      });
    });
  });
};
const page3Animation = () => {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 video");
  var nav = document.querySelector("nav");
  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      opacity: 1,
      transform: "scaleX(1), scaleY(1)",
      borderRadius: 0,
    });
    gsap.to(nav, {
      zIndex: 0,
    });
    gsap.to(page3Center, {
      zIndex: 0,
    });
  });
  video.addEventListener("click", function () {
    video.load();
    gsap.to(video, {
      opacity: 0,
      transform: "scaleX(0), scaleY(0)",
      borderRadius: "30px",
    });
    gsap.to(nav, {
      zIndex: "9999",
    });
    gsap.to(page3Center, {
      zIndex: "999",
    });
  });
};
const page6Animation = () => {
  var sections = document.querySelectorAll("#sec-right");
  sections.forEach(function(elems){
    elems.childNodes[3].addEventListener("mouseenter",()=>{
      elems.childNodes[3].style.opacity = 1;
      elems.childNodes[3].play();
    })
    elems.childNodes[3].addEventListener("mouseleave",()=>{
      elems.childNodes[3].style.opacity = 0;
      elems.childNodes[3].load();
    })
  })
};
const page9Animation = () => {
gsap.to("#btm9-part2 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
    trigger:"#btm9-part2",
    scroller:"#main",
    start:"top 80%",
    end:"top 10%",
    scrub:true
  }
})
};
locomotiveAnimation();
navAnimation();
page2Animation();
page3Animation();
page6Animation();
page9Animation();
loadingAnimation();


