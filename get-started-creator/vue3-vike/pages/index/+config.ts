import type { Config } from 'vike/types'

// SSR off so survey-creator / Ace are not evaluated on the server.
const config: Config = {
  ssr: false,
}

export default config
