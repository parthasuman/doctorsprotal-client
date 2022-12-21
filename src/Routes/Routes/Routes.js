import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import DashBordLayout from "../../Layout/DashBordLayout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SingUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyAppointment from "../../Pages/Dashbord/MyAppointment/MyAppointment";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllUsers from "../../Pages/Dashbord/AllUsers/AllUsers";
import AddDoctor from "../../Pages/Dashbord/AddDoctor/AddDoctor";
import ManageDoctors from "../../Pages/Dashbord/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashbord/Payment/Payment";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/appoinment",
        element: <Appoinment></Appoinment>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBordLayout></DashBordLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://doctors-protal-server-omega.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
