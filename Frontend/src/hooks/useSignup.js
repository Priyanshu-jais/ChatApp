import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
 const {setAuthUser}=useAuthContext();
  const signup = async ({
    fullName,
    userName,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputsError({
      fullName,
      userName,
      password,
      confirmPassword,
      gender,
    });
    if (!success) {
      return;
    }
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          userName,
          password,
          confirmPassword,
          gender,
        }),
      });

      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }
      //localstorage
      localStorage.setItem("chat-user",JSON.stringify(data));
      //context
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading,signup};
};
export default useSignup;

function handleInputsError({
  fullName,
  userName,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill all fields");
    return false;
  }
  if (password != confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
