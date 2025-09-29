import DetailsBtn from "./DetailsBtn";

const MyBtn = (props) => {
    const { title, info, isSelected, onToggle } = props;

    return (

        <div>
            <button
                onClick={onToggle}
            >
                {title}
            </button>
            <DetailsBtn
                info={lang.description}
                isSelected={btnActive === lang.id}
                onToggle={() => setBtnActive(btnActive === lang.id ? null : lang.id)}
            />
        </div>
    )
}

export default MyBtn