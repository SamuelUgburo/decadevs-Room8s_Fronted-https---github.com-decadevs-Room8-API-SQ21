import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import AdminNav from '../components/AdminNav.jsx';

const AdminLayout = () => {
  const location = useLocation();
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineOffset, setUnderlineOffset] = useState(0);

  const navRefs = {
    '/admin/dashboard': useRef(null),
    '/admin/tenant-database': useRef(null),
    '/admin/user-analytics': useRef(null),
    '/admin/product-metrics': useRef(null),
    '/admin/support-tickets': useRef(null),
    '/admin/settings': useRef(null),
    '/logout': useRef(null),
  };

  useEffect(() => {
    const activeRef = navRefs[location.pathname];
    if (activeRef && activeRef.current) {
      const { offsetWidth, offsetLeft } = activeRef.current;
      setUnderlineWidth(offsetWidth);
      setUnderlineOffset(offsetLeft);
    }
  }, [location.pathname]);

  const navItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_499_861)">
            <path
              d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"
              fill="#131A29"
              stroke="grey"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_499_861">
              <rect width="24" height="24" fill="#0f0f0f" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Tenant Database',
      path: '/admin/tenant-database',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_499_864)">
            <path
              d="M13 2.05005V5.08005C16.39 5.57005 19 8.47005 19 12C19 12.9 18.82 13.75 18.52 14.54L21.12 16.07C21.68 14.83 22 13.45 22 12C22 6.82005 18.05 2.55005 13 2.05005ZM12 19C8.13 19 5 15.87 5 12C5 8.47005 7.61 5.57005 11 5.08005V2.05005C5.94 2.55005 2 6.81005 2 12C2 17.52 6.47 22 11.99 22C15.3 22 18.23 20.39 20.05 17.91L17.45 16.38C16.17 17.98 14.21 19 12 19Z"
              fill="#131A29"
              stroke="grey"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_499_864">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'User Analytics',
      path: '/admin/user-analytics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
            fill="#131A29"
            fillOpacity="0.5"
          />
          <path d="M9 12H7V17H9V12Z" fill="#131A29" fillOpacity="0.5" />
          <path d="M17 7H15V17H17V7Z" fill="#131A29" fillOpacity="0.5" />
          <path d="M13 14H11V17H13V14Z" fill="#131A29" fillOpacity="0.5" />
          <path d="M13 10H11V12H13V10Z" fill="#131A29" fillOpacity="0.5" />
        </svg>
      ),
    },
    {
      name: 'Product Metrics',
      path: '/admin/product-metrics',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 14H9.01M6 14H6.01M13.1458 10.5H6.2C5.0799 10.5 4.51984 10.5 4.09202 10.718C3.71569 10.9097 3.40973 11.2157 3.21799 11.592C3 12.0198 3 12.5799 3 13.7V14.3C3 15.4201 3 15.9802 3.21799 16.408C3.40973 16.7843 3.71569 17.0903 4.09202 17.282C4.51984 17.5 5.0799 17.5 6.2 17.5H14.4364M5 17.4808V21M18 17.7439V21M16.5 3V5M21 5L20 6M12 5L13 6M21 13.5C21 15.9853 18.9853 18 16.5 18C14.0147 18 12 15.9853 12 13.5C12 11.0147 14.0147 9 16.5 9C18.9853 9 21 11.0147 21 13.5Z"
            stroke="#131A29"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: 'Support Tickets',
      path: '/admin/support-tickets',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <g clipPath="url(#clip0_499_873)">
            <path
              d="M21 12.22C21 6.73 16.74 3 12 3C7.31 3 3 6.65 3 12.28C2.4 12.62 2 13.26 2 14V16C2 17.1 2.9 18 4 18H5V11.9C5 8.03 8.13 4.9 12 4.9C15.87 4.9 19 8.03 19 11.9V19H11V21H19C20.1 21 21 20.1 21 19V17.78C21.59 17.47 22 16.86 22 16.14V13.84C22 13.14 21.59 12.53 21 12.22Z"
              fill="black"
              fillOpacity="0.5"
            />
            <path d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z" fill="#323232" fillOpacity="0.5" />
            <path d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z" fill="#323232" fillOpacity="0.5" />
          </g>
          <defs>
            <clipPath id="clip0_499_873">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.343 2.45904C12.1791 2.2758 12.8209 2.2758 13.657 2.45904L14.1314 2.5678C14.677 2.69001 15.0186 2.75401 15.3468 3.01961C15.675 3.2852 15.853 3.66204 16.2091 4.41571L16.4903 5.01514C16.797 5.64401 16.9506 5.95845 17.1683 6.2339C17.386 6.50935 17.6662 6.74439 18.2266 7.21447L18.7011 7.59673C19.407 8.16423 19.759 8.44849 19.946 8.81723C20.133 9.18597 20.133 9.59677 20.133 10.4184V10.9417C20.133 11.7633 20.133 12.1741 19.946 12.5429C19.759 12.9116 19.407 13.1958 18.7011 13.7633L18.2266 14.1456C17.6662 14.6157 17.386 14.8507 17.1683 15.1262C16.9506 15.4017 16.797 15.7161 16.4903 16.345L16.2091 16.9444C15.853 17.698 15.675 18.075 15.3468 18.3405C15.0186 18.606 14.677 18.67 14.1314 18.7922L13.657 18.901C12.8209 19.0842 12.1791 19.0842 11.343 18.901L10.8686 18.7922C10.323 18.67 9.98142 18.606 9.6532 18.3405C9.32498 18.075 9.14695 17.698 8.79089 16.9444L8.50972 16.345C8.20301 15.7161 8.04966 15.4017 7.83194 15.1262C7.61422 14.8507 7.33406 14.6157 6.77361 14.1456L6.29914 13.7633C5.59324 13.1958 5.24128 12.9116 5.05425 12.5429C4.86722 12.1741 4.86722 11.7633 4.86722 10.9417V10.4184C4.86722 9.59677 4.86722 9.18597 5.05425 8.81723C5.24128 8.44849 5.59324 8.16423 6.29914 7.59673L6.77361 7.21447C7.33406 6.74439 7.61422 6.50935 7.83194 6.2339C8.04966 5.95845 8.20301 5.64401 8.50972 5.01514L8.79089 4.41571C9.14695 3.66204 9.32498 3.2852 9.6532 3.01961C9.98142 2.75401 10.323 2.69001 10.8686 2.5678L11.343 2.45904ZM12.5 8.66667C11.1193 8.66667 10 9.78601 10 11.1667C10 12.5473 11.1193 13.6667 12.5 13.6667C13.8807 13.6667 15 12.5473 15 11.1667C15 9.78601 13.8807 8.66667 12.5 8.66667Z"
            stroke="#131A29"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: 'Logout',
      path: '/logout',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 17L21 12L16 7M21 12H9M12 16V19H5V5H12V8"
            stroke="#131A29"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex">
      <AdminNav />

      <div className="flex-1 p-8">
        <div className="relative mb-8 border-b border-gray-300">
          <nav className="flex space-x-4">
            {navItems.map(({ name, path, icon }) => (
              <NavLink
                key={path}
                to={path}
                ref={navRefs[path]}
                className={({ isActive }) =>
                  isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }
                activeClassName="text-blue-600"
              >
                <div className="flex items-center space-x-2">
                  {icon}
                  <span>{name}</span>
                </div>
              </NavLink>
            ))}
          </nav>
          <div
            className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out"
            style={{ width: underlineWidth, left: underlineOffset }}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
