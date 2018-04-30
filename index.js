module.exports = {
  expectError
}

function expectError (messageMatcher) {
  messageMatcher = messageMatcher || null
  return {
    // This is how jest recognize a matcher
    // see https://github.com/facebook/jest/blob/42c1d756828ed14e286322acaecda8d1c086ec5e/packages/expect/src/asymmetric_matchers.js#L25
    $$typeof: Symbol.for('jest.asymmetricMatcher'),
    asymmetricMatch(other) {
      if (!other.constructor.name.endsWith('Error')) return false;
      if (!other.hasOwnProperty('message')) return false;
      if (!other.hasOwnProperty('stack')) return false;
      if (messageMatcher === null) {
        return true
      } else if (messageMatcher.constructor === RegExp) {
        return messageMatcher.test(other.message)
      } else {
        return messageMatcher === other.message
      }
      return false
    },
    toAsymmetricMatcher() {
      if (messageMatcher === null) {
        return 'Error'
      } else if (typeof messageMatcher === 'string') {
        return `Error: "${messageMatcher}"`
      } else {
        return `Error like "${String(messageMatcher)}"`
      }
    }
  }
}
