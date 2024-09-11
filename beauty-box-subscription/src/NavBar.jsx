import Bars from './Bars.jsx'
import CloseNav from './CloseNav.jsx';

function NavBar(){
    
    return(

        <>
            <header>
                <div className="nav-container">
                        <div className="logo">
                            <a href="#">Beauty Box</a>
                        </div>
                <input type="checkbox" id="checkbox"></input>
                <nav className="primary-nav">
                    <ul className="primary-nav_list hide">
                        <li className="primary-nav_item"><a href="#">About</a></li>
                        
                        <li className="primary-nav_item"><a href="#">Pricing</a></li>
                        
                        <li className="primary-nav_item"><a href="#">Shop</a></li>
                    </ul>
                </nav>
                <label htmlFor="checkbox">
                    <div className="mobile-icons">
                        <Bars/>
                    </div>
                </label>
                </div>
            </header>

        </>
    );

}

export default NavBar