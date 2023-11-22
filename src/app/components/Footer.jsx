import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='container p-12 flex justify-between'>
            <span>
              <Image src='/image/SHV.png' style={{ borderRadius: '10px' }} alt='' width={100} height={100} />
            </span>
            <p className='text-slate-600'>All right reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;