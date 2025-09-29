import languages from "../languages";
import { useState } from "react";
import MyBtn from "./Btn/MyBtn"
// import Btn from "./Btn/DetailsBtn"

export default function MyMain() {
    const [btnActive, setBtnActive] = useState(null);

    return (
        <div>
            {languages.map((lang) => (
                <MyBtn
                    title={lang.title}
                    isSelected={btnActive === lang.id}
                    onToggle={() => setBtnActive(btnActive === lang.id ? null : lang.id)}
                />


            ))}
        </div>
    )
}