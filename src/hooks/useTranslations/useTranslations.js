import { useContext } from "react";
import { DataContext } from "../../store/dataContext";
import * as translations from "../../translations";

export default function useTranslations() {
    const { currentLanguage } = useContext(DataContext);
    console.log(currentLanguage);
    const translate = (key) => {
        return translations[currentLanguage][key]
    };
    return {
        t: translate,
    }
}