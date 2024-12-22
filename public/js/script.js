var tl=gsap.timeline();


gsap.from('#body-txt #rd3-txt',{
    x:'-70%',
    duration:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:'#body-txt #rd3-txt',
        scroller:'body',
        // markers:true,
        start:'top 80%',
        end:'top 70%',
        scrub:2
    }
});



gsap.from('#body2-txt #body-item1',{
    y:-300,
    rotateX:'150deg',
    rotateY:'200deg',
    opacity:0,
    scrollTrigger:{
        trigger:'#body2-txt #body-item1',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 70%',
        scrub:1,
    }
})
gsap.from('#body2-txt #body-item2',{
    x:-300,
    opacity:0,
    rotateX:'150deg',
    rotateY:'200deg',
    scrollTrigger:{
        trigger:'#body2-txt #body-item1',
        scroller:'body',
        // markers:true,
        start:'top 90%',
        end:'top 90%',
        scrub:1,
    }
})
gsap.from('#body2-txt #body-item3',{
    x:300,
    opacity:0,
    scrollTrigger:{
        trigger:'#body2-txt #body-item1',
        scroller:'body',
        // markers:true,
        start:'top 110%',
        end:'top 100%',
        scrub:1,
    }
})
gsap.from('#body2-txt #body-item4',{
    y:800,
    opacity:0,
    scrollTrigger:{
        trigger:'#body2-txt #body-item1',
        scroller:'body',
        // markers:true,
        start:'top 110%',
        end:'top 100%',
        scrub:1,
    }
})