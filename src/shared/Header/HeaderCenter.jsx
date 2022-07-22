import { Link } from 'react-router-dom'

export const HeaderCenter = () => {
    return (
        <div className="header-center flex">
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                </ul>
            </nav>
            <input type="text" placeholder="Search" />
        </div>
    )
}
