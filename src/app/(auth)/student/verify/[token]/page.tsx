"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyAccount = () => {
  const { token } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      const verifyAccount = async (verificationToken: string) => {
        try {
          const response = await fetch(
            `https://tuition2-6.onrender.com/student/verify/${verificationToken}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();

          if (response.ok) {
            // localStorage.setItem("access_token", data.access_token);

            router.push("/login");
          } else {
            setError(data.message || "Verification failed.");
            setTimeout(() => {
              router.push("/signup");
            }, 3000);
          }
        } catch (err) {
          setError("An error occurred. Please try again.");
          setTimeout(() => {
            router.push("/signup");
          }, 3000);
        } finally {
          setLoading(false);
        }
      };

      verifyAccount(Array.isArray(token) ? token[0] : token);
    }
  }, [token, router]);

  return (
    <div>
      {loading && <p>Verifying your account, please wait...</p>}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
};

export default VerifyAccount;
