import React from 'react';
import { Link } from 'react-router-dom';

const AnalyticSidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-semibold">Room8s</div>
            <nav className="mt-4 flex-1">
                <ul>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/tenant-database">Tenant Database</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/user-analytics">User Analytics</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/product-metrics">Product Metrics</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/support-tickets">Support Tickets</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li className="p-4 hover:bg-gray-700">
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AnalyticSidebar;
