const { expectError } = require('../')

describe('When requiring an unexisting module', () => {
  it('calls back with an error', () => {
    function requireFailingModule (callback) {
      try {
        require('/some/fake/module')
      } catch (error) {
        callback(error)
      }
    }
    const stub = jest.fn()
    requireFailingModule(stub)
    expect(stub).toHaveBeenCalledWith(expectError(/\/some\/fake\/module/))
  })
})
