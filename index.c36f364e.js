//register the plugin (just once)
gsap.registerPlugin(MotionPathPlugin);
const plane1 = document.getElementById("plane1_Image");
const plane2 = document.getElementById("plane2_Image");
const plane3 = document.getElementById("plane3_Image");
const plane4 = document.getElementById("plane4_Image");
const path1 = document.getElementById("path1");
const path2 = document.getElementById("path2");
const path3 = document.getElementById("path3");
const path4 = document.getElementById("path4");
gsap.to(plane1, {
    delay: 3,
    duration: 72,
    repeat: -1,
    repeatDelay: 5,
    //   yoyo: true,
    //   ease: "power1.inOut",
    ease: "none",
    motionPath: {
        path: path1,
        align: path1,
        autoRotate: true,
        alignOrigin: [
            0.5,
            0.5
        ]
    }
});
gsap.to(plane2, {
    delay: 6,
    duration: 72,
    repeat: -1,
    repeatDelay: 5,
    //   yoyo: true,
    //   ease: "power1.inOut",
    ease: "none",
    motionPath: {
        path: path2,
        align: path2,
        autoRotate: true,
        alignOrigin: [
            0.5,
            0.5
        ]
    }
});
gsap.to(plane3, {
    delay: 9,
    duration: 72,
    repeat: -1,
    repeatDelay: 5,
    //   yoyo: true,
    //   ease: "power1.inOut",
    ease: "none",
    motionPath: {
        path: path3,
        align: path3,
        autoRotate: true,
        alignOrigin: [
            0.5,
            0.5
        ]
    }
});
gsap.to(plane4, {
    delay: 12,
    duration: 72,
    repeat: -1,
    repeatDelay: 5,
    //   yoyo: true,
    //   ease: "power1.inOut",
    ease: "none",
    motionPath: {
        path: path4,
        align: path4,
        autoRotate: true,
        alignOrigin: [
            0.5,
            0.5
        ]
    }
});
const li = document.querySelectorAll("core-features");
gsap.from(".core-features", {
    opacity: 0,
    duration: 2,
    repeat: -1,
    y: -50,
    stagger: 0.5,
    ease: "Bounce.easeOut",
    repeatDelay: 1
});

//# sourceMappingURL=index.c36f364e.js.map
