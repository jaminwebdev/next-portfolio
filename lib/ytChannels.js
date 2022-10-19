export const sortChannelsAlphabetically = (channels) => {
  return channels.sort((a, b) => {
    const headingA = a.heading.toUpperCase();
    const headingB = b.heading.toUpperCase();

    if (headingA < headingB) return -1;
    if (headingA > headingB) return 1;
    return 0;
  });
};

export const learnJSChannels = [
  {
    img: "/images/yt-thumbnails/yt-academind.jpg",
    heading: "Academind",
    link: "https://www.youtube.com/c/Academind",
  },
  {
    img: "/images/yt-thumbnails/yt-bitfumes.jpg",
    heading: "Bitfumes",
    link: "https://www.youtube.com/c/Bitfumes",
  },
  {
    img: "/images/yt-thumbnails/yt-code-ahsan.jpg",
    heading: "Code with Ahsan",
    link: "https://www.youtube.com/c/CodewithAhsan",
  },
  {
    img: "/images/yt-thumbnails/yt-codeworkr.jpg",
    heading: "CodeWorkr",
    link: "https://www.youtube.com/c/CodeWorkr",
  },
  {
    img: "/images/yt-thumbnails/yt-coding-garden.jpg",
    heading: "Coding Garden",
    link: "https://www.youtube.com/c/CodingGarden",
  },
  {
    img: "/images/yt-thumbnails/yt-coding-in-public.jpg",
    heading: "Coding in Public",
    link: "https://www.youtube.com/c/CodinginPublic",
  },
  {
    img: "/images/yt-thumbnails/yt-coding-tech.jpg",
    heading: "Coding Tech",
    link: "https://www.youtube.com/c/CodingTech",
  },
  {
    img: "/images/yt-thumbnails/yt-cs-dojo.jpg",
    heading: "CS Dojo",
    link: "https://www.youtube.com/c/CSDojo",
  },
  {
    img: "/images/yt-thumbnails/yt-daily-tuition.jpg",
    heading: "Daily Tuition",
    link: "https://www.youtube.com/c/DailyTuition",
  },
  {
    img: "/images/yt-thumbnails/yt-dave-gray.jpg",
    heading: "Dave Gray",
    link: "https://www.youtube.com/c/DaveGrayTeachesCode",
  },
  {
    img: "/images/yt-thumbnails/yt-dcode.jpg",
    heading: "dcode",
    link: "https://www.youtube.com/c/dcode-software",
  },
  {
    img: "/images/yt-thumbnails/yt-dev-ed.jpg",
    heading: "developedbyed",
    link: "https://www.youtube.com/c/DevEd",
  },
  {
    img: "/images/yt-thumbnails/yt-dev-tips.jpg",
    heading: "DevTips",
    link: "https://www.youtube.com/c/DevTipsForDesigners",
  },
  {
    img: "/images/yt-thumbnails/yt-everyday-js.jpg",
    heading: "Everyday JavaScript",
    link: "https://www.youtube.com/c/EverydayJavaScript",
  },
  {
    img: "/images/yt-thumbnails/yt-fireship.jpg",
    heading: "Fireship",
    link: "https://www.youtube.com/c/Fireship",
  },
  {
    img: "/images/yt-thumbnails/yt-fcc.jpg",
    heading: "freeCodeCamp",
    link: "https://www.youtube.com/c/Freecodecamp",
  },
  {
    img: "/images/yt-thumbnails/yt-fff.jpg",
    heading: "Fun Fun Function",
    link: "https://www.youtube.com/c/funfunfunction",
  },
  {
    img: "/images/yt-thumbnails/yt-onwuzulike.jpg",
    heading: "Ijemma Onwuzulike",
    link: "https://www.youtube.com/c/IjemmaOnwuzulike",
  },
  {
    img: "/images/yt-thumbnails/yt-james-quick.jpg",
    heading: "James Q Quick",
    link: "https://www.youtube.com/c/JamesQQuick",
  },
  {
    img: "/images/yt-thumbnails/yt-javascript-mastery.jpg",
    heading: "Javascript Mastery",
    link: "https://www.youtube.com/c/JavaScriptMastery",
  },
  {
    img: "/images/yt-thumbnails/yt-jsconf.jpg",
    heading: "JSConf",
    link: "https://www.youtube.com/c/JSConfEU",
  },
  {
    img: "/images/yt-thumbnails/yt-lama-dev.jpg",
    heading: "Lama Dev",
    link: "https://www.youtube.com/c/LamaDev",
  },
  {
    img: "/images/yt-thumbnails/yt-learn-with-jason.jpg",
    heading: "Learn with Jason",
    link: "https://www.youtube.com/channel/UCnty0z0pNRDgnuoirYXnC5A",
  },
  {
    img: "/images/yt-thumbnails/yt-monsterlessons-academy.jpg",
    heading: "Monsterlessons Academy",
    link: "https://www.youtube.com/c/MonsterlessonsAcademy",
  },
  {
    img: "/images/yt-thumbnails/yt-neetcode.jpg",
    heading: "NeetCode",
    link: "https://www.youtube.com/c/NeetCode",
  },
  {
    img: "/images/yt-thumbnails/yt-net-ninja.jpg",
    heading: "The Net Ninja",
    link: "https://www.youtube.com/c/TheNetNinja",
  },
  {
    img: "/images/yt-thumbnails/yt-uidotdev.jpg",
    heading: "uidotdev",
    link: "https://www.youtube.com/c/uidotdev",
  },
  {
    img: "/images/yt-thumbnails/yt-web-dev-junkie.jpg",
    heading: "Web Dev Junkie",
    link: "https://www.youtube.com/c/WebDevJunkie",
  },
  {
    img: "/images/yt-thumbnails/yt-web-dev-simplified.jpg",
    heading: "Web Dev Simplified",
    link: "https://www.youtube.com/c/WebDevSimplified",
  },
  {
    img: "/images/yt-thumbnails/yt-codevolution.jpg",
    heading: "Codevolution",
    link: "https://www.youtube.com/c/Codevolution",
  },
];

