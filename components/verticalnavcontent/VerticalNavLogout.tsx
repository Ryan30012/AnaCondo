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
      className="navButtonLogoutVertical w-full"
      onClick={handleLogout}
      style={{ fontSize: "16px" }}
    >
      <p>Logout</p>
    </button>
  );
}
