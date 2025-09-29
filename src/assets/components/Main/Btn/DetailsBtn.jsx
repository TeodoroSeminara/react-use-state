const DetailsBtn = (props) => {
    const { info, isSelected } = props;
    return (
        <>
            <p className="container">
                {isSelected && info}
            </p>
        </>
    )

}

export default DetailsBtn