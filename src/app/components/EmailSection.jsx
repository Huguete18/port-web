import React, { useRef, useState } from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const EmailSection = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_e6es5ip', 'template_a1apvpz', form.current, '7hl6kHHAdzJULJHG9')
    .then((result) => {
        console.log(result.text);
        console.log('message send');
        setFormData({
            user_name: '',
            user_email: '',
            message: '',
        });
        setIsFormSubmitted(true);
    }, (error) => {
        console.log(error.text);
        });
  };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Le{'t\'s'} Connect</h5>
            <p className='text-[#adb7be] mb-4 max-w-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione cupiditate ducimus consectetur, at sed nihil ut saepe corporis optio voluptates sapiente sit maiores inventore quod unde eum laboriosam molestiae.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='github.com'>
                    <Image src={GithubIcon}  alt='Github Icon' />
                </Link>
                <Link href='linkedin.com'>
                    <Image src={LinkedinIcon} alt='Linkedin Icon' />
                </Link>
            </div>
        </div>
        <div>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <div className='mb-6'>
                    <label htmlFor='name' className='text-white block mb-2 text-sm font-medium'>Your first name and last name</label>
                    <input type='text' id='name' name="user_name" value={formData.user_name} onChange={handleInputChange} required className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Your full name' />
                </div>
                <div className='mb-6'>
                    <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your email</label>
                    <input type='email' id='email' name="user_email" value={formData.user_email} onChange={handleInputChange} required className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='username@gmail.com' />
                </div>
                <div className='mb-6'>
                    <label className='text-white block mb-2 text-sm font-medium'>Message</label>
                    <textarea type='text' name='message' id='subject' value={formData.message} onChange={handleInputChange} required className='bg-[#18191e] border border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Contact me...' />
                </div>
                <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
                {isFormSubmitted && (
                        <p className='text-green-500 mt-2'>Form submitted successfully!</p>
                    )
                }
            </form>
        </div>
    </section>
  );
};

export default EmailSection;