/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bookscout',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' wss://*.firebaseio.com" },
    firebase: 'https://bookscout.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'style-src': "'self' 'unsafe-inline'",
    'script-src': "'self' https://s-dal5-nss-28.firebaseio.com",
    'font-src': "'self' https://fonts.gstatic.com",
    'connect-src': "'self' wss://bookscout.firebaseio.com wss://s-dal5-nss-28.firebaseio.com",
    'img-src': "'self' https://www.gravatar.com",
    'media-src': "'self'"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
