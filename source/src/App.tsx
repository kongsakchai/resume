import React, { useRef, useState } from 'react'
import ReactToPrint from 'react-to-print';
import './App.css'
import Competition from './compoents/Competition';
import Contact from './compoents/Contact';
import Education from './compoents/Education';
import Experience from './compoents/Experience';
import Header from './compoents/Header';
import Interest from './compoents/Interest';
import Skill from './compoents/Skill';

const App: React.FC = () => {

  const [url, setUrl] = useState<string>()
  const ref = useRef(null);
  const file = useRef<HTMLInputElement>(null)

  const handleFile = (value: string) => {
    if (value !== "") setUrl(value);
  }

  const handleAlert = () => {
    let value = prompt("URL Image")
    if (value !== null && value !== "") setUrl(value);
  }

  return (
    <div className='relative w-full h-full'>
      <div ref={ref}><Resume url={url} /></div>
      <div className='absolute text-topic text-left top-0 -left-[140px] flex flex-col gap-5'>
        <div className='bg-primary px-1 w-fit ml-0 hover:ml-2'>
          <ReactToPrint
            trigger={() => {
              return <button>{' >'} PRINT </button>;
            }}
            content={() => ref.current}
          />
        </div>
        <div className='bg-primary px-1 select-none w-fit ml-0 hover:ml-2' onClick={() => file.current?.click()}>
          {' > '} File
          <input type='file' className=' hidden' ref={file} accept="image/png, image/jpeg" onChange={(v) => handleFile(v.target.value)}></input>
        </div>
        <div className='bg-primary px-1 select-none w-fit ml-0 hover:ml-2' onClick={() => handleAlert()}>
          {' > '} Url
        </div>
        <div className='bg-primary px-1 select-none w-fit ml-0 hover:ml-2' onClick={() => setUrl("")}>
          {' > '} Reset
        </div>
      </div>
    </div >
  )
}

export default App

interface Props {
  url?: string
}

const Resume: React.FC<Props> = ({ url }) => {
  return (
    <div className="bg-white w-[21cm] h-[29.7cm] flex flex-col justify-start items-center">
      <Header url={url} />
      <div className='w-full h-full flex flex-row justify-start items-start p-7 gap-3'>
        <div className=' flex flex-col justify-start items-start mt-[2cm] gap-7 pl-3 border-l border-solid border-second'>
          <Contact />
          <Education />
          <Skill />
          <Interest />
        </div>
        <div className='flex flex-col justify-start items-start gap-7 pl-3 border-l border-solid border-second'>
          <Experience />
          <Competition />
        </div>
      </div>
      <div className="bg-primary w-full h-[1.5cm] justify-self-end"></div>
    </div>
  )
}