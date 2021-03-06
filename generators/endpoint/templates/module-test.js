// This is a file generated by the yeoman generator hapijs

/**
 * Unit tests for all the <%= name %> endpoints
 *
 * @type {exports}
 */

var Lab = require('lab');
var server = require('../../server');
var lab = exports.lab = Lab.script();

/**
 * All the tests related to tasks
 */
lab.experiment('Creating <%= name %>', () => {

  lab.test('should be successful', (done) => {
    var options = {
      method: 'POST',
      url: '/<%= name %>',
      payload: {

      }
    };

    server.inject(options, (response) => {
      var result = response.result;

      Lab.expect(response.statusCode).to.equal(200);

      done();
    });
  });

});

lab.experiment('Fetching <%= pluralName %>', () => {

  lab.test('should be successful', (done) => {
    var options = {
      method: 'GET',
      url: '/<%= name %>',
      payload: {

      }
    };

    server.inject(options, (response) => {
      var result = response.result;

      Lab.expect(response.statusCode).to.equal(200);

      done();
    });
  });

});
