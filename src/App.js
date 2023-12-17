// import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ArticlePage from './ArticlePage';
import Header from './Header';
import Footer from './Footer';
import Package from './Package';

const Layout = () => {
  return (
    <>
    <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
            element:<Layout />,
            children:[
              {
                index:true,
                element: <Home />
              },
              {
                path:"/ArticlePage",
                element: <ArticlePage />
              },
              {
                path:"/Package",
                element: <Package />
              }
            ]
    }
  ])
  return (
      <div className="overflow-x-hidden">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
