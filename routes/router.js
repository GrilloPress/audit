var express = require('express');
var router = express.Router();

// catch all GET routes

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.data = req.session;
  console.log( req.session );
  res.render( 'index' );
});

// NHS login redirects

router.get('/login', function(req, res, next) {
  res.render( 'scr-audit/v5/explainer/health-services-such-as-your-GP-surgery-or-dentist-have-their-own-health-record-about-you' );
});

router.get('/release-login', function(req, res, next) {
  res.render( 'release-dec/explainer/health-services-such-as-your-GP-surgery-or-dentist-have-their-own-health-record-about-you' );
});

router.get('/data-release-login', function(req, res, next) {
  res.render( 'data-release/v1/explainer/1' );
});

router.get('/login-pds', function(req, res, next) {
  res.render( 'view-your-pds/v1/dashboard/your-details' );
});

router.get('/ndop-login', function(req, res, next) {
  res.redirect( 'ndop-next/v1/explainer/data-from-your-health-records.html' );
});

//

router.get('/:view', function(req, res, next) {
  var theView = req.params.view;
  res.locals.data = req.session;
  console.log( req.session );
  res.render( theView );
});

router.get('/:subdir/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  res.locals.data = req.session;
  console.log( req.session );
  res.render( theDir + '/' + theView );
});

router.get('/:subdir/:subdir2/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  res.locals.data = req.session;
  console.log( req.session );
  res.render( theDir + '/' + theDir2 + '/' + theView );
});

router.get('/:subdir/:subdir2/:subdir3/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  var theDir3 = req.params.subdir3;
  res.locals.data = req.session;
  console.log( req.session );
  res.render( theDir + '/' + theDir2 + '/' + theDir3 + '/' + theView );
});

router.get('/:subdir/:subdir2/:subdir3/:subdir4/:view', function(req, res, next) {
  var theView = req.params.view;
  var theDir = req.params.subdir;
  var theDir2 = req.params.subdir2;
  var theDir3 = req.params.subdir3;
  var theDir4 = req.params.subdir4;
  res.locals.data = req.session;
  console.log( req.session );
  res.render( theDir + '/' + theDir2 + '/' + theDir3 + '/' + theDir4 + '/' + theView );
});


//////// FORM POST FOR NDOP next

router.post('/ndop-next/v1/prelogin/how-do-you-want-to-prove-your-identity', function(req, res, next) {

  var identityRoute = req.body.identity; // grab the data
  req.session.route = identityRoute; // add it to session object

  if (identityRoute === "one-time-auth") {

    res.redirect( '/ndop-next/v1/one-time-auth/index' );

  } else if (identityRoute === "nhs-login") {

    res.redirect( '/ndop-next/v1/nhs-login/before-you-continue' );

  } else {

    res.redirect( '/ndop-next/v1/prelogin/error/no-choice-made' );

  }

});

router.post('/scr-audit/date-chooser/v1/how-do-you-want-to-search', function(req, res, next) {

  var identityRoute = req.body.date;

  if (identityRoute === "day") {

    console.log("ndop");
    res.redirect( '/scr-audit/date-chooser/v1/enter-the-day' );

  } else if (identityRoute === "between") {

    res.redirect( '/scr-audit/date-chooser/v1/day-from' );
    console.log("nhs login");

  } else if (identityRoute === "year") {

    res.redirect( '/scr-audit/date-chooser/v1/choose-the-year' );
    console.log("nhs login");

  } else {

    console.log("error");
    res.redirect( '/ndop-next/v1/prelogin/error/no-choice-made' );

  }

});

router.post('/scr-audit/date-chooser/v1/time-of-day', function(req, res, next) {

  var identityRoute = req.body.time;

  if (identityRoute === "yes") {

    console.log("ndop");
    res.redirect( '/scr-audit/date-chooser/v1/time-of-day-yes' );

  } else if (identityRoute === "no") {

    res.redirect( '/scr-audit/date-chooser/v1/search-results' );
    console.log("nhs login");

  } else {

    console.log("error");
    res.redirect( '/ndop-next/v1/prelogin/error/no-choice-made' );

  }

});

router.post('/scr-audit/date-chooser/v1/time-of-day-yes', function(req, res, next) {

  var identityRoute = req.body.timeyes;

  if (identityRoute === "yes") {

    console.log("ndop");
    res.redirect( '/scr-audit/date-chooser/v1/?' );

  } else if (identityRoute === "no") {

    res.redirect( '/scr-audit/date-chooser/v1/?' );
    console.log("nhs login");

  } else {

    console.log("error");
    res.redirect( '/ndop-next/v1/prelogin/error/no-choice-made' );

  }

});

router.post('/scr-audit/date-chooser/v1/choose-the-year', function(req, res, next) {

  var identityRoute = req.body.year;

  if (identityRoute === "2019") {

    console.log("ndop");
    res.redirect( '/scr-audit/date-chooser/v1/?' );

  } else if (identityRoute === "2018") {

    res.redirect( '/scr-audit/date-chooser/v1/?' );
    console.log("nhs login");

  } else if (identityRoute === "2017") {

    res.redirect( '/scr-audit/date-chooser/v1/?' );
    console.log("nhs login");

  } else if (identityRoute === "2016earlier") {

    res.redirect( '/scr-audit/date-chooser/v1/?' );
    console.log("nhs login");

  } else {

    console.log("error");
    res.redirect( '/ndop-next/v1/prelogin/error/no-choice-made' );

  }

});

router.post('/scr-audit/place-chooser/v1/choose-the-year', function(req, res, next) {

  var identityRoute = req.body.gov;

  if (identityRoute === "2019") {

    console.log("ndop");
    res.redirect( '/scr-audit/place-chooser/v1/place-timeline' );

  } else if (identityRoute === "2018") {

    res.redirect( '/scr-audit/place-chooser/v1/search-results' );
    console.log("nhs login");

  } else if (identityRoute === "2017") {

    res.redirect( '/scr-audit/place-chooser/v1/search-results' );
    console.log("nhs login");

  } else if (identityRoute === "2016earlier") {

    res.redirect( '/scr-audit/place-chooser/v1/search-results' );
    console.log("nhs login");

  } else {

    console.log("error");
    res.redirect( '/ndop-next/v1/prelogin/error/no-choice-made' );

  }

});

router.post('/scr-audit/place-chooser/v1/did-you-mean', function(req, res, next) {

  var identityRoute = req.body.timeyes;

  if (identityRoute === "yes") {

    console.log("ndop");
    res.redirect( '/scr-audit/place-chooser/v1/choose-the-year' );

  } else if (identityRoute === "no") {

    res.redirect( '/scr-audit/place-chooser/v1/enter-place' );
    console.log("nhs login");

  } else {

    console.log("error");
    res.redirect( '/ndop-next/v1/prelogin/error/no-choice-made' );

  }

});

module.exports = router;
