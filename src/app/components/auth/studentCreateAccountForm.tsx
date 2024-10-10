"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiEye, HiEyeOff } from "react-icons/hi";
import * as z from "zod";
import { SignupSchema } from "../../../../validation";
import { signupStudent } from "../../../../serveractions/auth";
import { toast } from "react-toastify";

const StudentCreateAccountForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   router.push("/login");
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneno: "",
      terms: false,
      password: "",
      confirmPassword: "",
      fieldOfInterest: "",
    },
  });

  const submitForm = (values: z.infer<typeof SignupSchema>) => {
    startTransition(async () => {
      const { error, success } = await signupStudent({
        fullName: values.fullName,
        email: values.email,
        phoneno: values.phoneno,
        password: values.password,
        confirmPassword: values.confirmPassword,
        fieldOfInterest: values.fieldOfInterest,
      });

      if (error) {
        console.log("error", error);
        if (error.detail === "Email already exists") {
          setError("Email already exists");
        }
        // setApiError(messages);
      } else if (success === "Success") {
        toast.success("Successful signup");
        router.push("/confirm-email");
        // console.log("Suuccess sign up");
        // console.log("result", result);
      } else {
        alert("Something went wrong.");
      }
    });
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center  pt-14 '>
        <div className='bg-blueGradient flex justify-center items-center text-white py-1 px-1 rounded-xl'>
          <div className='flex'>
            <p className='bg-white text-blueGradient rounded-xl px-4 py-2'>
              Students
            </p>
            <p className='px-4 py-2'>Institutions</p>
          </div>
        </div>

        <h2 className='font-millik text-3xl mt-16'>
          Welcome to <span className='text-orangeColor'>Tuition</span>
        </h2>

        <div className='flex flex-col justify-center items-center m-16 '>
          <form
            {...form}
            onSubmit={form.handleSubmit(submitForm)}
            className='w-full space-y-4 '
          >
            <h5 className='text-2xl'>
              Enter your personal information to continue
            </h5>

            <div className='mb-4 '>
              <label
                htmlFor='fullName'
                className='text-sm text-greyColor3 font-medium '
              >
                Full name
              </label>
              <input
                {...form.register("fullName")}
                type='text'
                id='fullName'
                name='fullName'
                className='mt-1 w-full py-4 px-3 border border-[#776D70] rounded-lg'
                placeholder='Richard Quest'
                disabled={isPending}
              />
              {form.formState.errors.fullName && (
                <p className='text-red-600 flex justify-end'>
                  {form.formState.errors.fullName.message}
                </p>
              )}
            </div>

            <div className='mb-4 '>
              <label
                htmlFor='email'
                className='text-sm text-greyColor3 font-medium '
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
              {error && (
                <p className='text-red-600 flex justify-end'>{error}</p>
              )}
            </div>
            <div className='mb-4 '>
              <label
                htmlFor='phoneno'
                className='text-sm text-greyColor3 font-medium '
              >
                Phone number
              </label>
              <input
                {...form.register("phoneno")}
                type='text'
                id='phoneno'
                name='phoneno'
                className='mt-1 w-full py-4 px-3 border border-[#776D70] rounded-lg'
                placeholder='+2349038476235'
                disabled={isPending}
              />
              {form.formState.errors.phoneno && (
                <p className='text-red-600 flex justify-end'>
                  {form.formState.errors.phoneno.message}
                </p>
              )}
            </div>

            <div className='mb-4 relative'>
              <label
                htmlFor='password'
                className='text-sm text-greyColor3 font-medium '
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
                className='absolute inset-y-0 right-0 top-6 px-3  text-gray-600 '
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
              {form.formState.errors.password && (
                <p className='text-red-600 flex justify-end'>
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <div className='mb-4 relative'>
              <label
                htmlFor='confirmPassword'
                className='text-sm text-greyColor3 font-medium '
              >
                Confirm password
              </label>
              <input
                {...form.register("confirmPassword")}
                type={showPassword ? "text" : "password"}
                id='confirmPassword'
                name='confirmPassword'
                className='mt-1 w-full py-4 px-3 border border-[#776D70] rounded-lg'
                placeholder='••••••••'
                disabled={isPending}
              />

              <button
                type='button'
                onClick={togglePasswordVisibility}
                className='absolute inset-y-0 right-0 top-6 px-3  text-gray-600 '
              >
                {showPassword ? <HiEyeOff /> : <HiEye />}
              </button>
              {form.formState.errors.confirmPassword && (
                <p className='text-red-600 flex justify-end'>
                  {form.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className='mb-4 '>
              <label
                htmlFor='fieldOfInterest'
                className='text-sm text-greyColor3 font-medium '
              >
                Field of interest
              </label>
              <input
                {...form.register("fieldOfInterest")}
                type='text'
                id='fieldOfInterest'
                name='fieldOfInterest'
                className='mt-1 w-full py-4 px-3 border border-[#776D70] rounded-lg'
                placeholder='eg. ENGINEERING MEDICINE DESIGN'
                disabled={isPending}
              />
              {form.formState.errors.fieldOfInterest && (
                <p className='text-red-600 flex justify-end'>
                  {form.formState.errors.fieldOfInterest.message}
                </p>
              )}
              {error && (
                <p className='text-red-600 flex justify-end'>{error}</p>
              )}
            </div>

            <div className=' text-sm  '>
              <div className='flex space-x-2'>
                <input
                  type='checkbox'
                  name='terms'
                  id='terms'
                  {...form.register("terms")}
                />

                <p className='leading-5 text-greyColor3'>
                  By creating an account, I am confirmingI accept the{" "}
                  <Link href='/' className='text-primaryBlue'>
                    Terms of service{" "}
                  </Link>
                  and{" "}
                  <Link href='/' className='text-primaryBlue'>
                    {" "}
                    Privacy policy.
                  </Link>
                </p>
              </div>
              {form.formState.errors.terms && (
                <p className=' text-red-600 '>
                  {form.formState.errors.terms.message}
                </p>
              )}
            </div>

            <div className='w-full flex lg:flex-row justify-between items-center pt-8'>
              <button
                type='submit'
                className='bg-primaryBlue  text-white rounded-lg py-4 px-12'
                disabled={isPending}
              >
                {isPending ? "Loading" : "Sign Up"}
              </button>

              <Link href='/signup'>
                <button>
                  Don&apos;t have an Account?{" "}
                  <span className='text-primaryBlue font-bold'>Sign Up</span>
                </button>
              </Link>
            </div>
          </form>
          <p className='mt-8 text-textColor'>
            Tuition is powered by Swap, a product of Flutterwave Technology
            Solutions Limited - Licensed by the Central Bank of Nigeria in
            partnership with Kadavra BDC and Wema Bank
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentCreateAccountForm;
