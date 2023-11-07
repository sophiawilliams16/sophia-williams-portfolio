import ReactDOM from 'react-dom/client'
import './index.css'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Portfolio from './pages/Portfolio';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'portfolio',
        element: <Portfolio/>,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

