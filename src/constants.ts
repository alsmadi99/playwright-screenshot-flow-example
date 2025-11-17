export const variations = [
  { lang: "ar", theme: "dark" },
  { lang: "ar", theme: "light" },
  { lang: "en", theme: "dark" },
  { lang: "en", theme: "light" },
];

export const SCREENSHOT_DIR = "./output";

export const LOGIN_URL = process.argv[2];
export const START_URL = process.argv[3];

const iosWidth = 390; // iPhone 14 Pro width
const androidWidth = 360; // Pixel 5 width

export const mobileStyleTag = {
  ios: {
    content: `
    body {
      margin: 0 auto;
      background: #ccc; /* mimic DevTools gray */
      display: flex;
      justify-content: center;
      width: ${iosWidth}px !important; /* iPhone width */
    }
    html {
      width: ${iosWidth}px !important; /* iPhone width */
    }
  `,
    width: iosWidth,
  },
  android: {
    content: `
    body {
      margin: 0 auto;
      background: #ccc; /* mimic DevTools gray */
      display: flex;
      justify-content: center;
      width: ${androidWidth}px !important; /* Android width */
    }
    html {
      width: ${androidWidth}px !important; /* Android width */
    }
  `,
    width: androidWidth,
  },
};
