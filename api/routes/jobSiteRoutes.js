'use strict';
module.exports = function(app) {
  var jobSite = require('../controllers/jobSiteController');

  // jobSite Routes
  app.route('/jobs')
    .get(jobSite.list_all_jobs)
    .post(jobSite.create_a_job);


  app.route('/jobs/:jobId')
    .get(jobSite.read_a_job)
    .put(jobSite.update_a_job)
    .delete(jobSite.delete_a_job);
};
