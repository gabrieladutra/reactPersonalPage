import { useState } from 'react'
import './App.css'
import foto from './assets/gabrielaFoto.jpg'
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


let textos = {
  pt: {
    presentation: " Cursei Análise e Desenvolvimento de Sistemas. Tenho interesse em Análise de Dados. Minhas habilidades em Excel são intermediárias; Entendo de gráficos, tabelas dinâmicas e funções. Além disso, estou fazendo uma formação em análise de dados e estatística.",
    project: "Meus projetos",
    code: "Site Pessoal",
    game: "Color Code Game",
    cat: "Cat Revealer",
    menu: "Menu Automatizado do SESC"
  },
  en: {
    presentation: "I am currently in the sixth semester of Systems Analysis and Development. I am interested in Data Analysis. My Excel skills are intermediate; I am familiar with charts, pivot tables, and functions. In addition, I am pursuing training in data analysis and statistics.",
    project: "My projects",
    code: "Personal Website",
    game: "Color Code Game",
    cat: "Cat Revealer",
    menu: "Automated SESC Lunch Menu"
    
  }
}
function App() {
  const [language, setLanguage] = useState('pt')
  const t = textos[language]

  var ratio = window.devicePixelRatio || 1;
  var w = screen.width * ratio;
  var h = screen.height * ratio;

  return (
    <div className="bg-red-500 h-screen w-screen flex flex-col md:flex-row font-[Poppins]">
      <div className='min-h-full bg-black h-screen w-full md:w-1/2 flex flex-col justify-between'>
        <div>

          <div className='flex flew-row gap-3 p-3'>
            <div onClick={() => setLanguage('pt')} className='h-9 w-9 cursor-pointer'><button><img className="cursor-pointer" src={br} alt="" /></button></div>
            <div onClick={() => setLanguage('en')} className='h-9 w-9 cursor-pointer'><button><img className="cursor-pointer" src={us} alt="" /></button></div>
          </div>
          <div className='flex itens-center justify-center '>
            <div className='w-[160px] h-[160px] py-[20px] cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/gabrieladiasdutra/', '_blank')}><img src={foto} className='rounded-full border-[4px] border-[#d9d9d9] object-cover '></img></div>
          </div>

          <div className=' text-[#d9d9d9]'>
            <h1 className='text-[32px] font-semibold py-[25px] flex items-center justify-center cursor-pointer' onClick={() => window.open('https://www.linkedin.com/in/gabrieladiasdutra/', '_blank')} >Gabriela Dutra</h1>
            <p className='text-sm celularzao:text-base md:text-lg lg:text-xl p-3 text-[Open Sans]'>
              {/* {w}x{h} <br /> */}
              {t.presentation}
            </p>
          </div>

          <div className='flex flex-row gap-5 mt-1 celularzao:mt-2 md:mt-4 mb-4 justify-center flex-wrap'>

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
        <footer className='mb-16 md:mb-3 h-[60px] bottom-0 w-full flex items-center justify-center m-l-[100px]'>
          <div
            onClick={() => window.open('https://github.com/gabrieladutra', '_blank')}
            className='h-[50px] w-[100px] bg-green-600 hover:bg-green-800 rounded-[12px] text-white font-semibold flex justify-center cursor-pointer items-center'
          >
            Github
          </div>
        </footer>
      </div>
      <div className='min-h-full bg-gradient-to-tr from-[#ef6da0] to-[#ee8e6b] h-screen w-full md:w-1/2 flex flex-col items-center justify-start md:justify-center lg:justify-center'>
        <div className='mb-[250px] py-[30px] px-[20px] ptext-[#333]'>
          <h1 className=' font-semibold text-[32px] mb-[30px] '>{t.project}</h1>
          <ul className='text-[18px] cursor-pointer flex  flex-col gap-4'>
            <li onClick={() => window.open('https://github.com/gabrieladutra/reactPersonalPage', '_blank')}>{t.code}</li>
            <li onClick={() => window.open('https://colorcodes.gabrieladutra.com', '_blank')}>{t.game}</li>
            <li onClick={() => window.open('https://catrevealer.gabrieladutra.com', '_blank')}>{t.cat}</li>
            <li onClick={() => window.open('https://menu.gabrieladutra.com', '_blank')}>{t.menu}</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default App
