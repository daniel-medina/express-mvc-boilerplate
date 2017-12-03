/** Example Controller */

/** Configs imports */

/** Modules imports */

/** Models imports */

/** Libs imports */

/** GET */
export const get = {
  // Controller: index {{{
  /**
   * Handles the index of the blog
   *
   * @async
   * @param {HTTP} request
   * @param {HTTP} response
   */
  index: async (request, response) => {
    try {
      response.render('./example/index', {
        title: 'Example'
      })
    } catch (error) {
      console.log(error)
    }
  }
  // }}}
}
