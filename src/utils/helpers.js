export const saveItem = (key, val) => localStorage.setItem(key, JSON.stringify(val));
export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

export const ternaryFunction = (...items) => {
    return items.map(({defaultValue, passValue, firstValue, secondValue}) => {
       return defaultValue === passValue ? firstValue : secondValue
    });
}