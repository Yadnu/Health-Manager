import Image from 'next/image';
import React from 'react'

type Props = {}

const Register = (props: Props) => {
  return (
    <div className='flex h-screen max-h-screen'>
        <section className='remove-scrollbar container'>
            <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                <Image 
                src="/assets/icons/logo-full.svg"
                alt='healer'
                height={1000}
                width={1000}
                className='mb-12 h-10 w-fit'
                />
            </div>
        </section>
    </div>
  )
}

export default Register;