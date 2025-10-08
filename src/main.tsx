import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Index.css";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Advice from "./pages/Advice";
import PersonalAccount from "./pages/PersonalAccount";
import {Profile} from "./pages/Profile";
import {Achievements} from "./pages/Achievements";
import {Questionnaire} from "./pages/Questionnaire";
import {Match} from "./pages/Match";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {ToastContainer} from 'react-toastify';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/about", element: <About /> },
  { path: "/advice", element: <Advice /> },
  { path: "/PersonalAccount", element: <PersonalAccount /> },
  { path: "/Profile", element: <Profile /> },
  { path: "/Achievements", element: <Achievements /> },
  { path: "/Questionnaire", element: <Questionnaire /> },
  { path: "/Match", element: <Match /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
       <ReactQueryDevtools initialIsOpen={false} />
       <ToastContainer/>
    </QueryClientProvider>
  </StrictMode>
);
