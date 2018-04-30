[![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url]

jest-expect-error
==================

> The missing `expect.error(String|RegExp)` from jest as `expectError(String|RegExp)`

Chainable utility to assemble URLs from templates

Installation
------------

    npm install --save jest-expect-error

Usage
-----

```javascript
const stub = jest.fn()
const error = new Error('My Custom Error')
stub(error)
expect(stub).toHaveBeenCalledWith(expectError(/custom error/i))
expect(stub).toHaveBeenCalledWith(expectError('My Custom Error'))
expect(stub).toHaveBeenCalledWith(expectError())
```

Why
---

If you are here you probably already know why: `expect.any(Error)` does not
always work due to sandboxing and gives weird errors like `"expected Any<Error> but got [Error: some error]"`

Test
----

Tests are written with `jest`.
You can run the tests with `npm test`.

Contributing
------------

Anyone is welcome to submit issues and pull requests


License
-------

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018 Florent Jaby

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[travis-image]: http://img.shields.io/travis/Floby/jest-expect-error/master.svg?style=flat
[travis-url]: https://travis-ci.org/Floby/jest-expect-error

