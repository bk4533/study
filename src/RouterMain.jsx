import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Hook from './components/hook'
import Todo from './components/todo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "Hooks",
    element: <Hook/>,
  },
  {
    path: "Todo",
    element: <Todo />
  }
]);

export default router;