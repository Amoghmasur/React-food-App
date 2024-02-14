import React from 'react'
import  ReactDOM  from 'react-dom/client'
import Body from './component/Body'
import Header from './component/Header'
import { createBrowserRouter ,RouterProvider,Outlet} from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Error from './component/Error'
import RestaurantMenu from './component/Restaurant'
import '../index.css';
import { lazy,Suspense } from 'react'

import { Provider } from 'react-redux'
import UserContext from './utils/UserContext'
import appstore from './utils/appstore'
import Cart from './component/Cart'



const Grocery=lazy(()=> import("./component/Grocery"))

const AppLayout=()=>{
    return(
<Provider store={appstore}>
    <UserContext.Provider>
        <div className ='app'>
            <Header />
           <Outlet />
        </div>
    </UserContext.Provider>
</Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/home',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
               path:'/grocery',
               element:<Suspense fallback={<h1>loading...</h1>}>
                <Grocery/>
                </Suspense>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ],
        errorElement:<Error/>,
    },

])




const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)
