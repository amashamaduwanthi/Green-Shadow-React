import {createBrowserRouter, RouterProvider} from "react-router";
import {RootLayout} from "./components/RootLayout.tsx";
import {Dashboard} from "./pages/dashboard.tsx";
import {Staff} from "./pages/staff.tsx";
import {Field} from "./pages/field.tsx";
import {Equipment} from "./pages/equipment.tsx";
import {Vehicle} from "./pages/vehicle.tsx";
import {Log} from "./pages/log.tsx";
import {Crop} from "./pages/crop.tsx";
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";
import {AddStaffMember} from "./pages/AddStaffMember.tsx";

function App() {
    const routes=createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            children:[
                {path:'',element:<Dashboard/>},
                {path:'/staff',element:<Staff/>},
                       {path:'/staff/Add',element:<AddStaffMember/>},
                {path:'/field',element:<Field/>},
                {path:'/crop',element:<Crop/>},
                {path:'/equipment',element:<Equipment/>},
                {path:'/vehicle',element:<Vehicle/>},
                {path:'/log',element:<Log/>}

            ]
        }
    ])
    return (
        <>
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider></>
    )
}
export default App;
