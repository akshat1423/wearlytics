import React from 'react';
import { FaSearch, FaUserMd, FaUsers } from 'react-icons/fa';

const HealthReports = () => (
    <div className="card">
        <h2>
            <FaSearch /> Health Reports
        </h2>
        <input type="text" placeholder="Search reports" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
        <button>
            <FaSearch /> Search
        </button>
        <button>
            <FaUserMd /> Share with Doctor
        </button>
        <button>
            <FaUsers /> Share with Family
        </button>
    </div>
);

export default HealthReports;
