import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/logo.webp'

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImg} width={200} height={58} priority alt="stonefort securities" />
    </Link>
  )
}