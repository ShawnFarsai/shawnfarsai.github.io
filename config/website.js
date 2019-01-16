const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Shawn Farsai - Mathematician -> Javascript Developer", // Navigation and Site Title
  siteTitleAlt: "Shawn", // Alternative Site title for SEO
  siteTitleShort: "Shawn", // short_name for manifest
  siteUrl: "https://shawnfarsai.github.io", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.jpg", // Used for SEO and manifest
  siteDescription: "Shawn Farsai Javascript Developer",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@shawn_farsai", // Twitter Username
  ogSiteName: "shawn", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
