import {Link} from "react-router";

export function Navigation() {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/staff">Staff</Link>
                    <Link to="/crop">Crop</Link>
                    <Link to="/field">Field</Link>
                    <Link to="/equipment">Equipment</Link>
                    <Link to="/vehicle">Vehicle</Link>
                    <Link to="/log">Monitoring Log</Link>
                </ul>
            </nav>
        </header></>
    )
}


