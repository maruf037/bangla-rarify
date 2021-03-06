import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className='border-b p-6'>
        <p className='text-4xl font-bold'>Bangla Rarify</p>
        <div className='flex mt-4'>
          <Link href='/'>
            <a className='mr-4 text-orange-500'>
              Home
            </a>
          </Link>
          <Link href='/create-nft'>
            <a className='mr-6 text-orange-500'>
              Create/Sell NFT
            </a>
          </Link>
          <Link href='/My-NFTs'>
            <a className='mr-6 text-orange-500'>
              My NFTs
            </a>
          </Link>
          <Link href='/dashboard'>
            <a className='mr-6 text-orange-500'>
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
