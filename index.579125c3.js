// gsap.registerPlugin(ScrollTrigger);
// smoothScroll("#content");
// let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
// gsap.utils.toArray("section").forEach((section, i) => {
//   section.bg = section.querySelector(".bg"); 
//   // Give the backgrounds some random images
// //   section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;
//   // the first image (i === 0) should be handled differently because it should start at the very top.
//   // use function-based values in order to keep things responsive
//   gsap.fromTo(section.bg, {
//     backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
//   }, {
//     backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
//     ease:  "none",
//     scrollTrigger: {
//       trigger: section,
//       start: () => i ? "top bottom" : "top top", 
//       end: "bottom top",
//       scrub: true,
//       invalidateOnRefresh: true // to make it responsive
//     }
//   });
// });
// const sections = gsap.utils.toArray("section");
// const lastIndex = sections.length - 1;
// sections.forEach((section, i) => {
//   section._bg = section.querySelector(".bg");
//   section._h1 = section.querySelector("h1");
//   section._h3 = section.querySelector("h3");
//   section._h4 = section.querySelector("h4");
// //   section._car = section.getElementById("car");
//   // Give the backgrounds some random images
// //   section._bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight*2}?random=${i})`;
//   // Create a standalone ST instance, and use the progress value (0 - 1) to tween the timeline's progress
//   ScrollTrigger.create({ 
//     trigger: section,
//     start: ()=> i==0 ? "top top" : "top bottom", // The FIRST section will use a different start value than the rest
//     end: ()=> i==lastIndex ? "top top" : "bottom top", // The LAST section will use a different start value than the rest    
//     onRefresh: self => { // onRefresh (so it gets reset upon resize), create a timeline that moves the h1 + bg vertically      
//       section._tl = gsap.timeline({paused:true, defaults:{ease:'none', overwrite:'auto'}}) 
//       // .fromTo(section._h1, {y:()=> i==0 ? 0 : (innerHeight/2)*1.25}, {y:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
//       // .fromTo(section._h3, {x:()=> i==0 ? 0 : (innerHeight/2)*1.5}, {x:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
//       // .fromTo(section._h4, {y:()=> i==0 ? 0 : (innerHeight/2)*2}, {y:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
//       .fromTo(section._bg, {y:()=> i==0 ? -innerHeight/2 : 0}, {y:()=> i==lastIndex ? -innerHeight/2 : -innerHeight}, 0)	  	  
//       .progress(self.progress); //use progress to position the timeline correctly      
//     },
//     onUpdate: self => { gsap.to(section._tl, {duration:0.75, progress:self.progress}); }
//   });
// });
function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0, y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {
        x: x,
        y: y,
        autoAlpha: 0
    }, {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}
function hide(elem) {
    gsap.set(elem, {
        autoAlpha: 0
    });
}
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        hide(elem); // assure that the element is hidden when scrolled into view
        ScrollTrigger.create({
            trigger: elem,
            markers: false,
            onEnter: function() {
                animateFrom(elem);
            },
            onEnterBack: function() {
                animateFrom(elem, -1);
            },
            onLeave: function() {
                hide(elem);
            } // assure that the element is hidden when scrolled into view
        });
    });
});

//# sourceMappingURL=index.579125c3.js.map
