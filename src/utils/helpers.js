export const saveItem = (key, val) => localStorage.setItem(key, JSON.stringify(val));
export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
