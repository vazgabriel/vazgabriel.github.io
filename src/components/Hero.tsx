import Image from 'next/image'
import Link from 'next/link'

import SocialLink from '@/components/Hero/SocialLink'

import gabrielPhoto from '../../public/gabriel.webp'

export default function Hero() {
  return (
    <section className='flex flex-col md:flex-row gap-8 lg:gap-12 min-h-screen items-center justify-center md:justify-between p-8 md:p-24'>
      <div className='w-full md:w-96 lg:w-8/12'>
        <Image
          src={gabrielPhoto}
          alt='Gabriel Vaz photo'
          className='rounded-full'
          sizes='(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw'
          priority
          fill={false}
          placeholder='blur'
        />
      </div>
      <div className='flex flex-col gap-3 bg-gray-900 rounded-md shadow-lg p-6 md:px-8'>
        <h1 className='text-4xl'>Gabriel Vaz</h1>
        <p className='text-lg'>
          Hi there, I have been working as a software engineer since 2017. I am
          currently working as a Senior Software Engineer at{' '}
          <Link
            href='https://wandb.ai/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            Weights & Biases
          </Link>
          .
        </p>
        <div className='flex justify-end gap-2'>
          <SocialLink
            href='https://www.linkedin.com/in/gabrielcvaz'
            src='/linkedin.svg'
            alt="Gabriel's linkedin link"
          />
          <SocialLink
            href='https://github.com/vazgabriel'
            src='/github.svg'
            alt="Gabriel's github link"
          />
        </div>
      </div>
    </section>
  )
}
