import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ArticlePage from './ArticlePage';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
    <Header />
      {/* <Home /> */}
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
