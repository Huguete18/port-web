"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-4'>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>Vue</li>
                <li>React</li>
                <li>Cybersecurity</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-4'>
                <li>CEPI-BASE Frontend Academy, Barcelona</li>
                <li>Higher Education in Vocational Training at Jesuïtes El Clot, Barcelona</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-4'>
                <li>Senior Technician in Java with Android, CEPI-BASE Academy</li>
                <li>Senior Technician in Web Application Development, Jesuïtes El Clot</li>
                <li>Senior Technician in Computer Systems and Network Administration, Jesuïtes El Clot</li>
                <li>Senior Technician in Applications and Development with Python, CEPI-BASE Academy</li>
            </ul>
        )
    },
    {
        title: 'Languaje',
        id: 'languaje',
        content: (
            <ul className='list-disc pl-4'>
                <li>Catalan</li>
                <li>Spanish</li>
                <li>English</li>
            </ul>
        )
    },
];

export const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/image/about-image.png' style={{ borderRadius: '10px' }} alt='' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a full stack web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                    Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                    looking to expand my knowledge and skill set. I am a team player and
                    I am excited to work with others to create amazing applications.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange('skills')} active={tab == 'skills'}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange('education')} active={tab == 'education'}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange('certifications')} active={tab == 'certifications'}>Certifications</TabButton>
                    <TabButton selectTab={() => handleTabChange('languaje')} active={tab == 'languaje'}>Languaje</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id == tab).content}</div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;