'use client';
import { useState } from "react";
import SideNav from "../SideNav"; // Import SideNav component

const Dashboard = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };


  return (
    <div style={styles.container}>
      {/* SideNav component */}
      <SideNav isOpen={isSidebarOpen} />
      {/* Main content area */}
      <div
        style={{
          ...styles.mainContent,
          marginLeft: isSidebarOpen ? "250px" : "0",
        }}
      >
        <button onClick={toggleSidebar} style={styles.toggleButton}>
          Toggle Sidebar
        </button>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main content of the Dashboard page.</p>
        <main>{children}</main>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    transition: "margin-left 0.3s",
  },
  toggleButton: {
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Dashboard;
