export async function signupStudent(data: {
  fullName: string;
  email: string;
  phoneno: string;
  password: string;
  confirmPassword: string;
  fieldOfInterest: string;
}) {
  try {
    const modifiedData = {
      full_name: data.fullName,
      email: data.email,
      phone_number: data.phoneno,
      password: data.password,
      confirm_password: data.confirmPassword,
      field_of_interest: data.fieldOfInterest,
    };

    const response = await fetch(
      "https://tuition2-crra.onrender.com/student/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(modifiedData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      return { error: result };
    }

    // console.log(result);

    return { success: "Success" };
  } catch (error) {
    return {
      error: error.errors || "An unknown error occurred",
    };
  }
}

export async function loginStudent(data: { email: string; password: string }) {
  try {
    const modifiedData = {
      username: data.email,
      password: data.password,
    };

    // Converting the data to x-www-form-urlencoded format
    const urlEncodedData = new URLSearchParams(modifiedData);

    // https://tuition2-6.onrender.com

    const response = await fetch(
      "https://tuition2-crra.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData.toString(),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      return { error: result };
    }

    // console.log(result);
    return { success: result };
  } catch (error) {
    return {
      error: error.errors || "An unknown error occurred",
    };
  }
}
