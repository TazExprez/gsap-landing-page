// Page Transition Animations

const headerAnimation = () => {
  let timeline = gsap.timeline();
  timeline
    .fromTo(
      ".logo",
      {
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3
      }
    )
    .fromTo(
      ".menu",
      {
        x: 200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3
      },
      ">-1.8"
    );
};

const homeAnimation = () => {
  let timeline = gsap.timeline();

  timeline
    .fromTo(
      ".info-section h1",
      {
        x: 0,
        y: 100,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.3
      }
    )
    .addLabel("h1Show")
    .fromTo(
      ".girl",
      {
        height: 0
      },
      {
        height:
          window.innerWidth >= 1450
            ? 600
            : window.innerWidth < 1450 && window.innerWidth >= 1200
            ? 500
            : 500,
        duration: 1.4,
        ease: "power2.inOut"
      },
      ">-0.5"
    )
    .fromTo(
      ".boy",
      {
        height: 0
      },
      {
        height:
          window.innerWidth >= 1450
            ? 600
            : window.innerWidth < 1450 && window.innerWidth >= 1200
            ? 500
            : 500,
        duration: 1.4,
        ease: "power2.inOut"
      },
      ">-1"
    )
    .fromTo(
      ".shape1",
      {
        scale: 0,
        opacity: 0
      },
      {
        x: window.innerWidth < 1200 && window.innerWidth >= 1024 ? 50 : 100,
        scale: 1,
        opacity: 1,
        ease: "power2.inOut"
      },
      ">-1"
    )
    .fromTo(
      ".shape3",
      {
        opacity: 0
      },
      {
        opacity: 0.6,
        ease: "power2.inOut",
        duration: 1
      },
      ">-0.2"
    )
    .fromTo(
      ".shape3",
      {
        x: -50,
        y: 500
      },
      {
        y: 465,
        repeat: -1,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true
      }
    )
    .fromTo(
      ".shape2",
      {
        opacity: 0
      },
      {
        opacity: 0.3,
        ease: "power2.inOut",
        duration: 1
      },
      ">-2"
    )
    .fromTo(
      ".shape2",
      {
        x:
          window.innerWidth >= 1450
            ? 650
            : window.innerWidth < 1450 && window.innerWidth >= 1200
            ? 450
            : 350,
        y: -150
      },
      {
        y: -185,
        repeat: -1,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true
      }
    )
    .fromTo(
      ".info-section h4",
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.3
      },
      "h1Show"
    )
    .fromTo(
      ".call-actions",
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.3
      },
      "h1Show+=1"
    );

  // timeline
  //   .fromTo(
  //     ".info-section h1",
  //     {
  //       x: 0,
  //       y: 100,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     }
  //   )
  //   .addLabel("h1Show")
  //   .fromTo(
  //     ".girl",
  //     {
  //       height: 0
  //     },
  //     {
  //       height:
  //         window.innerWidth >= 1450
  //           ? 600
  //           : window.innerWidth < 1450 && window.innerWidth >= 1200
  //           ? 500
  //           : 500,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-0.5"
  //   )
  //   .fromTo(
  //     ".boy",
  //     {
  //       height: 0
  //     },
  //     {
  //       height:
  //         window.innderWidth >= 1450
  //           ? 600
  //           : window.innerWidth < 1450 && window.innerWidth >= 1200
  //           ? 500
  //           : 500,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape1",
  //     {
  //       scale: 0,
  //       opacity: 0
  //     },
  //     {
  //       x: window.innerWidth < 1200 && window.innerWidth >= 1024 ? 50 : 100,
  //       scale: 1,
  //       opacity: 1,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.6,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-0.2"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       x: -50,
  //       y: 500
  //     },
  //     {
  //       y: 465,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.3,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-2"
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       x:
  //         window.innerWidth >= 1450
  //           ? 550
  //           : window.innerWidth < 1450 && window.innerWidth >= 1200
  //           ? 450
  //           : 350,
  //       y: -150
  //     },
  //     {
  //       y: -185,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".info-section h4",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show"
  //   )
  //   .fromTo(
  //     ".call-actions",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show+=1"
  //   );

  // if (window.innerWidth >= 1450) {
  // timeline
  //   .fromTo(
  //     ".info-section h1",
  //     {
  //       x: 0,
  //       y: 100,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     }
  //   )
  //   .addLabel("h1Show")
  //   .fromTo(
  //     ".girl",
  //     {
  //       height: 0
  //     },
  //     {
  //       height: 600,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-0.5"
  //   )
  //   .fromTo(
  //     ".boy",
  //     {
  //       height: 0
  //     },
  //     {
  //       height: 600,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape1",
  //     {
  //       scale: 0,
  //       opacity: 0
  //     },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.6,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-0.2"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       x: -50,
  //       y: 500
  //     },
  //     {
  //       y: 465,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.3,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-2"
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       x: 550,
  //       y: -150
  //     },
  //     {
  //       y: -185,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".info-section h4",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show"
  //   )
  //   .fromTo(
  //     ".call-actions",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show+=1"
  //   );
  // } else if (window.innerWidth < 1450 && window.innerWidth >= 1200) {
  // timeline
  //   .fromTo(
  //     ".info-section h1",
  //     {
  //       x: 0,
  //       y: 100,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     }
  //   )
  //   .addLabel("h1Show")
  //   .fromTo(
  //     ".girl",
  //     {
  //       height: 0
  //     },
  //     {
  //       height: 500,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-0.5"
  //   )
  //   .fromTo(
  //     ".boy",
  //     {
  //       height: 0
  //     },
  //     {
  //       height: 500,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape1",
  //     {
  //       scale: 0,
  //       opacity: 0
  //     },
  //     {
  //       scale: 1,
  //       opacity: 1,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.6,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-0.2"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       x: -50,
  //       y: 500
  //     },
  //     {
  //       y: 465,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.3,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-2"
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       x: 450,
  //       y: -150
  //     },
  //     {
  //       y: -185,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".info-section h4",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show"
  //   )
  //   .fromTo(
  //     ".call-actions",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show+=1"
  //   );
  // } else if (window.innerWidth < 1200 && window.innerWidth >= 1024) {
  // timeline
  //   .fromTo(
  //     ".info-section h1",
  //     {
  //       x: 0,
  //       y: 100,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     }
  //   )
  //   .addLabel("h1Show")
  //   .fromTo(
  //     ".girl",
  //     {
  //       height: 0
  //     },
  //     {
  //       height: 500,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-0.5"
  //   )
  //   .fromTo(
  //     ".boy",
  //     {
  //       height: 0
  //     },
  //     {
  //       height: 500,
  //       duration: 1.4,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape1",
  //     {
  //       scale: 0,
  //       opacity: 0
  //     },
  //     {
  //       x: 50,
  //       scale: 1,
  //       opacity: 1,
  //       ease: "power2.inOut"
  //     },
  //     ">-1"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.6,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-0.2"
  //   )
  //   .fromTo(
  //     ".shape3",
  //     {
  //       x: -50,
  //       y: 500
  //     },
  //     {
  //       y: 465,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       opacity: 0
  //     },
  //     {
  //       opacity: 0.3,
  //       ease: "power2.inOut",
  //       duration: 1
  //     },
  //     ">-2"
  //   )
  //   .fromTo(
  //     ".shape2",
  //     {
  //       x: 350,
  //       y: -150
  //     },
  //     {
  //       y: -185,
  //       repeat: -1,
  //       duration: 1.5,
  //       ease: "sine.inOut",
  //       yoyo: true
  //     }
  //   )
  //   .fromTo(
  //     ".info-section h4",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show"
  //   )
  //   .fromTo(
  //     ".call-actions",
  //     {
  //       x: -50,
  //       opacity: 0
  //     },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       duration: 1.3
  //     },
  //     "h1Show+=1"
  //   );
  // }
};

