'use client';

import { useState } from 'react';
import classNames from 'classnames';
import CloudflareTurnstile from './CloudflareTurnstile';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const staticFormsApiKey = 'sf_fd3a093392e40674f030ba34';

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('apiKey', staticFormsApiKey);
    console.log(formData, form)
    try {
      const response = await fetch('https://api.staticforms.dev/submit', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setMessage('Thank you for your enquiry. We\'ll be in touch.');
        form.reset();

        // Record Data Layer event for successful form submission
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: 'contact_form_submitted'
          })
        }
      } else {
        setStatus('error');
        setMessage(result.message || 'Sorry, there was an error. Please try again or send us an email.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Sorry, there was an error. Please try again or send us an email.');
    }
  }

  return (
    <>
      {status === 'success' ? (
        <>
          <h2 className='text-2xl lg:text-3xl leading-[1.4] font-bold text-navy mb-4'>Thank you</h2>
          <p className='lg:text-lg'>We've got your enquiry and will be in touch soon.</p>
        </>
      ) : (
        <>
          <h2 className='text-2xl lg:text-3xl leading-[1.4] font-bold text-navy mb-4'>Enquiry form</h2>
          <form onSubmit={handleSubmit}>
            <div className='grid gap-4 xl:grid-cols-2'>
              <div className='grid gap-1'>
                <label htmlFor='name' className='font-semibold'>Your full name*</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  minLength='2'
                  maxLength='100'
                  disabled={status === 'loading'}
                  className='w-full px-3 py-2 border border-steel rounded-lg bg-white'
                />
              </div>

              <div className='grid gap-1'>
                <label htmlFor='company_name' className='font-semibold'>Company name</label>
                <input
                  type='text'
                  id='name'
                  name='company_name'
                  minLength='2'
                  maxLength='100'
                  disabled={status === 'loading'}
                  className='w-full px-3 py-2 border border-steel rounded-lg bg-white'
                />
              </div>

              <div className='grid gap-1'>
                <label htmlFor='email' className='font-semibold'>Email address*</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  required
                  disabled={status === 'loading'}
                  className='w-full px-3 py-2 border border-steel rounded-lg bg-white'
                />
              </div>

              <div className='grid gap-1'>
                <label htmlFor='phone' className='font-semibold'>Phone number</label>
                <input
                  type='tel'
                  id='phone'
                  maxLength='100'
                  disabled={status === 'loading'}
                  className='w-full px-3 py-2 border border-steel rounded-lg bg-white'
                />
              </div>

              <div className='grid gap-1 xl:col-span-2'>
                <label htmlFor='message' className='font-semibold'>Enquiry*</label>
                <textarea
                  id='message'
                  name='message'
                  required
                  disabled={status === 'loading'}
                  rows={5}
                  maxLength='2000'
                  className='w-full px-3 py-2 border border-steel rounded-lg bg-white'
                  placeholder="Describe your project or the TDW services you're interested in."
                />
              </div>

              <div className='xl:col-span-2 overflow-hidden'>
                <CloudflareTurnstile />
              </div>

              <button
                type='submit'
                disabled={status === 'loading'}
                className='xl:col-span-2 cursor-pointer text-center rounded-full font-semibold hover:[&_span]:translate-x-[0.5em] focus:[&_span]:translate-x-[0.5em] whitespace-nowrap hover:no-underline px-7 py-3 text-base bg-mint text-navy disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Send enquiry <span className='inline-block ml-2 transition-transform duration-300'>&rarr;</span>
              </button>

              {message && (
                <div className={classNames('p-4 rounded-lg xl:col-span-2', status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800')}>
                  {message}
                </div>
              )}
            </div>

            <input 
              type='hidden'
              name='subject'
              value='[TDW ENQUIRY] New website enquiry'
            />
            <input 
              type='text' 
              name='honeypot' 
              className='hidden' 
              tabIndex='-1' 
              autoComplete='off' 
            />
          </form>
        </>
      )}
    </>
  );
}