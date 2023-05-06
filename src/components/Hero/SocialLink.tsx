import Image from 'next/image'
import Link from 'next/link'

interface Props {
  href: string
  src: string
  alt: string
}

export default function SocialLink({ href, src, alt }: Props) {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='p-1 bg-white rounded-md hover:bg-gray-200 ease-in-out duration-200'
      aria-label={alt}
    >
      <Image src={src} alt={alt} height={32} width={32} />
    </Link>
  )
}
