import { signOut } from "next-auth/react";

export default function Logout() {
  const handleLogout = async () => {
    console.log("CLICKED LOGOUT.");
    try {
      await signOut();
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  return (
    <button
      id="loginBtn"
      className="navButton"
      onClick={handleLogout}
      style={{ fontSize: "14px" }}
    >
      Logout
    </button>
  );
}
