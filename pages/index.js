import Head from 'next/head'
import Avatar from './components';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* Header p for padding, w for width*/}
    <header className=
      "flex w-full p-5 justify-between gray-700 text-sm">
      
      {/* Left */}
      <div className="flex space-x-4 items-center">
        <p  className="link"> About</p>
        <p className="link"> Store</p>
      </div>
      
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        {/* Icon */}
        <Avatar url="s3://candidateprofile/profile-images/My personal Image.png-1625863926079.png"></Avatar>
      </div>
    </header>
    {/* Body */}
    
    {/* Footer */}
    
    </div>
    
  )
}
