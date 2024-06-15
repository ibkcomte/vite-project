import bo5 from '../assets/bo5.svg'
import Bo2 from '../assets/Bo2.svg'
import Bo3 from '../assets/Bo3.svg'
import Bo4 from '../assets/Bo4.svg'
const SectionB = () => {
  return (
    <>
      <div className="container d-flex align-items-center">

        <div className=" ">
          <div className="w-75 p-4 h-25 d-inline-block" style={{}}>
            <p>We deliver an intensive 6-9months program where our students learn
              Frontend development, Backend development, Fullstack
              development,Mobile development, Product Design, Data Science,
              Web3 & Blockchain  and additional soft skills in an immersive
              environment.
            </p>
            <p>Through an agile delivery methodology, mentor matching and
              leadership modules, our learners are equipped with techniques and a
              leadership mindset that enables them to work competitively in any
              team globally.
            </p>

            <p>As part of our curriculum, we expose our engineers to real-life
              applications and projects. During these projects, we ensure they are
              well-equipped to develop programs individually and in teams.
              This aspect of our program provides our learners with verifiable work
              experience and the confidence to excel in their jobs after the training.
              Our graduates are mentored by various veterans in the tech industry,
              we leverage on that network to match our graduate with partner
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card" style={{ background: "rgba(236, 179, 45, 0.11)" }}>
              <img src={Bo4} className="card-img-top img-fluid w-25 mx-float-start" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{
                  fontWeight: "200px"
                }}> Equipped Curriculum </h5>
                <p className="card-text"> We enforce industry standard and best practices
                  that match the dynamics of the tech industry.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ background: "rgba(236, 179, 45, 0.11)" }}>
              <img src={Bo3} className="card-img-top img-fluid w-25 mx-float-start" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "200px" }}>Complete hands-on coding projects
                  with personalized feedback</h5>
                <p className="card-text">Enhances tactical problem-solving techniques and
                  gives a feel of reality.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ background: "rgba(236, 179, 45, 0.11)" }}>
              <img src={Bo2} className="card-img-top img-fluid w-25 mx-float-start" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600px" }}>Monthly session with Industry experts</h5>
                <p className="card-text">Opportunity to engage tech veterans, network,
                  and gain mentorship.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ background: "rgba(73, 148, 168, 0.18" }}>
              <img src={bo5} className="card-img-top img-fluid w-25 mx-float-start" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "600px" }}>Innovative learning culture</h5>
                <p className="card-text">TPeer-to-peer learning, with collaborative
                  approach. And guess what? "Lunch is
                  always on the house."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default SectionB


