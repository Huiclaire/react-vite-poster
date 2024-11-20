import MainHeader from "../components/MainHeader";
import { Outlet } from 'react-router-dom';
// <Outlet /> component should be rendered where the nested route content rendered


function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
