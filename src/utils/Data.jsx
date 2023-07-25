export const navbar = {
  logo: {
    logoName: "logo-bookmark.svg",
  },
  navLinks: [
    { id: 1, navItem: "Feature" },
    { id: 2, navItem: "Pricing" },
    { id: 3, navItem: "Contact" },
    { id: 4, navItem: "Login" },
  ],
};

export const downloadsFaqs = {
  downloads: {
    title: "Download the extension",
    texts: `We've got more browsers in the pipeline. Please do let us 
    know if you've got a favorite you'd like us to priotize.`,
    chrome: {
      image: "logo-chrome.svg",
      title: "Add to Chrome",
      version: "Minimum version 6.2",
      btnText: "Add & install Extension",
    },
    fireFox: {
      image: "logo-firefox.svg",
      title: "Add to Firefox",
      version: "Minimum version 5.5",
      btnText: "Add & install Extension",
    },
    opera: {
      image: "logo-opera.svg",
      title: "Add to Opera",
      version: "Minimum version 4.6",
      btnText: "Add & install Extension",
    },
  },

  faqs: [
    {
      title: "Frequently Asked Questions",
      texts: `Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us.`,
      questions: [
        {
          question: "What is Bookmark?",
          answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae accusamus? Aperiam temporibus vero nemo voluptatem ab est possimus cum minima! Minus vero ullam velit consequuntur quos dolores quae doloribus?`,
          expand: `<i class="bi bi-chevron-down"></i>`,
          collapse: `<i class="bi bi-chevron-up"></i>`,
        },
        {
          question: "How can I request a new browser?",
          answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae accusamus? Aperiam temporibus vero nemo voluptatem ab est possimus cum minima! Minus vero ullam velit consequuntur quos dolores quae doloribus?`,
          expand: `<i class="bi bi-chevron-down"></i>`,
          collapse: `<i class="bi bi-chevron-up"></i>`,
        },
        {
          question: "Is there a mobile app?",
          answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae accusamus? Aperiam temporibus vero nemo voluptatem ab est possimus cum minima! Minus vero ullam velit consequuntur quos dolores quae doloribus?`,
          expand: `<i class="bi bi-chevron-down"></i>`,
          collapse: `<i class="bi bi-chevron-up"></i>`,
        },
        {
          question: "What about other chromium browsers?",
          answer: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, recusandae accusamus? Aperiam temporibus vero nemo voluptatem ab est possimus cum minima! Minus vero ullam velit consequuntur quos dolores quae doloribus?`,
          expand: `<i class="bi bi-chevron-down"></i>`,
          collapse: `<i class="bi bi-chevron-up"></i>`,
        },
      ],
    },
  ],
};
