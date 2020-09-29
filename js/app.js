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

const homeAnimationFullLarge = () => {
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
        height: window.innerWidth > 767 ? 0 : 313
      },
      {
        height:
          window.innerWidth >= 1450
            ? 600
            : window.innerWidth < 1450 && window.innerWidth >= 768
            ? 500
            : 313,
        duration: 1.4,
        ease: "power2.inOut"
      },
      ">-0.5"
    )
    .fromTo(
      ".boy",
      {
        height: window.innerWidth > 767 ? 0 : 313
      },
      {
        height:
          window.innerWidth >= 1450
            ? 600
            : window.innerWidth < 1450 && window.innerWidth >= 768
            ? 500
            : 313,
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
        x:
          window.innerWidth < 1200 && window.innerWidth >= 1024
            ? 50
            : window.innerWidth < 1024 && window.innerWidth >= 768
            ? 50
            : window.innerWidth < 768
            ? 50
            : 100,
        y: window.innerWidth < 768 ? 184 : 0,
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
        x: window.innerWidth >= 1024 ? -50 : 0,
        y: window.innerWidth >= 768 ? 500 : 350
      },
      {
        y: window.innerWidth >= 768 ? 465 : 380,
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
            ? 600
            : window.innerWidth < 1450 && window.innerWidth >= 1200
            ? 450
            : window.innerWidth < 1200 && window.innerWidth >= 1024
            ? 350
            : window.innerWidth < 1200 && window.innerWidth >= 1024
            ? 250
            : 243,
        y: window.innerWidth >= 768 ? -150 : 130
      },
      {
        y: window.innerWidth >= 768 ? -185 : 100,
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
};

const homeAnimationTopSmall = () => {
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

const loadingEnterHomeSmall = () => {
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
      ".mobile-header-and-info-section-container",
      {
        scale: 0.5,
        height: "100%",
        backgroundImage:
          "linear-gradient(to right top, #8e27ff, #7b21fa, #651bf5, #4b16f0, #2512eb)"
      },
      {
        scale: 1
      }
    )
    .fromTo(
      ".mobile-header-and-info-section-outer-container",
      {
        background: "white"
      },
      {
        background: "transparent"
      }
    )
    .to(".mobile-header-and-info-section-container", {
      backgroundImage: "none"
    });
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

const resizeScreen = () => {
  let timeline = gsap.timeline();
  timeline.to(".outer-container", {
    height:
      window.innerHeight + "px" ||
      document.documentElement.clientHeight + "px" ||
      document.body.clientHeight + "px"
  });
};

const scrollAnimationMiddleOn = (homeController) => {
  // const tlPhotosScroll = new gsap.timeline({
  //   onUpdate: debugPercentage
  // });

  const tlGirlScroll = gsap.timeline();
  const tlBoyScroll = gsap.timeline();
  const tlShape1Scroll = gsap.timeline();
  const tlShape3Scroll = gsap.timeline();
  const tlShape2Scroll = gsap.timeline();

  function debugPercentage() {
    console.log(tlPhotosScroll.progress());
  }

  tlGirlScroll.fromTo(
    ".girl",
    {
      x: "-100%"
    },
    {
      x: "20px"
    }
  );

  tlBoyScroll.fromTo(
    ".boy",
    {
      x: "310px"
    },
    {
      x: "80px"
    }
  );

  tlShape1Scroll.fromTo(
    ".shape1",
    {
      scale: 0,
      opacity: 0
    },
    {
      scale: 1,
      opacity: 1
    }
  );

  tlShape2Scroll.fromTo(
    ".shape2",
    {
      opacity: 0
    },
    {
      opacity: 0.3
    }
  );

  tlShape3Scroll.fromTo(
    ".shape3",
    {
      opacity: 0
    },
    {
      opacity: 0.6
    }
  );

  // .fromTo(
  //   ".shape3",
  //   {
  //     y: 350
  //   },
  //   {
  //     y: 380
  //     // repeat: -1,
  //     // duration: 1.5,
  //     // ease: "sine.inOut",
  //     // yoyo: true
  //   }
  // )
  // .fromTo(
  //   ".shape2",
  //   {
  //     y: 130
  //   },
  //   {
  //     y: 100
  //     // repeat: -1,
  //     // duration: 1.5,
  //     // ease: "sine.inOut",
  //     // yoyo: true
  //   }
  // );

  let girlScene = new ScrollMagic.Scene({
    triggerElement: "#home .photos",
    triggerHook: 1,
    duration: 300
  })
    .setTween(tlGirlScroll)
    // .addIndicators()
    .addTo(homeController);

  let boyScene = new ScrollMagic.Scene({
    triggerElement: "#home .photos",
    triggerHook: 1,
    offset: 250,
    duration: 300
  })
    .setTween(tlBoyScroll)
    // .addIndicators()
    .addTo(homeController);

  let shape1Scene = new ScrollMagic.Scene({
    triggerElement: "#home .photos",
    triggerHook: 1,
    offset: 150,
    duration: 300
  })
    .setTween(tlShape1Scroll)
    // .addIndicators()
    .addTo(homeController);

  let shape2Scene = new ScrollMagic.Scene({
    triggerElement: "#home .photos",
    triggerHook: 1,
    offset: 450,
    duration: 100
  })
    .setTween(tlShape2Scroll)
    // .addIndicators()
    .addTo(homeController);

  let shape3Scene = new ScrollMagic.Scene({
    triggerElement: "#home .photos",
    triggerHook: 1,
    offset: 500,
    duration: 50
  })
    .setTween(tlShape3Scroll)
    // .addIndicators()
    .addTo(homeController);

  let moveShape2Scene = new ScrollMagic.Scene({
    triggerElement: "#home .photos",
    triggerHook: 1,
    offset: 500
  })
    .setClassToggle(".shape2", "moveShape2")
    // .addIndicators()
    .addTo(homeController);

  let moveShape3Scene = new ScrollMagic.Scene({
    triggerElement: "#home .photos",
    triggerHook: 1,
    offset: 520
  })
    .setClassToggle(".shape3", "moveShape3")
    // .addIndicators()
    .addTo(homeController);
};

const scrollAnimationBottomOn = (homeController) => {
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

  let serviceScene = new ScrollMagic.Scene({
    triggerElement: "#main-services",
    triggerHook: 1,
    duration: 500
  })
    .setTween(tlServicesScroll)
    // .addIndicators()
    .addTo(homeController);

  let serviceInnerElementsScene = new ScrollMagic.Scene({
    triggerElement: "#main-services",
    triggerHook: 1,
    offset: 450,
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

function debounce(func, time) {
  var time = time || 100;
  var timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, time, event);
  };
}

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
        if (window.innerWidth >= 768) {
          loadingEnter();
          homeAnimationFullLarge();
        } else {
          loadingEnterHomeSmall();
          homeAnimationTopSmall();
        }
        window.addEventListener(
          "resize",
          debounce(homeAnimationFullLarge, 700)
        );
        if (window.innerWidth >= 768) {
          const createScrollEffect = () => {
            let homeController = new ScrollMagic.Controller();
            scrollAnimationBottomOn(homeController);
          };
          setTimeout(createScrollEffect, 10);
        } else {
          const createScrollEffect = () => {
            let homeController = new ScrollMagic.Controller();
            scrollAnimationMiddleOn(homeController);
            scrollAnimationBottomOn(homeController);
          };
          setTimeout(createScrollEffect, 10);
        }
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
        window.addEventListener("resize", debounce(resizeScreen, 700));
      }
    },
    {
      namespace: "gallery",
      afterEnter(data) {
        loadingEnter();
        galleryEnter();
        window.addEventListener("resize", debounce(resizeScreen, 700));
      }
    }
  ]
});
