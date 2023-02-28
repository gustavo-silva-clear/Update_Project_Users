var express = require('express');
var assert = require('assert');
var restify = require('restify-clients');
var router = express.Router();

var client = restify.createJsonClient({
  url: 'http://localhost:4000'
});

//get
router.get('/', function (req, res, next) {

  client.get('/users', function(err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);
  });

});
//get id
router.get('/:id', function(req, res, next) {

  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  });

});
// put
router.put('/:id', function(req, res, next) {

  client.put(`/users/${req.params.id}`, req.body ,function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  });

});

//delete
router.delete('/:id', function(req, res, next) {

  client.del(`/users/${req.params.id}`,function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  });

});
//post
router.post('/', function(req, res, next) {

  client.get('/users', req.body ,function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);

  });

});

module.exports = router;
