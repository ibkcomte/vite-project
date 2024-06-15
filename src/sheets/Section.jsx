import coffeeCup from '../assets/coffeeCup.png'

const Section = () => {
    return (
        <>
            <div className="container d-flex align-items-center">
                <div className=" ">
                    <h1 className=" " style={{ color: "#CF3A5E", width: "44rem", fontSize: "60px", fontWeight: "bold" }}>Join Our Innovative Tech School Today!</h1>
                    <p style={{ width: "27rem" }}>
                        Gain the skills you need to land a job in the tech industry.
                        Zulfah Academy trains and mentors you to become an excellent engineer. Over 100 professionals
                        trained. Read stories
                    </p>
                </div>
                <div>
                <div className=" ">
                    <img  style={{height:"500px", width:"500px"}} src={coffeeCup} alt="" className="img-fliud"></img>
                </div>
            </div>
            </div>

        </>
    )
}

export default Section