import "./App.css";
import { Layout } from "antd";
import HeaderLayout from "./Components/Header";
import MainContent from "./Components/MainContent";
import FooterLayout from "./Components/FooterLayout";
import QrContextProvider from "./Context/qrContextProvider";
import ErrorBoundary from "./Components/ErrorBoundary";
// import Pricing from './Components/Pricing'
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const Pricing = lazy(()=>{return import('./Components/Pricing')})
const { Header, Content, Footer } = Layout;

const AppLayout = () => {
  return (
    <QrContextProvider>
      <Layout className="bg-white">
        <Header className="app-header">
          <HeaderLayout />
        </Header>
        <Content className="bg-white">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Content>
        <Footer>
          <FooterLayout />
        </Footer>
      </Layout>
    </QrContextProvider>
  );
};

const routers = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/pricing",
        element: <Suspense fallback={<p>It is loading.....</p>}><Pricing /></Suspense>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