const aboutAnimation = () => {
  let timeline = gsap.timeline();
  timeline.fromTo(
    ".info-section h1",
    {
      x: 0,
      y: 100,
      opacity: 0
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.3
    }
  );
};

const delay = (n) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

const loadingLeave = () => {
  let timeline = gsap.timeline();
  timeline.fromTo(
    ".loading-bg",
    {
      x: "100%",
      opacity: 0
    },
    {
      x: 0,
      opacity: 1,
      ease: "power1.inOut"
    }
  );
};

const loadingEnter = () => {
  let timeline = gsap.timeline();
  timeline
    .fromTo(
      ".loading-bg",
      {
        x: 0,
        opacity: 1
      },
      {
        x: "-100%",
        opacity: 0,
        ease: "power1.inOut",
        duration: 1.5
      }
    )
    .fromTo(
      ".outer-container",
      {
        scale: 0.5,
        maxHeight: "1080px",
        borderBottom: "1px solid #4b16f0",
        overflowY: "hidden"
      },
      {
        scale: 1,
        maxHeight: "100%",
        borderBottom: "none",
        overflowY: "auto"
      }
    );
};

const galleryEnter = () => {
  let timeline = gsap.timeline();
  timeline
    .fromTo(
      ".white-bg",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut"
      }
    )
    .fromTo(
      ".white-bg ul li",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2,
        ease: "power1.inOut"
      }
    );
};

