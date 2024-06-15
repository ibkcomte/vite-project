import nerdy from '../assets/nerdy.png'
import codeNinger from '../assets/codeNinger.png'
import slayer from '../assets/slayer.png'
const SectionE = () => {
    return (
        <>
            <h3 className="text-center" style={{ fontWeight: "bold", fontSize: "40px" }}>Meet the team</h3>
            <div className="container d-flex flex-row align-items-center justify-content-center mt-5 gap-5">
                <img src={nerdy} alt="nerdy" className="img-fluid" />
                <img src={codeNinger} alt="codeNinga" className="img-fluid" />
                <img src={slayer} alt="slayer" className="img-fluid" />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-5 gap-5" style={{ fontWeight: "bold", fontSize: "20px" }}>
                <div className="">nerdy-knight</div>
                <div>code ninja</div>
                <div>code - slayer</div>
            </div>
        </>
    )
}
export default SectionE