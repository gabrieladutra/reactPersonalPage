import './App.css'

function App() {
  return (
    <div className="bg-red-500 h-screen w-screen flex flex-row font-[Open Sans]">
      <div className='bg-black h-screen w-1/2 flex flex-col justify-between'>
        <div>

          <div className='flex flew-row gap-3 p-3'>
            <div className='h-9 w-9'><button><img src="src\assets\brazil.png" alt="" /></button></div>
            <div className='h-9 w-9'><button><img src="src\assets\us.png" alt="" /></button></div>
          </div>
          <div className='flex itens-center justify-center'>
            <div className='w-[160px] h-[160px] py-[20px]'><img src='src\assets\gabrielaFoto.jpg' className='rounded-full border-[4px] border-[#d9d9d9] object-cover '></img></div>

          </div>

          <div className=' text-[#d9d9d9]'>
            <h1 className='text-[32px] font-semibold py-[20px] flex items-center justify-center'>Gabriela Dutra</h1>
            <p className='text-[16px] p-3'>Atualmente curso o sexto semestre de Análise e Desenvolvimento de Sistemas. Tenho interesse em Análise de Dados. Minhas habilidades em Excel são intermediárias; Entendo de gráficos, tabelas dinâmicas e funções. Além disso, estou fazendo uma formação em análise de dados e estatística.</p>
          </div>

          <div className='flex flex-row gap-5 m-[50px] justify-center flex-wrap'>

            <div className='h-10 w-10'>
              <img src='src\assets\logo_dark.png'></img>
            </div>
            <div className='h-10 w-10'>
              <img src='src\assets\js.png'></img>
            </div>
            <div className='h-14s w-14'>
              <img src='src\assets\tailwind.png'></img>
            </div>
            <div className='h-10 w-10'>
              <img src='src\assets\html.png'></img>
            </div>
            <div className='h-10 w-10'>
              <img src='src\assets\css.png'></img>
            </div>
            <div className='h-10 w-10'>
              <img src='src\assets\python.png'></img>
            </div>
            <div className='h-10 w-10'>
              <img src='src\assets\excel.png'></img>
            </div>
            <div className='h-10 w-10'>
              <img src='src\assets\sql.png'></img>
            </div>

          </div>
        </div>
        <footer className='mb-3 h-[60px] bottom-0 w-full flex items-center justify-center m-l-[100px]'>
          <div className='h-[50px] w-[100px] bg-[#04AA6D] rounded-[12px] text-white font-semibold flex justify-center'>
            <button><a href="https://github.com/gabrieladutra">Github</a></button>
          </div>
        </footer>
      </div>
      <div className='bg-gradient-to-tr from-[#ef6da0] to-[#ee8e6b] h-screen w-1/2 flex flex-column items-center justify-center'>
        <div className='mb-[250px] py-[0px] px-[20px] ptext-[#333]'>
          <h1 className=' font-semibold text-[32px] '>Meus Projetos</h1>
          <p>Link</p>
        </div>
      </div>
    </div>
  )
}

export default App
