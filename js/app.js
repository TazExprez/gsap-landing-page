// Page Transition Animations

const headerAnimation = () => {
  let timeline = gsap.timeline();
  timeline
    .fromTo(
      ".logo", {
        x: -200,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        delay: 0.5,
        duration: 1.3
      }
    )
    .fromTo(
      ".menu", {
        x: 200,
        opacity: 0
      }, {
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
      ".info-section h1", {
        x: 0,
        y: 100,
        opacity: 0
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.3
      }
    )
    .addLabel("h1Show")
    .fromTo(
      ".girl", {
        height: 0
      }, {
        height: 600,
        duration: 1.4,
        ease: "power2.inOut"
      },
      ">-0.5"
    )
    .fromTo(
      ".boy", {
        height: 0
      }, {
        height: 600,
        duration: 1.4,
        ease: "power2.inOut"
      },
      ">-1"
    )
    .fromTo(
      ".shape1", {
        scale: 0,
        opacity: 0
      }, {
        scale: 1,
        opacity: 1,
        ease: "power2.inOut"
      },
      ">-1"
    )
    .fromTo(
      ".shape3", {
        opacity: 0
      }, {
        opacity: 0.6,
        ease: "power2.inOut",
        duration: 1
      },
      ">-0.2"
    )
    .fromTo(
      ".shape3", {
        x: -50,
        y: 500
      }, {
        y: 465,
        repeat: -1,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true
      }
    )
    .fromTo(
      ".shape2", {
        opacity: 0
      }, {
        opacity: 0.3,
        ease: "power2.inOut",
        duration: 1
      },
      ">-2"
    )
    .fromTo(
      ".shape2", {
        x: 550,
        y: -150
      }, {
        y: -185,
        repeat: -1,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true
      }
    )
    .fromTo(
      ".info-section h4", {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1.3
      },
      "h1Show"
    )
    .fromTo(
      ".call-actions", {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1.3
      },
      "h1Show+=1"
    ).fromTo("#main-services", {
        display: "none"
      }, {
        display: "block",
      },
      ">-1.5"
    );
};

const aboutAnimation = () => {
  let timeline = gsap.timeline();
  timeline.fromTo(
    ".info-section h1", {
      x: 0,
      y: 100,
      opacity: 0
    }, {
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
    ".loading-bg", {
      y: "100%"
    }, {
      y: 0
    }
  );
};

const loadingEnter = () => {
  let timeline = gsap.timeline();
  timeline
    .fromTo(
      ".loading-bg", {
        y: 0
      }, {
        y: "100%",
        duration: 2
      }
    )
    .fromTo(
      ".outer-container", {
        scale: 0.5
      }, {
        scale: 1
      }
    );
};

const galleryEnter = () => {
  let timeline = gsap.timeline();
  timeline
    .fromTo(
      ".white-bg", {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut"
      }
    )
    .fromTo(
      ".white-bg ul li", {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2,
        ease: "power1.inOut"
      }
    );
};

barba.init({
  sync: true,
  transitions: [{
      name: "page-wipe",
      async leave(data) {
        const done = this.async();
        // console.log("Leaving Page Animation");
        loadingLeave();
        await delay(1500);
        done();
      },
      async enter(data) {
        loadingEnter();
        headerAnimation();
        // console.log("Entering Page Animation");
      },
      async once(data) {
        headerAnimation();
      }
    },
    {
      name: "home-transition",
      from: {
        namespace: ["about", "gallery"]
      },
      to: {
        namespace: "home"
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
        homeAnimation();
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
        // console.log("Leaving Page Animation");
        loadingLeave();
        await delay(1500);
        done();
      },
      async enter(data) {
        loadingEnter();
        headerAnimation();
        galleryEnter();
        // console.log("Entering Page Animation");
      }
    }
  ],
  views: [{
      namespace: "home",
      afterEnter(data) {
        loadingEnter();
        homeAnimation();
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
  "#main-services", {
    x: "100%"
  }, {
    x: 0
  }
);

const tlServicesInnerElementsScroll = new gsap.timeline({
  onUpdate: debugPercentage
});
tlServicesInnerElementsScroll.fromTo(
  "#main-services .services .service", {
    y: 300,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.4
  }
);

const serviceElement = document.querySelector("#main-services");

let homeController = new ScrollMagic.Controller();

let serviceScene = new ScrollMagic.Scene({
    triggerElement: "#main-services",
    triggerHook: 1,
    // offset: 100,
    // offset: 450,
    // reverse: false,
    // This is not necessary because reverse: true is the default value.
    // reverse: true,
    // duration: 1000
    duration: serviceElement.offsetHeight
  })
  .setTween(tlServicesScroll)
  // .addIndicators()
  .addTo(homeController);

let serviceInnerElementsScene = new ScrollMagic.Scene({
    triggerElement: "#main-services",
    triggerHook: 1,
    offset: 500,
    duration: serviceElement.offsetHeight - 500
  })
  .setTween(tlServicesInnerElementsScroll)
  // .addIndicators()
  .addTo(homeController);