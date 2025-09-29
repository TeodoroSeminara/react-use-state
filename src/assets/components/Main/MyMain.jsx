import languages from "../languages";
import { useState } from "react";
import MyBtn from "./Btn/MyBtn";
import DetailsBtn from "./Btn/DetailsBtn";

export default function MyMain() {
    const [btnActive, setBtnActive] = useState(null);

    return (
        <div className="d-flex">
            {languages.map((lang) => (
                <>
                    <MyBtn
                        key={lang.id}
                        title={lang.title}
                        isSelected={btnActive === lang.id}
                        onToggle={() => setBtnActive(btnActive === lang.id ? null : lang.id)}
                    />
                    <DetailsBtn
                        info={lang.description}
                        isSelected={btnActive === lang.id}
                        onToggle={() => setBtnActive(btnActive === lang.id ? 0 : lang.id)}
                    />
                </>
            ))
            }
        </div >
    )
}