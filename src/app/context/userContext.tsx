import React, { createContext, useState, useEffect } from "react";

interface UserDetails {
  email: string;
  field_of_interest: string;
  full_name: string;
  id: number;
  is_verified: boolean;
  phone_number: string;
}

export const UserContext = createContext<UserDetails | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    const storedUserDetails = localStorage.getItem("user_details");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  return (
    <UserContext.Provider value={userDetails}>{children}</UserContext.Provider>
  );
};
