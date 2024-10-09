import Image from "next/image";

const Footer = () => {
  return (
    <footer className='flex flex-col gap-8 pt-40 pb-20 bg-primaryBlue'>
      <Image
        src='/images/whitelogo3.svg'
        alt='Pay tuition icon'
        width={144}
        height={48}
        className='mx-auto'
      />
      <ul className='flex-1 flex justify-center space-x-6 text-white'>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact Us</li>
      </ul>

      <p className='text-center text-white'>
        &copy; 2024 Tuition. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
