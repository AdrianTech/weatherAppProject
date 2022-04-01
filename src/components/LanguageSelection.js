import React from "react";
import { DataContext } from "../store/dataContext";
import { AppButton } from "../styledComponents/buttons.styled";
import { assets } from "../utils/config";

export default function LanguageSelection({setSwitchPage, result}) {
    const { changeLanguage, currentLanguage: lang } = React.useContext(DataContext);

    return (
        <div className="btn-select">
            <div><AppButton bg onClick={setSwitchPage}>{result}</AppButton></div>
            <div className="btn-languages">
            <button disabled={lang === "pl"} onClick={() => changeLanguage("pl")} ><img src={assets.plFlag} alt="Polish language" /></button>
            <button disabled={lang === "en"} onClick={() => changeLanguage("en")}><img src={assets.ukFlag} alt="English language" /></button>
            </div>
        </div>
    )
}