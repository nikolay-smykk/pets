import { Link } from 'react-router-dom'

export const HeaderRight = () => {
    return (
        <div className="header-right flex">
            <nav className="header-right-nav">
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
