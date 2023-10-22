import Image from 'next/image'
import Button from '../components/Button'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main className='h-full bg-main-100 text-main-700'>
      <section id='hero' className='bg-theme-500'>
        <div className='wrapper text-center text-main-100 fill-main-100 max-w-md'>
          <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 3c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092z"/></svg>
          <h1 className='my-6'>
            Hi, I'm Nicoli, another fine little freebie from <a href="http://www.utfpr.edu.br/">UTFPR</a>.
          </h1>
          <p className='mb-10 font-thin'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur assumenda quia non quibusdam.
          </p>
          <Button thick>Discover</Button>
        </div>
      </section>
      <section id='intro'>
        <div className='wrapper grid sm:grid-cols-2 gap-10 text-center'>
          <img src='/imagem.png' className='aspect-video w-full md:order-2'/>
          <div className='text-left'>
            <h2>Lorem ipsum dolor adipiscing <br/> amet dolor consequat</h2>
            <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse omnis nulla animi porro iste soluta nam eos, sint enim molestias, officiis ipsa eum itaque! Eius sunt blanditiis hic ab voluptatibus?</p>
          </div>
        </div>
      </section>
      <section id='cards'>
        <div className='wrapper text-center'>
          <h2>Adipiscing amet consequat</h2>
          <p className='mb-10'>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
            <Card imgSrc='/imagem1.png'/>
            <Card imgSrc='/imagem2.png'/>
            <Card imgSrc='/imagem3.png'/>
          </div>
        </div>
      </section>
      <section id='signup' className='bg-main-700 text-main-100'>
        <div className='wrapper text-center flex flex-col'>
          <h2>Ipsum feugiat consequat?</h2>
          <p className='mb-10'>Sed lacus nascetur ac ante amet sapien</p>
          <div className='flex mx-auto gap-10'>
            <Button highlighted>Sign up</Button>
            <Button>Learn more</Button>
          </div>
        </div>
      </section>
      <footer className='bg-theme-500 text-main-100 font-thin'>
        <div className='wrapper mt-36'>
          <div className=' flex justify-center divide-x'>
            <p className='pr-6'>&copy; Untitled</p>
            <p className='pl-6'>Design: <a href="" className='font-thin' >Estudantes Web</a></p>
          </div>
        </div>
      </footer>
    </main>
  )
}
