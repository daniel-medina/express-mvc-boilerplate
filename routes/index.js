/** Imports goes here */
import express from 'express'

/** Controllers */
import * as ExampleController from '../controllers/example'

/** Middlewares */
import * as ExampleMiddleware from '../middlewares/example'

const router = express.Router()

/**
 * GET routes
 * -----------
 * MIDDLEWARES
 * {{{
 */
router.get('/', ExampleMiddleware.get.index)
// }}}

/**
 * GET routes
 * -----------
 * CONTROLLERS
 * {{{
 */
router.get('/', ExampleController.get.index)
// }}}

export default router
