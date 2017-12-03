/**
 * Example Model
 *
 * @see Parent
 */

/** Configs imports */
import {url} from '../../config/database'

/** Modules imports */
import mongoose from 'mongoose'

/** Models imports */

const Schema = mongoose.Schema
const connection = mongoose.createConnection(url)

mongoose.Promise = global.Promise

const ExampleSchema = new Schema({
  created: Date
}, {
  collection: 'example'
})

const Example = connection.model('Example', ExampleSchema)

export { ExampleSchema, Example }
