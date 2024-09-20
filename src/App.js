import React from 'react';
import Header from './components/Header';
import HealthSummary from './components/HealthSummary';
import AIAlerts from './components/AIAlerts';
import DiseasePredictor from './components/DiseasePredictor';
import HealthAssistant from './components/HealthAssistant';
import Insights from './components/Insights';
import DoctorRecommendations from './components/DoctorRecommendations';
import HealthReports from './components/HealthReports';
import HealthReportDetails from './components/HealthReportDetails';
import BlogSection from './components/BlogSection';

function App() {
  return (
    <div className="container">
      <Header />
      <HealthSummary />
      <AIAlerts />
      <DiseasePredictor />
      <HealthAssistant />
      <Insights />
      <DoctorRecommendations />
      <HealthReports />
      <HealthReportDetails />
      <BlogSection />
    </div>
  );
}

export default App;
