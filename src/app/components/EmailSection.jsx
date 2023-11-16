import React from 'react';
import GithubIcon from '../../../public/github-icon.svg';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Le{'t\'s'} Connect</h5>
            <p className='text-[#adb7be] mb-4 max-w-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione cupiditate ducimus consectetur, at sed nihil ut saepe corporis optio voluptates sapiente sit maiores inventore quod unde eum laboriosam molestiae.
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href='github.com'>
                    <Image src={GithubIcon} alt='Github Icon' />
                </Link>
                <Link href='linkedin.com'>
                    <Image src={LinkedinIcon} alt='Linkedin Icon' />
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-4'>
                <label htmlFor='email' className='text-white'>Your email</label>
                <input type='email' id='email' required placeholder='email@gmail.com' />
            </form>
        </div>
    </section>
  )
}

export default EmailSection

//** 01:30:20 */