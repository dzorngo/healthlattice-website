import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PatientRecordsPage from './pages/PatientRecordsPage';
import AppointmentSchedulingPage from './pages/AppointmentSchedulingPage';
import BillingPage from './pages/BillingPage';
import AnalyticsPage from './pages/AnalyticsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features/patient-records" element={<PatientRecordsPage />} />
        <Route path="/features/appointment-scheduling" element={<AppointmentSchedulingPage />} />
        <Route path="/features/billing" element={<BillingPage />} />
        <Route path="/features/analytics" element={<AnalyticsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
