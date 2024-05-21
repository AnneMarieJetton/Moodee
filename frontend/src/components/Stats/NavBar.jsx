import '../../styles/NavBar.css';

import { Link } from 'react-router-dom';

const NavBar = () => {

    return (

        <div className = 'NavBar'>
            <span className = 'NavBarLogo'>MOODEE</span>
            <div className = 'NavBarLinks'>
                <Link to = '/' className = 'NavBarLink'>My Mood</Link>
                <Link to = '/' className = 'NavBarLink'>Today</Link>
                <Link to = '/' className = 'NavBarLink'>Week</Link>
                <Link to = '/' className = 'NavBarLink'>Month</Link>
                <Link to = '/' className = 'NavBarLink'>year</Link>
            </div>
        </div>
    );
};

export default NavBar