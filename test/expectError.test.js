const { expectError } = require('../')

describe('expectError()', () => {
  let matcher
  beforeEach(() => {
    matcher = expectError()
  })
  it('has the correct $$typeof symbol to be recognized by jest', () => {
    expect(matcher.$$typeof).toBe(Symbol.for('jest.asymmetricMatcher'))
  })
  describe('.asymmetricMatch(value)', () => {
    describe('When value is an error', () => {
      it('returns true', () => {
        expect(matcher.asymmetricMatch(Error('hello'))).toBe(true)
      })
    })
    describe('When value quacks like an error', () => {
      it('returns true', () => {
        function MyError() {
          this.message = 'some string'
          this.stack = 'some string'
        }
        const value = new MyError()
        expect(matcher.asymmetricMatch(value)).toBe(true)
      })
    })
    describe('When value is not an error', () => {
      it('returns false', () => {
        expect(matcher.asymmetricMatch({})).toBe(false)
      })
    })
  })

  describe('.toAsymmetricMatcher()', () => {
    it('returns "Error"', () => {
      expect(matcher.toAsymmetricMatcher()).toEqual('Error')
    })
  })
})

describe('expectError(message)', () => {
  const matchingMessage = 'Hello World!'
  const failingMessage = 'foo'
  let matcher
  beforeEach(() => {
    matcher = expectError(matchingMessage)
  })
  it('has the correct $$typeof symbol to be recognized by jest', () => {
    expect(matcher.$$typeof).toBe(Symbol.for('jest.asymmetricMatcher'))
  })
  describe('.asymmetricMatch(value)', () => {
    describe('when value is an error', () => {
      describe('that matches', () => {
        it('returns true', () => {
          expect(matcher.asymmetricMatch(Error(matchingMessage))).toBe(true)
        })
      })
      describe('that does not match', () => {
        it('returns false', () => {
          expect(matcher.asymmetricMatch(Error(failingMessage))).toBe(false)
        })
      })
    })
    describe('When value quacks like an error', () => {
      describe('that matches', () => {
        it('returns true', () => {
          function MyError() {
            this.message = matchingMessage
            this.stack = 'some string'
          }
          const value = new MyError()
          expect(matcher.asymmetricMatch(value)).toBe(true)
        })
      })
      describe('that does not match', () => {
        it('returns true', () => {
          function MyError() {
            this.message = failingMessage
            this.stack = 'some string'
          }
          const value = new MyError()
          expect(matcher.asymmetricMatch(value)).toBe(false)
        })
      })
    })
    describe('When value is not an error', () => {
      it('returns false', () => {
        expect(matcher.asymmetricMatch({})).toBe(false)
      })
    })
  })

  describe('.toAsymmetricMatcher()', () => {
    it('returns "Error like <message>"', () => {
      expect(matcher.toAsymmetricMatcher()).toEqual(`Error: "${matchingMessage}"`)
    })
  })
})

describe('expectError(regex)', () => {
  const regex = /hello/i
  const matchingMessage = 'Hello World!'
  const failingMessage = 'foo'
  let matcher
  beforeEach(() => {
    matcher = expectError(regex)
  })
  it('has the correct $$typeof symbol to be recognized by jest', () => {
    expect(matcher.$$typeof).toBe(Symbol.for('jest.asymmetricMatcher'))
  })
  describe('.asymmetricMatch(value)', () => {
    describe('when value is an error', () => {
      describe('that matches', () => {
        it('returns true', () => {
          expect(matcher.asymmetricMatch(Error(matchingMessage))).toBe(true)
        })
      })
      describe('that does not match', () => {
        it('returns false', () => {
          expect(matcher.asymmetricMatch(Error(failingMessage))).toBe(false)
        })
      })
    })
    describe('When value quacks like an error', () => {
      describe('that matches', () => {
        it('returns true', () => {
          function MyError() {
            this.message = matchingMessage
            this.stack = 'some string'
          }
          const value = new MyError()
          expect(matcher.asymmetricMatch(value)).toBe(true)
        })
      })
      describe('that does not match', () => {
        it('returns true', () => {
          function MyError() {
            this.message = failingMessage
            this.stack = 'some string'
          }
          const value = new MyError()
          expect(matcher.asymmetricMatch(value)).toBe(false)
        })
      })
    })
    describe('When value is not an error', () => {
      it('returns false', () => {
        expect(matcher.asymmetricMatch({})).toBe(false)
      })
    })
  })

  describe('.toAsymmetricMatcher()', () => {
    it('returns "Error like <message>"', () => {
      expect(matcher.toAsymmetricMatcher()).toEqual(`Error like "${String(regex)}"`)
    })
  })
})
