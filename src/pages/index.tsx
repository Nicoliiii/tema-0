import Image from 'next/image'
import Button from '../components/Button'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main className='h-full bg-slate-100'>
      <section id='hero' className='bg-blue-500'>
        <div className='wrapper text-center text-slate-100'>
          <img id='hero-cloud' src="" alt="" />
          <h1>
            Hi, I'm Nicoli, another fine <br/> little freebie from <a href="TODO:">UTFPR</a>.
          </h1>
          <p className='mt-6 mb-10'>
            lorem ipsum..
          </p>
          <Button>Discover</Button>
        </div>
      </section>
      <section id='intro'>
        <div className='wrapper grid sm:grid-cols-2 gap-10 text-center'>
          <h2>Lorem ipsum dolor adipiscing <br/> amet dolor consequat</h2>
          <p>lorem ipsum..</p>
        </div>
      </section>
      <section id='cards'>
        <div className='wrapper text-center'>
          <h2>Adipiscing amet consequat</h2>
          <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
          <div className='flex flex-wrap'>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </section>
      <section id='signup' className='bg-slate-800 text-slate-100'>
        <div className='wrapper text-center flex flex-col'>
          <h2>Ipsum feugiat consequat?</h2>
          <p>borba</p>
          <div className='flex mx-auto gap-10'>
            <Button highlighted>Sign up</Button>
            <button>Learn more</button>
          </div>
        </div>
      </section>
      <footer className='bg-blue-500 text-slate-100 font-thin'>
        <div className='wrapper'>
          <div className=' flex justify-center divide-x'>
            <p className='pr-6'>&copy; Untitled</p>
            <p className='pl-6'>Design: <a href="" className='font-thin' >Estudantes Web</a></p>
          </div>
        </div>
      </footer>
    </main>
  )
}
