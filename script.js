Shery.mouseFollower({
       //Parameters are optional.
       skew: true,
       ease: "cubic-bezier(0.23, 1, 0.320, 1)",
       duration: .8,
     });


     Shery.makeMagnet("#nav-right i,#nav img", ".magnet" /* Element to target.*/, {
       //Parameters are optional.
       ease: "cubic-bezier(0.23, 1, 0.320, 1)",
       duration: 1,
     });

     Shery.hoverWithMediaCircle(".hvr" /* Element to target.*/, {
       // images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
       videos: ["0.mp4", "2.mp4", "3.mp4"],
     });


     gsap.to(".fleft-elem",{
       scrollTrigger:{
              trigger: "#featured-img",
              pin:true,
              start:"top top",
              end :"bottom bottom",
              endTrigger: ".last",
              scrub:1,
       },
       y:"-300%",
       ease: Power1,
     })

     let sections = document.querySelectorAll(".fleft-elem");
     Shery.imageEffect("#fright .images", {
       style: 3,
      //  config: { onMouse: { value: 1 } },
       slideStyle: (setScroll) => {
         sections.forEach(function (section, index) {
           ScrollTrigger.create({
             trigger: section,
             start: "top top",
             scrub: 1,
             onUpdate: function (prog) {
               setScroll(prog.progress + index);
             },
           });
         });
       },
     });  
     

