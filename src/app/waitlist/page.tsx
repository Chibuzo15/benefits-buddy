"use client"

import React from 'react';
import { useFormik, Field, FormikProvider } from 'formik';
import * as Yup from 'yup';

import { toast } from 'react-toastify';

import { supabase } from '@/utils/supabase';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  reason: Yup.string().required('Field is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

export default function WaitList() {
  // console.log('FormikProvider ', FormikProvider)
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

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
      onSubmitToServer(values)
    },
  });

  const showToast = (message, type) => {
    if (type == 'success') {
      console.log('message ', message)
      toast.success(message || 'Submitted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    if (type == 'error') {
      toast.error(message || 'Error encountered!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const onSubmitToServer = async (values) => {
    // const data = { ...values };
    setIsSubmitting(true)

    try {
      // const { data, error } = await supabase
      //   .from('waitlist') // Replace 'waitlist' with your table name
      //   .select('*') // Optional: You can select specific columns if needed
      //   .limit(1); // Limit to 1 row to check existence


      // if (error) {
      //   console.error('Error checking table existence:', error);
      //   showToast('Error encountered initializing ', 'error')
      //   // Handle errors (e.g., notify developer or retry)
      // } else {

      // }

      // Table exists, proceed with data insertion
      const insertRes = await supabase
        .from('waitlist')
        .insert({ // Array of objects
          name: values.name,
          email: values.email, // Ensure you're using 'email' for the column
          reason: values.reason,
        })

      const { error: insertError } = insertRes

      if (insertError) {
        console.error('Error inserting data:', insertError);

        showToast(insertError?.details || insertError?.message || 'Error encountered during submission', 'error')

        // Handle insertion errors (e.g., show error message to user)
      } else {
        console.log('Data inserted successfully');
        showToast('Data submitted successfully', 'success')

        // Handle successful insertion (e.g., show success message)
      }

      setIsSubmitting(false)

    } catch (err) {
      console.error('Unexpected error:', err);
      // Handle unexpected errors

      toast.error('Error encountered!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });

      setIsSubmitting(false)
    }
  }

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
              disabled={isSubmitting ? true : false}
              className="inline-flex text-black items-center bg-[#efefef] rounded-[30px] px-[30px] h-[43px] mt-[32px] mb-[18px]"
            >
              {isSubmitting ? 'loading...' : 'Join Waitlist'}
            </button>
          </div>
        </div>
      </FormikProvider>
    </main>
  );
}
