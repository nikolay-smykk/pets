import { Link } from 'react-router-dom'
import { HeaderRight } from './HeaderRight'
import { HeaderCenter } from './HeaderCenter'
import { HeaderLeft } from './HeaderLeft'

import './style.css'

export const Header = () => {
    return (
        <header>
            <div className="flex header-container">
                <HeaderLeft />
                <HeaderCenter />
                <HeaderRight />
            </div>
        </header>
    )
}
