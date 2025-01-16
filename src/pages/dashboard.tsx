
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fortawesome/fontawesome-free/css/all.min.css';


export function Dashboard(){
    return(
        <>
        <br/>
        {/*<div className="bg-white shadow-md rounded-lg p-6 m-4 bg-[url('/img/hero-pattern.svg')]">*/}
        <div className="flex h-screen">
        {/* Sidebar */}
            <aside className="w-64 bg-green-400  text-white p-6">
            <h1 className="text-2xl font-bold mb-6">Crop Management</h1>
            <nav>
            <ul>
            <li className="mb-4"><a href="#" className="hover:text-green-400">Dashboard</a></li>
            <li className="mb-4"><a href="#" className="hover:text-green-400">Crops</a></li>
            <li className="mb-4"><a href="#" className="hover:text-green-400">Fields</a></li>
            <li className="mb-4"><a href="#" className="hover:text-green-400">Staff</a></li>
            <li className="mb-4"><a href="#" className="hover:text-green-400">Equipment</a></li>
            <li className="mb-4"><a href="#" className="hover:text-green-400">Vehicle</a></li>
            <li className="mb-4"><a href="#" className="hover:text-green-400">Monitoring Log</a></li>
            </ul>
            </nav>
            </aside>

        {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
                {/* Header */}
                <header className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold text-teal-900 bg-green-100 p-4 rounded-lg shadow-md border-l-8 border-green-500">Crop
                        Management Overview</h2>
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">Logout</button>
                </header>

                {/* Cards Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        className="p-6 bg-white rounded-lg shadow-md hover:bg-green-100 transition duration-300 flex items-center gap-4">
                        <i className="fas fa-seedling text-green-500 text-3xl"></i>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Total Crops</h3>
                            <p className="text-gray-600">320</p>
                        </div>
                    </div>
                    <div
                        className="p-6 bg-white rounded-lg shadow-md hover:bg-green-100 transition duration-300 flex items-center gap-4">
                        <i className="fas fa-tractor text-green-500 text-3xl"></i>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Active Fields</h3>
                            <p className="text-gray-600">150</p>
                        </div>
                    </div>
                    <div
                        className="p-6 bg-white rounded-lg shadow-md hover:bg-green-100 transition duration-300 flex items-center gap-4">
                        <i className="fas fa-user-friends text-green-500 text-3xl"></i>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Staff Members</h3>
                            <p className="text-gray-600">200</p>
                        </div>
                    </div>
                </section>
                {/* Calendar Section */}
                <section className="mt-5" >
                    <h3 className="text-2xl font-semibold mb-4">Calendar</h3>
                    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth"/>
                </section>
            </main>
        </div>

            {/*</div>*/
            }
        </>
    )
}