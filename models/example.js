import {url} from '../config/database'

import mongoose from 'mongoose'

const connection = mongoose.createConnection(url)
mongoose.Promise = global.Promise
const Schema = mongoose.Schema
const ExampleSchema = new Schema({
  created: Date
}, {
  collection: 'example'
})

module.exports = connection.model('Example', ExampleSchema)
