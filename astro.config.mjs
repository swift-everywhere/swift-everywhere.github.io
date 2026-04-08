import { defineConfig, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://swift-everywhere.org',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  // We don't process any images, so skip the sharp dependency.
  image: {
    service: passthroughImageService(),
  },
});
