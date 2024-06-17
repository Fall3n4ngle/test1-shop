import { Route, Routes } from "react-router-dom";
import { Layout } from "./shared/components";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import DevicePage from "./pages/Devices";
import MyDevicesPage from "./pages/MyDevices";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/devices" element={<DevicePage />} />
        <Route path="/devices/my" element={<MyDevicesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
