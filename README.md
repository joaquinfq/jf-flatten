# jf-flatten [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

[![npm install jf-flatten](https://nodei.co/npm/jf-flatten.png?compact=true)](https://npmjs.org/package/jf-flatten/)

Recursively looks for other objects and places their keys in the root object 
discarding any non-scalar or `undefined` values.

If an array exists with the same key elements are not replaced,
they are added at the end if second parameter is different of `false`.

## Examples

```js
const assert    = require('assert');
const jfFlatten = require('./index');
assert.deepStrictEqual(
    jfFlatten(
        {
            a : [1,2],
            b : {
                c : 2,
                d : {
                    a : [4,5],
                    b : false,
                    c : 3,
                    f : () => {},
                    n : null,
                    s : 'string'
                },
                u : undefined
            }
        }
    ),
    {
        a : [1,2,4,5],
        b : false,
        c : 3,
        n : null,
        s : 'string'
    }
);
// No concat arrays.
assert.deepStrictEqual(
    jfFlatten(
        {
            a : [1,2],
            b : {
                d : {
                    a : [4,5]
                }
            }
        },
        false
    ),
    {
        a : [4,5]
    }
);
```
