import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Header from './Components/Header';
import DashBoard from './Pages/DashBoard';
import PrivateRoute from './Components/PrivateRoute';
import OnlyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute';
import Footer from './Components/Footer';
import AddProducts from './Pages/AddProducts';
import AddRoom from './Pages/AddRoom';
import ProductPage from './Pages/ProductPage';
import PostProduct from './Pages/PostProduct';
import Cart from './Pages/Cart';
import UpdateProducts from './Pages/UpdateProducts';

import RoomPage from './Pages/RoomPage';
import UpdateRooms from './Pages/UpdateRooms';
import PostRoom from './Pages/PostRoom';

import Ordersummary from './Pages/OrderSummary';
import OrderSuccess from './Pages/OrderSuccess';
import UpdateOrder from './Pages/UpdateOrder';


import CleaningRequestForm from "./Pages/CleanRequestForm";
import RequestSuccessPage from "./Pages/RequestSuccessPage";
import UpdateRequestAdmin from "./Pages/UpdateRequestAdmin";
import UpdateCommentAdmin from "./Pages/UpdateCommentAdmin";
import UpdateCommentUser from "./Pages/UpdateCommentUser";import Addstaff from './Pages/Addstaff';
import Updatestaff from './Pages/updateStaff';
import AssignTask from './Pages/AssignTask';

import RoomIncomeMonthlySummary from "./Pages/RoomIncomeMonthlySummary";
import OrderIncomeMonthlySummary from './Pages/OrderIncomeMonthlySummary';
import Support from './Pages/Support';
import UpdateTicket from './Pages/UpdateTicket';
import DashMyTickets from './Components/DashMyTickets';
import AnnouncementForm from './Pages/AnnouncementForm';
import UpdateAnnouncement from './Pages/UpdateAnnouncement';
import PostedAnnouncements from './Pages/PostedAnnouncements';
import SupplierForm from './Pages/SupplierForm';
import SellerFormSuccess from './Pages/SellerFormSuccess';
import ApprovedSuppliers from './Components/DashApprovedSuppliers';
import DashSupplierRegistration from './Components/DashSupplierRegistration';
import UpdateSellerRequest from './Pages/UpdateSellerRequest';


import FoodHome from './Pages/FoodOrdering/FoodHome'; // Update the import path
import BreakfastMenu from './Pages/FoodOrdering/BreakfastMenu';
import DinnerMenu from './Pages/FoodOrdering/DinnerMenu';
import Pickup from './Pages/FoodOrdering/Pickup';
import SelectedFoods from './Pages/FoodOrdering/SelectedFoods';
import LunchMenu from './Pages/FoodOrdering/LunchMenu';
import BeverageMenu from './Pages/FoodOrdering/BeverageMenu';
import LoginPage from './Pages/FoodOrdering/LoginPage';
import FoodAdd from './Pages/FoodOrdering/AdminSide/FoodAdd';
import ProductList from './Pages/FoodOrdering/AdminSide/ProductList';
import AdminLayout from './Pages/FoodOrdering/AdminSide/AdminLayout';
import FoodAdminDashboard from './Pages/FoodOrdering/AdminSide/FoodAdminDashboard';
import EditProduct from './Pages/FoodOrdering/AdminSide/EditProduct';
import FoodOrderHistory from './Pages/FoodOrdering/AdminSide/FoodOrderHistory';

import Staff from './Pages/staff';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/product-page" element={<ProductPage/>}/>

        <Route path="/room-page" element={<RoomPage/>}/>
        <Route path="/product/:productSlug" element={<PostProduct/>} />
        <Route path="/room/:roomSlug" element={<PostRoom/>} />


        <Route path="/product/:productSlug" element={<PostProduct/>} />        
        <Route path="/addstaff" element={<Addstaff/>}/>
        <Route path="/updatestaff/:id" element={<Updatestaff/>}/>
        <Route path="/taskassign/:id" element={<AssignTask/>}/>



        <Route element={<PrivateRoute />} />
        <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/update-product/:productId" element={<UpdateProducts/>}/>
          <Route path="/update-room/:roomId" element={<UpdateRooms/>}/>
          <Route path="/cart" element={<Cart/>}/> 
        <Route/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order-summary" element={<Ordersummary/>}/>
          <Route path="/order-pay-success" element={<OrderSuccess/>}/> 
          <Route path="/update-order/:id" element = {<UpdateOrder/>}/> 
        <Route />

        <Route element={<OnlyAdminPrivateRoute />}></Route>

        <Route path="/update-req/:id" element={<UpdateRequestAdmin/>}/>
        <Route path="/update-comment/:id" element={<UpdateCommentAdmin/>}/>
        <Route path="/dashboard/cleaning_request" element={<CleaningRequestForm />} />
        <Route path="/request-success" element={<RequestSuccessPage />} />
        <Route path="/update-comment-user/:id" element={<UpdateCommentUser/>}/>
        <Route element={<OnlyAdminPrivateRoute/>}>
           <Route path="/addproduct" element={<AddProducts/>}/>
           <Route path="/addroom" element={<AddRoom/>}/>
        </Route>

        <Route path="/roomsummary" element={<RoomIncomeMonthlySummary/>}/>
        <Route path="/ordermonthlysummary" element={<OrderIncomeMonthlySummary/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/update-ticket/:id" element={<UpdateTicket/>}/>
        <Route path="/my_tickets" element={<DashMyTickets/>}/>
        <Route path="/announcement-form" element={<AnnouncementForm/>}/>
        <Route path="/update-announcement/:id" element={<UpdateAnnouncement/>}/>
        <Route path="/posted-announcements" element={<PostedAnnouncements/>}/>
        <Route path="/become-supplier" element={<SupplierForm/>}/>
        <Route path="/seller-form-success" element={<SellerFormSuccess/>}/>
        <Route path="/suppliers" element={<ApprovedSuppliers/>}/>
        <Route path="/pending-suppliers" element={<DashSupplierRegistration/>}/>
        <Route path="/update-pending-supplier/:id" element={<UpdateSellerRequest/>}/>

        <Route path="/foodhome" element={<FoodHome />} />
        <Route path="/breakfirstmenu" element={<BreakfastMenu/>}/>
        <Route path="/dinnermenu" element={<DinnerMenu/>}/>
        <Route path="/pickup" element={<Pickup/>}/>
        <Route path="/selectedfoods" element={<SelectedFoods/>}/>
        <Route path="/lunchmenu" element={<LunchMenu/>}/>
        <Route path="/beveragemenu" element={<BeverageMenu/>}/>
        <Route path="/foodadminlogin" element={<LoginPage/>}/>
        
          <Route path='adminlayout' element={<AdminLayout />}>
            <Route index element={<FoodAdminDashboard/>}/>
            {/* <Route path="adminprofile" element={<AdminProfile/>}/> */}
            <Route path="foodadd" element={<FoodAdd/>}/>
            <Route path="productlist" element={<ProductList/>}/>
            <Route path="editproduct/:productId" element={<EditProduct/>}/>
            <Route path="foodorderhistory" element={<FoodOrderHistory/>}/>
          </Route>

          
        <Route path="/staff" element={<Staff />} /> {/* New Route */}
        {/* Add other routes as needed */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
