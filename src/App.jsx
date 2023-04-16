import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Slider from "./components/Slider";
import Category from "./components/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Category />} />
      <Route path=":URL__Params__Category" element={<Slider />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App h-screen bg-slate-300">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
