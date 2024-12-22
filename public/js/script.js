gsap.from('#body-txt #rd3-txt',{
    x:'-70%',
    duration:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:'#body-txt #rd3-txt',
        scroller:'body',
        markers:true,
        start:'top 80%',
        end:'top 70%',
        scrub:2
    }
})