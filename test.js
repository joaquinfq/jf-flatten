const assert    = require('assert');
const jfFlatten = require('./index');
assert.deepStrictEqual(
    jfFlatten(
        {
            a : [1, 2],
            b : {
                c : 2,
                d : {
                    a : [4, 5],
                    b : false,
                    c : 3,
                    f : () =>
                    {
                    },
                    n : null,
                    s : 'string'
                },
                u : undefined
            }
        }
    ),
    {
        a : [1, 2, 4, 5],
        b : false,
        c : 3,
        n : null,
        s : 'string'
    }
);
assert.deepStrictEqual(
    jfFlatten(
        {
            a : [1, 2],
            b : {
                c : 2,
                d : {
                    a : [4, 5],
                    b : false,
                    c : 3,
                    f : () =>
                    {
                    },
                    n : null,
                    s : 'string'
                },
                u : undefined
            }
        },
        false
    ),
    {
        a : [4, 5],
        b : false,
        c : 3,
        n : null,
        s : 'string'
    }
);
assert.deepStrictEqual(
    jfFlatten(
        {
            a : [1,2],
            c : [2,3],
            b : {
                d : {
                    a : [4,5]
                }
            }
        },
        false
    ),
    {
        a : [4,5],
        c : [2,3]
    }
);
