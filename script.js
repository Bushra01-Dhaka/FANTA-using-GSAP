var tl = gsap.timeline(
    {
        scrollTrigger:{
            trigger:".two",
            start:"0% 95%",
            end:"60% 50%",
            scrub:2,
            // markers:true,
        }
    }
)

tl.to("#fanta",{
    top:"100%",
    left:"10%"
},'orange')

tl.to("#slice", {
    top:"155%",
    left:"23%",
},'orange')

tl.to("#oranges",{
    top:"170%",
    right:"10%",
    width:"15%",
},'orange')

tl.to("#leaf0",{
    top:"110%",
    left:"0%",
    rotate:"110deg"
},'orange')

tl.to("#leaf1",{
    top:"110%",
    left:"80%",
    rotate:"130deg"
},'orange')


var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"0% 95%",
        end:"70% 50%",
        scrub:2,
        // markers:true
    }
})

tl2.from(".slice-cut", {
    rotate:"-90deg",
    left:"-70%",
    top:"100%",
},'slide2')

tl2.from("#coca", {
    rotate:"-30deg",
    left:"-70%",
    top:"100%",
},'slide2')

tl2.from(".slice-cut2", {
    rotate:"-90deg",
    right:"0%",
    top:"100%",
},'slide2')

tl2.from("#sprite", {
    rotate:"30deg",
    right:"0%",
    top:"100%",
},'slide2')

tl2.to("#slice",{
    left:"45%",
    top:"208%",
    width:"12%"
},'slide2')

tl2.to("#fanta",{
    left:"45%",
    top:"210%",
    height:"63vh",
    width:"13%"
   
},'slide2')