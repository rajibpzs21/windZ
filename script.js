function firstPageAnimation() {
  let tl = gsap.timeline();

  tl.from("nav h2, nav a, nav button", {
    y: -20,
    opacity: 0,
    delay: 0.3,
    duration: 0.5,
    stagger: 0.1,
  });

  tl.from(".hero-text h1, .hero-text p,.hero-text button", {
    x: -150,
    opacity: 0,
    duration: 0.6,
    stagger: 0.6,
  });

  tl.from(".hero-img img", {
    x: 150,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(".brand-logo img", {
    y: 20,
    duration: 0.6,
    opacity: 0,
    stagger: 0.2,
  });
}
firstPageAnimation()

function secondPageAnimation() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-text",
      scroller: "body",
      start: "top 80%",
      end: "top -65%",
      scrub: 2,
      // markers:true
    },
  });

  tl2.from(".services-text", {
    y: 40,
    duration: 0.5,
    opacity: 0,
  });

  tl2.from(
    "#card1",
    {
      x: -200,
      opacity: 0,
      duration: 0.4,
    },
    "card12"
  );
  tl2.from(
    "#card2",
    {
      x: 200,
      opacity: 0,
      duration: 0.4,
    },
    "card12"
  );

  tl2.from(
    "#card3",
    {
      x: -200,
      opacity: 0,
      duration: 0.4,
    },
    "card34"
  );
  tl2.from(
    "#card4",
    {
      x: 200,
      opacity: 0,
      duration: 0.4,
    },
    "card34"
  );

  tl2.from(
    "#card5",
    {
      x: -200,
      opacity: 0,
      duration: 0.4,
    },
    "card56"
  );
  tl2.from(
    "#card6",
    {
      x: 200,
      opacity: 0,
      duration: 0.4,
    },
    "card56"
  );

  tl2.from(
    "#card7",
    {
      x: -200,
      opacity: 0,
      duration: 0.4,
    },
    "card78"
  );
  tl2.from(
    "#card8",
    {
      x: 200,
      opacity: 0,
      duration: 0.4,
    },
    "card78"
  );
}
secondPageAnimation()

function thirdPageAnimation(){
  let tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:'.trial-left',
      scroller:'body',
      start:'top 90%',
      end:'top 20%',
      scrub:2
    }
  })
  
  tl3.from(".trial-left h3, .trial-left p, .trial-left button",{
    x:-100,
    durtaion:.5,
    opacity:0,
    stagger:0.15
  })
  
  tl3.from(".trial-right img",{
    x:100,
    durtaion:.5,
    opacity:0
  },"-=0.5")
}
thirdPageAnimation()
function forthPageAnimation(){
  let tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:'.case-text',
      scroller:'body',
      start:'top 60%',
      end:'top 20%',
      scrub:2
    }
  })
  
  tl4.from(".case-text h2, .case-text p",{
    y:40,
    opacity:0,
    stagger:0.1
  })
  
  tl4.from(".case-items .case-item",{
    y:140,
    opacity:0,
    duration:1,
    stagger:0.5
  })
}
forthPageAnimation()

function fifthPageAnimation(){
  let tl5 = gsap.timeline({
    scrollTrigger:{
      trigger:'footer',
      scroller:'body',
      start:'top 80%',
      end:'top 60%',
      scrub:2
    }
  })

  tl5.from(".logo h2, .logo p",{
    y:40,
    opacity:0,
    stagger:0.1
  })

  tl5.from(".company h4, .company a",{
    y:40,
    opacity:0,
    stagger:0.1
  })

  tl5.from(".connect a, .connect h4",{
    y:40,
    opacity:0,
    stagger:0.1
  })
}
fifthPageAnimation()