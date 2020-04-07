const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = withPlugins([
  [
    optimizedImages,
    {
      handleImages: ["jpeg", "png"],
      imagesFolder: "images",
      mozjpeg: {
        quality: 80,
      },
      optimizeImages: !__DEV__,
      optimizeImagesInDev: false,
      optipng: {
        optimizationLevel: 3,
      },
    },
  ],
]);
