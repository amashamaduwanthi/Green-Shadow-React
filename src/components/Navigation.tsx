import {Link} from "react-router";
import './Navigation.css'

export function Navigation() {
    return (
        <>
            <header className="bg-teal-900 text-white shadow=lg " >
                <nav className="px-4 py-3">
                    <ul className="flex space-x-4">
                        <Link to="/" className='custom-link'>Home</Link>
                        <Link to="/staff" className='custom-link'>Staff</Link>
                        <Link to="/crop" className='custom-link'>Crop</Link>
                        <Link to="/field" className='custom-link'>Field</Link>
                        <Link to="/equipment" className='custom-link'>Equipment</Link>
                        <Link to="/vehicle" className='custom-link'>Vehicle</Link>
                        <Link to="/log" className='custom-link'>Monitoring Log</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}


