/* App identity. version must match the newest entry in data/changelog.js and VERSION in sw.js. */
window.APP_META = {
  name: 'Mag-istorya Kita',
  short: 'Mag-istorya Kita',
  tagline: 'Aklanon for the psychiatric interview',
  version: '0.1.2',
  repo: 'Aklanon',
  updated: 'November 2026',
  author: 'Isabella Navarro, MD',
  email: 'isaymotion@gmail.com',
  attribution: 'App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com'
};

/* Show the "Other apps" group in the menu? Off for now: the apps are not interlinked yet.
   The list below is kept in step with the other apps so it can be switched on later. */
window.SHOW_OTHER_APPS = false;

window.APP_LINKS = [
  { name: 'MSE Trainer', href: 'https://isaymotion.github.io/MSEtrainer/' },
  { name: 'Usap Tayo (Tagalog)', href: 'https://isaymotion.github.io/Tagalog/' },
  { name: 'Mag-istorya Kita (Aklanon)', href: 'https://isaymotion.github.io/Aklanon/' },
  { name: 'DSM-5-TR Study Companion', href: 'https://isaymotion.github.io/DSMVapp/' },
  { name: 'Stahl Study Companion', href: 'https://isaymotion.github.io/Stahl/' },
  { name: 'Kaplan Study', href: 'https://isaymotion.github.io/KaplanStudy/' },
  { name: 'Shea Trainer', href: 'https://isaymotion.github.io/sheatrainer/' }
];

/* Storage: everything lives under the 'magistorya.' prefix ('magistorya.v1' holds all progress and review flags).
   This app shares the isaymotion.github.io origin with the sister apps, so the prefixes must never collide.
   New app, nothing to migrate: no MIGRATE_KEYS. */
