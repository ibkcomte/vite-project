import softwareE from '../assets/softwareE.svg'
import mobileD from '../assets/mobileD.svg'
import productDesign from '../assets/productDesign.svg'
import dataSc from '../assets/dataSc.svg'
import DevOps from '../assets/DevOps.svg'
import web3 from '../assets/web3.svg'

const SectionC = () => {
    return (
        <>
            <h3 className="d-flex flex-column align-items-center px-5 py-3" style={{ fontWeight: "bold" }}> Immersive bootcamps strategically designed
                to launch your tech career.</h3>

            <div className=" container mx-auto row justify-content-between px-5 my-5 mb-5" style={{ }}>
                <div className="col-4">
                    <div className=" ">
                        <img src={softwareE} alt="softwareE" className="img-fluid " />
                    </div>
                    <div className="bg-dark text-white mb-5" style={{ width: "19rem", height: "5rem", borderRadius: "4px"}}>
                        <h3>Software Engineer</h3>

                    </div>

                </div>

                <div className="col-4">
                    <div className=" ">
                        <div className="">
                            <img src={mobileD} alt="mobile Development" className="img-fluid" />
                        </div>
                        <div className="bg-success text-white" style={{ width: "19rem", height: "5rem", borderRadius: "4px" }}>
                            <h3>Mobile Development</h3>

                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className=" ">
                        <div className="">
                            <img src={productDesign} alt="product Design" className="img-fluid" />
                        </div>
                        <div className="text-white" style={{ background: "indigo", width: "19rem", height: "5rem", borderRadius: "4px" }}>
                            <h3>product Design</h3>

                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className=" ">
                        <div className="">
                            <img src={dataSc} alt="data Science" className="img-fluid" />
                        </div>
                        <div className="text-white" style={{ background: "gray", width: "19rem", height: "5rem", borderRadius: "4px" }}>
                            <h3>Data Science</h3>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className=" ">
                        <div className="">
                            <img src={DevOps} alt="DevOps" className="img-fluid" />
                        </div>
                        <div className="text-white" style={{ background: "brown", width: "19rem", height: "5rem", borderRadius: "4px" }}>
                            <h3>Dev Ops</h3>

                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="">
                        <div className="">
                            <img src={web3} alt="web3" className="img-fluid" />
                        </div>
                        <div className="bg-success text-white" style={{ width: "19rem", height: "5rem" , borderRadius: "4px"}}>
                            <h3>Web3 Technology</h3>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionC