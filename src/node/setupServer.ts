import type { RequestHandler } from '~/core/handlers/RequestHandler'
import { SetupServerApi } from './SetupServerApi'

/**
 * Sets up a requests interception in Node.js with the given request handlers.
 * @param {RequestHandler[]} handlers List of request handlers.
 *
 * @see {@link https://mswjs.io/docs/api/setup-server `setupServer()` API reference}
 */
export const setupServer = (
  ...handlers: Array<RequestHandler>
): SetupServerApi => {
  return new SetupServerApi(handlers)
}
