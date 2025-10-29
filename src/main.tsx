import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Index.css";
import App from "./App";
import SignIn from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import About from "./pages/About";
import Advice from "./pages/Advice";
import PersonalAccount from "./pages/PersonalAccount";
import { Profile } from "./pages/Profile";
import { Edits } from "./pages/Edits";
import { Achievements } from "./pages/Achievements";
import { Questionnaire } from "./pages/Questionnaire";
import { Match } from "./pages/Match";
import { FormSetting } from "./pages/FormSetting";
import { Ankets } from "./pages/Ankets";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/signIn", element: <SignIn /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/about", element: <About /> },
  { path: "/advice", element: <Advice /> },
  { path: "/personalAccount", element: <PersonalAccount /> },
  { path: "/profile", element: <Profile /> },
  { path: "/edits", element: <Edits /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/questionnaire", element: <Questionnaire /> },
  { path: "/formsetting", element: <FormSetting /> },
  { path: "/ankets", element: <Ankets /> },
  { path: "/match", element: <Match /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
