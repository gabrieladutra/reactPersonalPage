import { useState } from 'react'
import './App.css'
import foto from './assets/gabriela.png'
import reactLogo from './assets/react.png'
import excel from './assets/excel.png'
import css from './assets/css.png'
import html from './assets/html.png'
import python from './assets/python.png'
import js from './assets/js.png'
import sql from './assets/sql.png'
import tailwind from './assets/tailwind.png'
import br from './assets/brazil.png'
import us from './assets/us.png'
import aws from './assets/aws.jpg'
import github from './assets/github.png'

let textos = {
  pt: {
    presentation:
      'Profissional recém-formada em Análise e Desenvolvimento de Sistemas, com experiência em análise de dados na Accenture e em suporte a produto digital SaaS em startup de planejamento financeiro. Combino visão de negócio com habilidades técnicas em automação, dashboards, análise de dados e documentação funcional. Tenho perfil analítico e colaborativo, facilidade para traduzir necessidades do negócio em requisitos claros para times técnicos e não técnicos, e projetos próprios voltados a automação e exibição de informações.',
    project: 'Meus projetos',
    code: 'Site Pessoal',
    game: 'Color Code Game',
    cat: 'Cat Revealer',
    menu: 'Menu Automatizado do SESC',
    bazar: 'Site Meu Bazar CWB'
  },
  en: {
    presentation:
      'A recent graduate in Systems Analysis and Development, with experience in data analysis at Accenture and in supporting a SaaS digital product at a financial planning startup. I combine business acumen with technical skills in automation, dashboards, data analysis, and functional documentation. I have an analytical and collaborative mindset, with a knack for translating business needs into clear requirements for both technical and non-technical teams, and I have developed my own projects focused on automation and information display.',
    project: 'My projects',
    code: 'Personal Website',
    game: 'Color Code Game',
    cat: 'Cat Revealer',
    menu: 'Automated SESC Lunch Menu',
    bazar: 'My Thrift Shop CWB Website'
  }
}
function App() {
  const [language, setLanguage] = useState('pt')
  const t = textos[language]

  return (
    <div className='flex h-screen w-screen flex-col bg-red-500 font-[Poppins] md:flex-row'>
      <div className='flex h-screen min-h-full w-full flex-col justify-between bg-black md:w-1/2'>
        <div>
          <div className='flew-row flex gap-3 p-3'>
            <div onClick={() => setLanguage('pt')} className='h-9 w-9 cursor-pointer'>
              <button>
                <img className='cursor-pointer' src={br} alt='' />
              </button>
            </div>
            <div onClick={() => setLanguage('en')} className='h-9 w-9 cursor-pointer'>
              <button>
                <img className='cursor-pointer' src={us} alt='' />
              </button>
            </div>
          </div>
          <div className='itens-center flex justify-center'>
            <div
              className='flex h-30 w-30 cursor-pointer justify-center py-5 md:block md:h-40 md:w-40'
              onClick={() => window.open('https://www.linkedin.com/in/gabrieladiasdutra/', '_blank')}>
              <img src={foto} className='celularzao:h-[120px] rounded-full border-[4px] border-[#d9d9d9] object-cover md:h-auto'></img>
            </div>
          </div>

          <div className='text-[#d9d9d9]'>
            <h1
              className='mt-2 flex cursor-pointer items-center justify-center py-5 text-xl font-semibold md:text-3xl'
              onClick={() => window.open('https://www.linkedin.com/in/gabrieladiasdutra/', '_blank')}>
              Gabriela Dutra
            </h1>
            <p className='celularzao:text-base text-[Open Sans] m-2 flex px-2 text-justify text-sm md:m-5 md:p-3 md:text-lg lg:text-xl'>
              {/* {w}x{h} <br /> */}
              {t.presentation}
            </p>
          </div>

          <div className='flex w-full justify-center md:w-full'>
            <div className='mt-2 mb-4 grid grid-cols-3 justify-items-center gap-4 md:flex md:flex-wrap md:justify-center'>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={reactLogo}></img>
              </div>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={js}></img>
              </div>
              <div className='h-14s w-14'>
                <img src={tailwind}></img>
              </div>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={html}></img>
              </div>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={css}></img>
              </div>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={python}></img>
              </div>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={excel}></img>
              </div>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={sql}></img>
              </div>
              <div className='h-9 w-9 md:h-10 md:w-10'>
                <img src={aws}></img>
              </div>
            </div>
          </div>
        </div>
        <footer className='mt-auto mb-6 flex h-[60px] w-full items-center justify-center'>
          <button
            onClick={() => window.open('https://github.com/gabrieladutra', '_blank')}
            className='mt-2 flex h-8 w-32 items-center justify-center gap-2 rounded-[12px] bg-green-800 font-medium text-white transition hover:bg-green-700 sm:text-sm md:h-12 md:text-base'>
            Github
            <img src={github} className='h-5 w-5' />
          </button>
        </footer>
      </div>
      <div className='flex h-screen min-h-full w-full flex-col items-center justify-start bg-gradient-to-tr from-[#ef6da0] to-[#ee8e6b] md:w-1/2 md:justify-center lg:justify-center'>
        <div className='ptext-[#333] mb-[250px] px-[20px] py-[30px]'>
          <h1 className='mb-[30px] text-[32px] font-semibold'>{t.project}</h1>
          <ul className='mt-2 flex cursor-pointer flex-col gap-5 text-[18px]'>
            <li onClick={() => window.open('https://github.com/gabrieladutra/reactPersonalPage', '_blank')}>{t.code}</li>
            <li onClick={() => window.open('https://menu.gabrieladutra.com', '_blank')}>{t.menu}</li>
            <li onClick={() => window.open('https://meubazarcwb.gabrieladutra.com', '_blank')}>{t.bazar}</li>
            <li onClick={() => window.open('https://colorcodes.gabrieladutra.com', '_blank')}>{t.game}</li>
            <li onClick={() => window.open('https://catrevealer.gabrieladutra.com', '_blank')}>{t.cat}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
