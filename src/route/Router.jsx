import HomePage from "../pages/home-page/HomePage";
import LetsMeet from "../pages/lets-meet/LetsMeet";
import WorkinOn from "../pages/workin-on/WorkinOn";

export const RouterList = [
  { path: "/", element: <HomePage /> },
  { path: "/lets-meet", element: <LetsMeet /> },
  { path: "/workin-on", element: <WorkinOn /> },
];
