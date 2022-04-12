export const saveItem = (key, val) => localStorage.setItem(key, JSON.stringify(val));
export const getItem = (key) =>  JSON.parse(localStorage.getItem(key));

export const ternaryFunction = (...items) => {
    return items.map(({ defaultValue, passValue, firstValue, secondValue }) => {
        return defaultValue === passValue ? firstValue : secondValue
    });
}

export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();