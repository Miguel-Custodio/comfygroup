
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../pages/home/page'));
const About = lazy(() => import('../pages/about/page'));
const Catalogue = lazy(() => import('../pages/catalogue/page'));
const ProductDetail = lazy(() => import('../pages/product-detail/page'));
const Book = lazy(() => import('../pages/book/page'));
const Contact = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/catalogue',
    element: <Catalogue />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: '/book',
    element: <Book />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
