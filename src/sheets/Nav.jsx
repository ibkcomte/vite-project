import logo from '../assets/zulfahLogo.svg'
const Nav = () => {

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">
                    <img src = {logo} alt="logo" className= 'img-fluid'/>
                    </a>
                    <form className="d-flex justify-content-end" role="nav">
                        <div className= "d-flex justify-contents-between gap-5 align-items-end">
                        <div className="p-2">Home</div>
                        <div className="p-2">Courses</div>
                        <div className="p-2">FAQS</div>
                        <div className="p-2">Application Status</div>
                        <div className="p-2">HIRE</div>
                     </div>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Nav