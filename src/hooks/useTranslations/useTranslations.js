import * as translations from "../../translations";
import { getItem } from "../../utils/helpers";

export default function useTranslations() {
    const getLanguage = getItem('lang');
    const translate = (key) => translations[getLanguage][key];
    return {
        lang: getLanguage,
        t: translate,
    }
}