const scrollAnimationOn = (homeController) => {
  // Scroll Animation

  // You could have done this like the following commented code, but we want to be able to debug it, so we did it like the code below this, instead.
  // const tlServicesScroll = gsap.timeline();
  const tlServicesScroll = new gsap.timeline({
    onUpdate: debugPercentage
  });

  function debugPercentage() {
    console.log(tlServicesScroll.progress());
  }

  tlServicesScroll.fromTo(
    "#main-services",
    {
      x: "100%"
    },
    {
      x: 0
    }
  );

  const tlServicesInnerElementsScroll = new gsap.timeline({
    onUpdate: debugPercentage
  });

  tlServicesInnerElementsScroll.fromTo(
    "#main-services .services .service",
    {
      y: 300,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.4
    }
  );

  const serviceElement = document.querySelector("#main-services");

  let serviceScene = new ScrollMagic.Scene({
    triggerElement: "#main-services",
    triggerHook: 1,
    // offset: 100,
    // offset: 450,
    // reverse: false,
    // This is not necessary because reverse: true is the default value.
    // reverse: true,
    // duration: 1000
    // duration: serviceElement.offsetHeight
    duration: 500
  })
    .setTween(tlServicesScroll)
    // .addIndicators()
    .addTo(homeController);

  let serviceInnerElementsScene = new ScrollMagic.Scene({
    triggerElement: "#main-services",
    triggerHook: 1,
    offset: 450,
    // duration: serviceElement.offsetHeight - 500
    duration: 450
  })
    .setTween(tlServicesInnerElementsScroll)
    // .addIndicators()
    .addTo(homeController);
};

const scrollAnimationOff = (homeController) => {
  homeController.destroy(true);
  homeController = null;
};

barba.init({
  sync: true,
  transitions: [
    {
      name: "page-wipe",
      async leave(data) {
        const done = this.async();
        loadingLeave();
        await delay(1500);
        done();
      },
      async enter(data) {
        loadingEnter();
        headerAnimation();
      },
      async once(data) {
        headerAnimation();
      }
    },
    {
      name: "gallery-transition",
      from: {
        namespace: ["home", "about"]
      },
      to: {
        namespace: ["gallery"]
      },
      async leave(data) {
        const done = this.async();
        loadingLeave();
        await delay(1500);
        done();
      },
      async enter(data) {
        loadingEnter();
        headerAnimation();
        galleryEnter();
      }
    }
  ],
  views: [
    {
      namespace: "home",
      afterEnter(data) {
        loadingEnter();
        homeAnimation();
        const createScrollEffect = () => {
          let homeController = new ScrollMagic.Controller();
          scrollAnimationOn(homeController);
        };
        setTimeout(createScrollEffect, 10);
      },

      beforeLeave(data) {
        const destroyScrollEffect = () => {
          let homeController = new ScrollMagic.Controller();
          scrollAnimationOff(homeController);
        };
        setTimeout(destroyScrollEffect, 10);
      }
    },
    {
      namespace: "about",
      afterEnter(data) {
        loadingEnter();
        aboutAnimation();
      }
    },
    {
      namespace: "gallery",
      afterEnter(data) {
        loadingEnter();
        galleryEnter();
      }
    }
  ]
});

// barba.hooks.enter((data) => {
//   headerAnimation();
// });
