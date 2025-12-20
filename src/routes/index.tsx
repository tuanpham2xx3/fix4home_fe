import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";

// Pages
import Home from "@/pages/User/Home";
import ElectricWaterService from "@/pages/User/ElectricWaterService";
import ConstructionService from "@/pages/User/ConstructionService";
import MechanicService from "@/pages/User/MechanicService";
import ElectricCoolingService from "@/pages/User/ElectricCoolingService";
import ElectricApplianceService from "@/pages/User/ElectricApplianceService";
import WoodService from "@/pages/User/WoodService";
import CleaningService from "@/pages/User/CleaningService";
import MovingService from "@/pages/User/MovingService";
import DrainCleaningService from "@/pages/User/DrainCleaningService";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Trang chủ */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      {/* Trang dịch vụ */}
      <Route
        path="/xaydung"
        element={
          <MainLayout>
            <ConstructionService />
          </MainLayout>
        }
      />
       <Route
        path="/cokhi"
        element={
          <MainLayout>
            <MechanicService />
          </MainLayout>
        }
      />
      <Route
        path="/diennuoc"
        element={
          <MainLayout>
            <ElectricWaterService />
          </MainLayout>
        }
      />
      <Route
        path="/dienlanh"
        element={
          <MainLayout>
            <ElectricCoolingService />
          </MainLayout>
        }
      />
      <Route
        path="/dienmay"
        element={
          <MainLayout>
            <ElectricApplianceService />
          </MainLayout>
        }
      />
      <Route
        path="/dogo"
        element={
          <MainLayout>
            <WoodService />
          </MainLayout>
        }
      />
      <Route
        path="/vesinh"
        element={
          <MainLayout>
            <CleaningService />
          </MainLayout>
        }
      />
       <Route
        path="/chuyen-nha"
        element={
          <MainLayout>
            <MovingService />
          </MainLayout>
        }
      />
      <Route
        path="/thong-nghet"
        element={
          <MainLayout>
            <DrainCleaningService />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
