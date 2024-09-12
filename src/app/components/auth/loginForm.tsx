"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiEye, HiEyeOff } from "react-icons/hi";
import * as z from "zod";
import { LoginSchema } from "../../../../validation"; // Use the correct schema
import { loginStudent } from "../../../../serveractions/auth"; // Correct function
import { toast } from "react-toastify";

const LoginForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Correct schema being used in resolver
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitForm = (values: z.infer<typeof LoginSchema>) => {
    // Example async transition logic
    setError("");
    startTransition(async () => {
      // alert("login function started");
      console.log("hi");

      const { error, success } = await loginStudent({
        email: values.email,
        password: values.password,
      });

      if (error) {
        console.log("Error:", error);
        setError(error.detail);
      } else if (success) {
        localStorage.setItem("access_token", success.access_token);
        localStorage.setItem("user_details", JSON.stringify(success.student));
        toast.success("Success login");
        router.push("/home");
      } else {
        alert("Something went wrong.");
      }
    });
  };

  return (
    <div className='flex flex-col items-center justify-center pt-8 h-full'>
      <h2 className='font-millik text-3xl mt-16'>
        Welcome to <span className='text-greenColor'>Tuition</span>
      </h2>

      <div className='flex flex-col justify-center items-center m-8 w-full px-20'>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className='w-full space-y-4'
        >
          <h5 className='text-2xl'>Enter your login details to proceed</h5>

          <div className='mb-4'>
            <label
              htmlFor='email'
              className='text-sm text-greyColor3 font-medium'
            >
              Email address
            </label>
            <input
              {...form.register("email")}
              type='email'
              id='email'
              name='email'
              className='mt-1 w-full py-4 px-3 border border-[#776D70] rounded-lg'
              placeholder='richardquest@gmail.com'
              disabled={isPending}
            />
            {form.formState.errors.email && (
              <p className='text-red-600 flex justify-end'>
                {form.formState.errors.email.message}
              </p>
            )}
            <p className='text-red-600 flex justify-end'>
              {error === "Invalid credentials"
                ? "Email doesn't exit, Sgin Up!"
                : " "}
            </p>
          </div>

          <div className='mb-4 relative'>
            <label
              htmlFor='password'
              className='text-sm text-greyColor3 font-medium'
            >
              Password
            </label>
            <input
              {...form.register("password")}
              type={showPassword ? "text" : "password"}
              id='password'
              name='password'
              className='mt-1 w-full py-4 px-3 border border-[#776D70] rounded-lg'
              placeholder='••••••••'
              disabled={isPending}
            />

            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute inset-y-0 right-0 top-6 px-3 text-gray-600'
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
            {form.formState.errors.password && (
              <p className='text-red-600 flex justify-end'>
                {form.formState.errors.password.message}
              </p>
            )}
            <p className='text-red-600 flex justify-end'>
              {error === "Incorrect password" ? error : " "}
            </p>
          </div>
          <p className='text-red-600 flex justify-end'>
            {error === "Account not verified, check email for verification link"
              ? error
              : " "}
          </p>

          <div className='w-full flex justify-between items-center pt-8'>
            <button
              type='submit'
              className='bg-primaryBlue text-white rounded-lg py-4 px-12'
              disabled={isPending}
            >
              {isPending ? "Signing in" : "Sign In"}
            </button>
            <Link href='/signup'>
              <button type='button'>
                Don&apos;t have an Account?{" "}
                <span className='text-primaryBlue font-bold'>Sign Up</span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
