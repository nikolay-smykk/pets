import './style.css'

export const NotFound = () => {
    return (
        <>
            <div className="site-logo">minimalizm-studio</div>
            <div className="navbar">
                <div className="site-info">Платье для вас</div>
                <div className="site-menu">
                    <div className="menu-item">Projects</div>
                    <div className="menu-item">About</div>
                    <div className="menu-item">Contact</div>
                </div>
            </div>

            <div className="header-container">
                <div className="header">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </div>
            </div>

            <div className="footer">
                <span>
                    Seems you are lost, come back <u>Home</u>
                </span>
                <div className="footer-wrapper"></div>
            </div>
        </>
    )
}
