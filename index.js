function flatten(name, value, result, add)
{
    if (value === null)
    {
        result[name] = null;
    }
    else if (typeof value === 'object')
    {
        if (Array.isArray(value))
        {
            // Si ambos valores son arrays, se concatenan si `add` evalúa a un valor verdadero.
            if (add && Array.isArray(result[name]))
            {
                result[name].push(...value);
            }
            else
            {
                result[name] = value;
            }
        }
        else
        {
            Object.keys(value).forEach(key => flatten(key, value[key], result, add));
        }
    }
    else
    {
        const _type = typeof value;
        if (_type === 'boolean' || _type === 'number' || _type === 'string')
        {
            result[name] = value;
        }
    }
}
/**
 * Busca de manera recursiva otros objetos y coloca sus claves en el objeto raíz
 * descartando cualquier valor no escalar o `undefined`.
 *
 * Si un array existe con la misma clave los elementos y se pasa `false` como segundo parámetro
 * los valores no se reemplazan, se agregan al final.
 *
 * @param {Object}  obj Objeto a aplanar.
 * @param {Boolean} add Si es `true` los arrays se concatenan.
 *
 * @return {Object} Objeto resultante sin anidamientos.
 */
module.exports = function jfFlatten(obj, add = true)
{
    let _result;
    if (obj && typeof obj === 'object' && !Array.isArray(obj))
    {
        _result = {};
        flatten('', obj, _result, add !== false);
    }
    else
    {
        _result = obj;
    }
    //
    return _result;
};
