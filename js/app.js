let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");

const clickedMobileMenuBtn = () => {
  mobileMenuBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
};

const closeMobileMenu = () => {
  mobileMenuBtn.classList.remove("active");
  mobileMenu.classList.remove("active");
};

mobileMenuBtn.addEventListener("click", clickedMobileMenuBtn);

document.querySelectorAll("a").forEach((mobilePageLinkBtn) => {
  mobilePageLinkBtn.addEventListener("click", closeMobileMenu);
});

// Transition Animations

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

let homeAnimationTimeline = gsap.timeline();

const homeAnimationLarge = () => {
  homeAnimationTimeline.clear();

  homeAnimationTimeline
  .fromTo(
    ".info-section-container .info-section h1",
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.3
    }
  )
  .addLabel("h1Show")
  .fromTo(
    ".girl",
    {
      height: 0,
    },
    {
      height: "50%",
      duration: 1.4,
      ease: "power2.inOut"
    },
    ">-0.5"
  )
  .fromTo(
    ".boy",
    {
      height: 0,
    },
    {
      height: "50%",
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
      y: 0
    },
    {
      y: "-40%",
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
      y: 0
    },
    {
      y: "40%",
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true
    }
  )
  .fromTo(
    ".info-section-container .info-section h4",
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
    ".info-section-container .call-actions",
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
};

const homeAnimationMobile = () => {
  homeAnimationTimeline.clear();

  homeAnimationTimeline
  .fromTo(
    ".info-section-container .info-section h1",
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.3
    }
  )
  .addLabel("h1Show")
  .fromTo(
    ".info-section-container .info-section h4",
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
    ".info-section-container .call-actions",
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
};

const aboutAnimation = () => {
  let timeline = gsap.timeline();
  timeline.fromTo(
    ".info-section h1",
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.3
    }
  );
};

const galleryAnimation = () => {
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
        duration: 2.5
      }
    )
    .fromTo(
      ".outer-container",
      {
        scale: 0.5,
        height:
          window.innerHeight + "px" ||
          document.documentElement.clientHeight + "px" ||
          document.body.clientHeight + "px",
        borderBottom: "1px solid #4b16f0",
        overflowY: "hidden"
      },
      {
        scale: 1,
        // This caused me a lot of grief because it would pull the screen down as it was getting resized to 100% height.  This was not necessary.
        // maxHeight: "100%",
        borderBottom: "none",
        overflowY: "auto"
      }
    );
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

const delay = (n) => {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

// Scroll Animations

const servicesScrollTimelineOn = () => {
  // You could have done this like the following commented code, but we want to be able to debug it, so we did it like the code below this, instead.
  // const tlServicesScroll = gsap.timeline();
  // const tlServicesScroll = new gsap.timeline({
  //   onUpdate: debugPercentage
  // });

  // function debugPercentage() {
  //   // console.log(tlServicesScroll.progress());
  // }

  let timeline = gsap.timeline();
  timeline
    .fromTo(
      "#main-services",
      {
        x: "100%"
      },
      {
        x: 0,
        duration: 2
      }
    )
    .staggerFromTo(
      "#main-services .services .service",
      2,
      {
        x: window.innerWidth >= 768 ? 0 : "300px",
        y: window.innerWidth >= 768 ? "300px" : 0,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 1
      },
      0.8,
      ">10"
    );

  return timeline;

  console.log("Service scene created!");
  console.log(homeController);
};

const photosScrollTimelineOn = () => {
  let timeline = gsap.timeline();

  timeline
    .fromTo(
      ".girl",
      {
        x: "-100%"
      },
      {
        x: 0
      }
    )
    .fromTo(
      ".boy",
      {
        x: "100%"
      },
      {
        x: 0
      }
    )
    .fromTo(
      ".shape1",
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1
      }
    )
    .fromTo(
      ".shape2",
      {
        opacity: 0
      },
      {
        opacity: 0.3
      }
    )
    .fromTo(
      ".shape3",
      {
        opacity: 0
      },
      {
        opacity: 0.6
      },
      ">-0.5" // Added to try to fix a bug.
    );

  return timeline;

  console.log("Photos scene created!");
};

let homeController = null;

