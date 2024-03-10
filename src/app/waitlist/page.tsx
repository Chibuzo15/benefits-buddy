"use client"

import React from 'react';
import { useFormik, Field, FormikProvider } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  reason: Yup.string().required('Field is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

export default function WaitList() {
  // console.log('FormikProvider ', FormikProvider)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      reason: ''
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here (e.g., send data to server)
      console.log(values);
      alert('submitted')
    },
  });

  return (
    <main className="flex flex-col items-center pt-[80px] mx-[20px]">

      <FormikProvider
        value={formik}
      >
        <div className='md:w-[65%] max-w-[600px] '>
          <div className="font-[700] mb-[24px]">
            Waitlist
          </div>
          <div className='flex w-full space-x-[8px] items-center'>
            <div className="w-full">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="block w-full px-3 py-2 rounded-[12px] border border-[2px] border-[#00000014]"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-xs">{formik.errors.name}</div>
              ) : <div className='h-4'></div>}
            </div>
            <div className="w-full">
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="block w-full px-3 py-2 rounded-[12px] border border-[2px] border-[#00000014]"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-xs">{formik.errors.email}</div>
              ) : <div className='h-4'></div>}
            </div>
          </div>
          <div className="mt-[0px]">
            <Field
              name="reason"
              component="textarea"
              placeholder="Why I'm excited to use Benefit's Buddy"
              className="block w-full px-3 py-2 rounded-[12px] border border-[2px] border-[#00000014] h-[250px]"
            />
            {formik.touched.reason && formik.errors.reason ? (
              <div className="text-red-500 text-xs">{formik.errors.reason}</div>
            ) : null}
          </div>
          <div className='w-full flex justify-center'>
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="inline-flex text-black items-center bg-[#efefef] rounded-[30px] px-[30px] h-[43px] mt-[32px] mb-[18px]"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </FormikProvider>
    </main>
  );
}
