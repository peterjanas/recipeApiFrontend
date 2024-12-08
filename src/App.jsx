import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";
import ApiVision from './pages/ApiVision';
import EndPoints from './pages/EndPoints';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home';
import './App.css'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/apivision' element={<ApiVision />} />
        <Route path='/endpoints' element={<EndPoints />} />
         </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
