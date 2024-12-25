function headerAnim(){
    var tl=gsap.timeline();

tl.from("#globe #nav-global",{
    y:-80,
    duration:0.38,
    opacity:0
})
tl.from("#nav-location #nav-img",{
    y:-40,
    duration:0.28,
    opacity:0
})
tl.from("#nav-service",{
    y:-40,
    duration:0.58,
    opacity:0
})

tl.from("#varuna-logo",{
    y:-20,
    scale:0,
    duration:0.58,
    opacity:0
},"-=.80")


tl.from("#contact-icon",{
    x:80,
    duration:0.58,
    opacity:0
},"-=1")
tl.from("#search-icon",{
    x:-80,
    duration:0.58,
    opacity:0
},"-=1")

}

headerAnim();



var tl=gsap.timeline();


tl.from("#body-txt #first-txt",{
    x:-80,
    opacity:0,
    duration:0.98
})
tl.from("#body-txt #nd2-txt",{
    x:-80,
    opacity:0,
    duration:0.58
},"-=0.30")

gsap.from("#body-txt #rd3-txt",{
    x:-80,
    opacity:0,
    duration:0.58,
    scrollTrigger:{
        trigger:"#body-txt",
        scroller:"body",
        // markers:true,
        start:"top 40%",
        end:"top 0%",
        scrub:1
    }
})


tl.from("#three-box .three-divbox",{
    y:-200,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#three-box",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 60%",
        scrub:2,
        ease:"bounce.out"
    }
})

gsap.from("#body-2img .one",{
    x:"-150%",
    duration:1.7,
    scale:0,
    rotateX:"-190deg",
    rotateY:"330deg",
    scrollTrigger:{
        trigger:"#body-2img",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 55%",
        scrub:4
    }
})
gsap.from("#body-2img .two",{
    y:"-250%",
    duration:1.7,
    scale:0,
    rotate:"265deg",
    rotateX:"-156deg",
    rotateY:"-260deg",
    scrollTrigger:{
        trigger:"#body-2img",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 55%",
        scrub:4
    }
})
gsap.from("#body-2img .three",{
    y:"-250%",
    duration:4,
    scale:0,
    rotateX:"360deg",
    // rotateY:"260deg",
    scrollTrigger:{
        trigger:"#body-2img",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 55%",
        scrub:4
    }
})
gsap.from("#body-2img .four",{
    y:"-250%",
    duration:4,
    scale:0,
    rotateX:"156deg",
    rotateY:"260deg",
    scrollTrigger:{
        trigger:"#body-2img",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 55%",
        scrub:4
    }
})

gsap.from("#body-2img .five",{
    x:"150%",
    duration:1.7,
    scale:0,
    rotateX:"190deg",
    rotateY:"330deg",
    scrollTrigger:{
        trigger:"#body-2img",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 55%",
        scrub:4
    }
})