const MyBtn = (props) => {
    const { title, onToggle } = props;

    return (
        <>
            <button type="button" className="btn btn-primary"
                onClick={onToggle}
            >
                {title}
            </button>

        </>
    )
}

export default MyBtn