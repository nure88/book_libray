import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "../pages/home/Home";
import AllBooks from "../pages/allBooks/AllBooks";
import AddBook from "../pages/addBook/AddBook";
import MyBooks from "../pages/myBooks/MyBooks";
import Register from "../auth/register/Register";
import Login from "../auth/login/Login";
import BookDetails from "../pages/allBooks/bookDetails/BookDetails";
import UpDateBook from "../pages/allBooks/upDateBook/UpDateBook";
import ProvateRoute from "../pages/privateRoute/ProvateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <ProvateRoute>
            <AllBooks />
        </ProvateRoute>,
       
      },
      {
        path: "/books/:id",
        element: <ProvateRoute>
            <BookDetails />
        </ProvateRoute>,
       
      },
      {
        path: "/update-book/:id",
        element: <ProvateRoute>
            <UpDateBook />
        </ProvateRoute>,
      },
      {
        path: "/add-book",
        element: <ProvateRoute>
            <AddBook />
        </ProvateRoute>,
      },
      {
        path: "/my-books",
        element: <ProvateRoute>
            <MyBooks />
        </ProvateRoute>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Router;
