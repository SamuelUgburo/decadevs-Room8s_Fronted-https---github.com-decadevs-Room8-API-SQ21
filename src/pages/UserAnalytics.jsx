// src/pages/UserAnalytics.jsx
import React from 'react';
import VisitingCustomers from '../components/VisitingCustomers';
import AverageUsageTime from '../components/AverageUsageTime';
import UserDemographicSex from '../components/UserDemographicSex';
import UserDemographicAge from '../components/UserDemographicAge';
import UserLocationHeatmap from '../components/UserLocationHeatmap';

const UserAnalytics = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">User Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <VisitingCustomers />
        <AverageUsageTime />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <UserDemographicSex />
        <UserDemographicAge />
      </div>
      <UserLocationHeatmap />
    </div>
  );
};

export default UserAnalytics;
