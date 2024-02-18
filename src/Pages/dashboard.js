import React from 'react';
import Header from './Components/header';
import SideNav from './Components/sideNav';
import DashboardContent from './Components/dashboardContent';

const dashboard = () => {
  return (
    <>
    <Header/>
    <SideNav/>
    <DashboardContent/>
    </>
  )
}

export default dashboard