/**
 * Locals Middleware
 * Defines locals that can be used anywhere on the website
 */

/** Configs imports */

/** Modules imports */

/** Models imports */

/** Libs imports */

module.exports = {
  set: (request, response, next) => {
    response.locals = {
      test: 'example local'
    }

    next()
  }
}
