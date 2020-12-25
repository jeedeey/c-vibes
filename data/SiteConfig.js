const config = {
  siteTitle: "ConfluenceVibes", // Site title.
  siteTitleShort: "C Vibes", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Confluence Lokoja Vibes", // Alternative site title for SEO.
  siteLogo: "./logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://confluencevibes.com", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "bringing delight entertainments, promoting and broadcasting news update around.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Confluence Vibes RSS feed", // Title of the RSS feed
  siteFBAppID: "948792115615103", // FB Application ID for using app insights
  siteGATrackingID: "UA-179040282-1", // Tracking code ID for google analytics.
  disqusShortname: "c-vibes", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "cvibes team", // Username to display in the author segment.
  userEmail: "confluencevibes@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Lokoja, Kogi State", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "No risk no reward.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Whatsapp",
      url: "https://whatsapp.com",
      iconClassName: "fa fa-whatsapp",
    },
    {
      label: "Facebook",
      url: "https://facebook.com",
      iconClassName: "fa fa-facebook",
    },
    {
      label: "Twitter",
      url: "https://twitter.com",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "https://confluencevibe@gmail.com",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2020 All rights reserved | developed by", // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