export const learnReactChannels = [
  {
    img: "/images/yt-thumbnails/yt-codevolution.jpg",
    heading: "Codevolution",
    link: "https://www.youtube.com/c/Codevolution",
  },
  {
    img: "/images/yt-thumbnails/yt-colby-fayock.jpg",
    heading: "Colby Fayock",
    link: "https://www.youtube.com/colbz",
  },
  {
    img: "/images/yt-thumbnails/yt-daily-tuition.jpg",
    heading: "Daily Tuition",
    link: "https://www.youtube.com/c/DailyTuition",
  },
  {
    img: "/images/yt-thumbnails/yt-dave-gray.jpg",
    heading: "Dave Gray",
    link: "https://www.youtube.com/c/DaveGrayTeachesCode",
  },
  {
    img: "/images/yt-thumbnails/yt-harry-wolff.jpg",
    heading: "Harry Wolff",
    link: "https://www.youtube.com/c/hswolff",
  },
  {
    img: "/images/yt-thumbnails/yt-jack-herrington.jpg",
    heading: "Jack Herrington",
    link: "https://www.youtube.com/c/JackHerrington",
  },
  {
    img: "/images/yt-thumbnails/yt-javascript-mastery.jpg",
    heading: "JavaScript Mastery",
    link: "https://www.youtube.com/c/JavaScriptMastery",
  },
  {
    img: "/images/yt-thumbnails/yt-lama-dev.jpg",
    heading: "Lama Dev",
    link: "https://www.youtube.com/c/LamaDev",
  },
  {
    img: "/images/yt-thumbnails/yt-learn-with-jason.jpg",
    heading: "Learn With Jason",
    link: "https://www.youtube.com/channel/UCnty0z0pNRDgnuoirYXnC5A",
  },
  {
    img: "/images/yt-thumbnails/yt-monsterlessons-academy.jpg",
    heading: "Monsterlessons Academy",
    link: "https://www.youtube.com/c/MonsterlessonsAcademy",
  },
  {
    img: "/images/yt-thumbnails/yt-pedrotech.jpg",
    heading: "Pedro Tech",
    link: "https://www.youtube.com/c/PedroTechnologies",
  },
  {
    img: "/images/yt-thumbnails/yt-theo.jpg",
    heading: "Theo - ping.gg",
    link: "https://www.youtube.com/c/TheoBrowne1017",
  },
];

export const learnVueChannels = [
  {
    img: "/images/yt-thumbnails/yt-ben-code-zen.jpg",
    heading: "BenCodeZen",
    link: "https://www.youtube.com/c/BenCodeZen",
  },
  {
    img: "/images/yt-thumbnails/yt-coding-justin.jpg",
    heading: "Coding with Justin",
    link: "https://www.youtube.com/channel/UCro4e-xxAYrgwt5cOccnE0A",
  },
  {
    img: "/images/yt-thumbnails/yt-learn-vue.jpg",
    heading: "LearnVue",
    link: "https://www.youtube.com/c/LearnVue",
  },
  {
    img: "/images/yt-thumbnails/yt-make-apps-danny.jpg",
    heading: "Make Apps with Danny",
    link: "https://www.youtube.com/c/MakeAppswithDanny",
  },
  {
    img: "/images/yt-thumbnails/yt-program-erik.jpg",
    heading: "Program With Erik",
    link: "https://www.youtube.com/c/ProgramWithErik",
  },
  {
    img: "/images/yt-thumbnails/yt-vue-mastery.jpg",
    heading: "Vue Mastery",
    link: "https://www.youtube.com/c/VueMastery",
  },
  {
    img: "/images/yt-thumbnails/yt-webnoob.jpg",
    heading: "Webnoob",
    link: "https://www.youtube.com/c/Webnoob",
  },
];
