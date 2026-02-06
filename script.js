function page1Animation(){
    var tl = gsap.timeline()
tl.from("nav h1,nav h4, nav button",{
    y:-35,
    delay:1,
    duration:0.8,
    opacity:0,
    stagger:0.2


})
tl.from(".center-part1 h1",{
    x:-200,
    duration:0.5,
    opacity:0,


})
tl.from(".center-part1 p",{
    x:-100,
    duration:0.4,
    opacity:0,


}); 
tl.from(".center-part1 button",{
    
    duration:0.4,
    opacity:0,


});
tl.from(".center-part2 img",{
    x:200,
    duration:0.4,
    opacity:0,


},"-=0.7");

}
//page1Animation();

function page2Animation(){
    var tl2 =gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        
        start:"top 50%",
        end:"top 0",
        scrub:2
}
})
tl2.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.2,
    duration:2

})
tl2.from(".services",{
    y:30,
    opacity:0,
    duration:0.5

})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1

},"anim")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1

},"anim")

tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1

},"anim1")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1

},"anim1")

}
page1Animation();
page2Animation();