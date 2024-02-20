import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* SideBar */}
            <div className="wrapper">
                <span>Louis Monié</span>
                <div >
                    <a href="#" className="social">
                        <img src="/linkedin.png" alt="" />
                        <img src="/gmail.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;