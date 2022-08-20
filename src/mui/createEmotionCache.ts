import createCache from "@emotion/cache"
import type { EmotionCache } from "@emotion/cache"

// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
const getInsertionPoint = (): HTMLMetaElement | undefined => {
  if (typeof document !== "undefined") {
    const insertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    )
    if (insertionPoint != null) {
      return insertionPoint
    }
  }
}

const createEmotionCache = (): EmotionCache => {
  return createCache({ key: "mui-style", insertionPoint: getInsertionPoint() })
}

export default createEmotionCache
