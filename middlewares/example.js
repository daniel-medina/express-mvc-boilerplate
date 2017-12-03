/**
 * Example Middleware
 */

/** Configs imports */

/** Modules imports */

/** Models imports */

/** Libs imports */

/** GET */
export const get = {
  // Controller: index {{{
  /**
   * Index of the example page's security
   *
   * @async
   * @param {HTTP} request
   * @param {HTTP} response
   */
  index: async (request, response, next) => {
    try {
      const test = true

      if (test) {
        next()
      } else {
        response.send('Blocked !')
      }
    } catch (error) {
      console.log(error)
    }
  }
  // }}}
}
