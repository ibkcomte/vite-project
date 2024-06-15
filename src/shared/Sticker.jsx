const Sticker = (props) => {
    return (

        <div className="col-4">
            <div className="d-flex gap-3">
                <div className="">
                    <img src={props.image} alt="icon" className="img-fluid" />
                </div>
                <button type="button" className={'btn ${props.bgColor}'}>
                    Software Engineering
                </button>
            </div>
        </div>

    )
}

export default Sticker