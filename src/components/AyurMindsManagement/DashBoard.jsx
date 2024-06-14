import React from "react";

const DashBoard = () => {
  const userData = {
    username: "john_doe",
    email: "john.doe@example.com",
  };

  // Convert the user data to a query string
  const queryString = new URLSearchParams(userData).toString();

  return (
    <div
      style={{ marginTop: "60px" }}
      className='flex flex-col min-h-screen overflow-hidden'
    >
      <div className='w-full'>
        <iframe
          src={`https://ayurmind-dashboard.netlify.app?${queryString}`}
          title='Dashboard App'
          style={{ width: "100%", height: "100vh" }}
        ></iframe>
      </div>
    </div>
  );
};

export default DashBoard;
