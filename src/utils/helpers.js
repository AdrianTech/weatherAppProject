export const saveItem = (key, val) => localStorage.setItem(key, JSON.stringify(val));

export const getItem = (key) => JSON.parse(localStorage.getItem(key));

export const ternaryFunction = (...items) => {
    return items.map(({ defaultValue, passValue, firstValue, secondValue }) => {
        return defaultValue === passValue ? firstValue : secondValue
    });
}

/**
 * Capitalize first letter of the provided string
 * @param {*} str 
 * @returns string
 */
export const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
/**
 * Get language from the user
 * @returns string
 */
export const userLang = () => window.navigator.language.substring(0, 2) !== "pl" ? "en" : "pl";

/**
 * Calculate timezone offset
 * @param {*} timezone 
 * @returns number
 */

export const getTimezoneOffset = (timezone) => new Date().getTimezoneOffset() * 60 + timezone;


/**
 * Convert temperature to fahrenheit if bool is true or return if false
 * @param {*} bool 
 * @param {*} temperature 
 * @returns 
 */
export const convertTemperature = (bool, temperature) => {
    if (bool) {
        return (<>{(temperature * 9 / 5 + 32).toFixed(0)} &#8457;</>);
    }
    return (<>{temperature.toFixed(1)} &#8451;</>);
} 