const initHomeController = () => {
  homeController = new ScrollMagic.Controller();
  console.log("Controller created!");

  let mainServicesEl = document.querySelector("#main-services");

  let serviceScene = new ScrollMagic.Scene({
    triggerElement: "#main-services",
    triggerHook: 1,
    offset: 100,
    duration:
      window.innerWidth >= 768
        ? mainServicesEl.offsetHeight - 100
        : mainServicesEl.offsetHeight - 200
  })
    .setTween(servicesScrollTimelineOn())
    // .addIndicators()
    .addTo(homeController);

  if (window.innerWidth <= 767) {
    let photosEl = document.querySelector(".photos");

    let photosScene = new ScrollMagic.Scene({
      triggerElement: "#home .photos",
      triggerHook: 1,
      duration: photosEl.offsetHeight
    })
      .setTween(photosScrollTimelineOn())
      .setClassToggle(".shape2, .shape3", "moveShape")
      // .addIndicators()
      .addTo(homeController);
  }
};

const allScrollAnimationsOff = () => {
  homeController.destroy(true);
  homeController = null;
  console.log(homeController);
  console.log("Controller destroyed!");
};

// Stop Animation And Remove Inline Styles

const killAllTimelines = () => {
  const homeTargets = homeAnimationTimeline.getChildren();
  const servicesTargets = servicesScrollTimelineOn().getChildren();
  
  homeAnimationTimeline.kill();
  servicesScrollTimelineOn().kill();
  
  for(let i = 0; i < homeTargets.length; i++) {
    if(homeTargets[i].targets().length) {
       gsap.set(homeTargets[i].targets(), {clearProps:"all"});
    }
  }
  for(let i = 0; i < servicesTargets.length; i++) {
    if(servicesTargets[i].targets().length) {
       gsap.set(servicesTargets[i].targets(), {clearProps:"all"});
    }
    console.log("Services Scene Destroyed!");
  }

  if (photosScrollTimelineOn().getChildren().length !== 0) {
    const photosTargets = photosScrollTimelineOn().getChildren();
    photosScrollTimelineOn().kill();
    for(let i = 0; i < photosTargets.length; i++) {
      if(photosTargets[i].targets().length) {
        gsap.set(photosTargets[i].targets(), {clearProps:"all"});
      }
    }
    console.log("Photos Scroll Timeline Destroyed!");
  }
};

// const killAllTimelines = (timeline) => {
//   const targets = timeline.getChildren();
  
//   timeline.kill();
  
//   for(let i = 0; i < targets.length; i++) {
//     if(targets[i].targets().length) {
//        gsap.set(targets[i].targets(), {clearProps:"all"});
//     }
//   }
// };

// Screen Resize Functions

const resizeScreen = () => {
  let timeline = gsap.timeline();
  timeline.to(".outer-container", {
    height:
      window.innerHeight + "px" ||
      document.documentElement.clientHeight + "px" ||
      document.body.clientHeight + "px"
  });
};

const resizeHomeScreen = () => {
  killAllTimelines();
  allScrollAnimationsOff();

  if(window.innerWidth >= 768) {
    homeAnimationLarge();
    servicesScrollTimelineOn();
  }
  else {
    homeAnimationMobile();
    photosScrollTimelineOn();
    servicesScrollTimelineOn();
  }
  
  initHomeController();
  resizeScreen();
};

// Debounce Function So That The Event Listener Functions Do Not Get Triggered All Of The Time

function debounce(func, time) {
  var time = time || 100;
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, time, event);
  };
}

// Barja.js Is Used For Transitions

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
      },
      async once(data) {
        loadingEnter();
      }
    }
  ],
  views: [
    {
      namespace: "home",
      afterEnter(data) {
        closeMobileMenu();
        headerAnimation();

        if (window.innerWidth >= 768) {
          homeAnimationLarge();
          servicesScrollTimelineOn();
        } else {
          homeAnimationMobile();
          photosScrollTimelineOn();
          servicesScrollTimelineOn();
        }

        initHomeController();
        window.addEventListener("resize", debounce(resizeHomeScreen, 700));
      },
      beforeLeave(data) {
        allScrollAnimationsOff();
      }
    },
    {
      namespace: "about",
      afterEnter(data) {
        closeMobileMenu();
        headerAnimation();
        aboutAnimation();
        window.addEventListener("resize", debounce(resizeScreen, 700));
      }
    },
    {
      namespace: "gallery",
      afterEnter(data) {
        closeMobileMenu();
        headerAnimation();
        galleryAnimation();
        window.addEventListener("resize", debounce(resizeScreen, 700));
      }
    }
  ]
});
