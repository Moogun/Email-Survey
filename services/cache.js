const mongoose = require('mongoose')
const redis = require('redis')
const util = require('util')

// before CI
// const redisUrl = 'redis://127.0.0.1:6379'
//const client = redis.createClient(redisUrl)


//after CI
const keys = require('../config/keys')
const client = redis.createClient(keys.redisUrl)

client.hget = util.promisify(client.hget)
const exec = mongoose.Query.prototype.exec

mongoose.Query.prototype.cache = function(options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key || '')

  return this
}
