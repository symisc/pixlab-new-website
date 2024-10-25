const particlesJSON = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: ["#ffffff", "#f8c210", "#83d238", "#ee7752", "#e73c7e", "#23a6d5", "#23d5ab", "#000000"],
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 2,
      straight: false,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#266db6",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.6,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#266db6",
      opacity: 0.4,
      width: 1,
    },
  },
  detectRetina: true,
};

particlesJS("particles-js", particlesJSON);
