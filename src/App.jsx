import './App.css'

function App() {
  return (
    <div className="bg-red-500 h-screen w-screen flex flex-row">
      <div className='bg-black h-screen w-1/2'>
        <div className='text-white'>
          <h1>Meus Projetos</h1>
          <p>Link</p>
        </div>
      </div>
      <div className='bg-gradient-to-tr from-[#ef6da0] to-[#ee8e6b] h-screen w-1/2'>
        <div className='flex flew-row gap-3'>
          <div className='h-9 w-9'><button><img src="src\assets\brazil.png" alt="" /></button></div>
          <div className='h-9 w-9'><button><img src="src\assets\us.png" alt="" /></button></div>

        </div>
        <div className='w-[160px] h-[160px] '><img src='src\assets\gabrielaFoto.jpg' className='rounded-full border-[4px] border-[#d9d9d9] object-cover'></img></div>

        <h1 className='text-[32px] font-semibold text-[#333]'>Gabriela Dutra</h1>
        <p className='text-[16px] text-[#484848]'>Atualmente curso o sexto semestre de Análise e Desenvolvimento de Sistemas. Tenho interesse em Análise de Dados. Minhas habilidades em Excel são intermediárias; Entendo de gráficos, tabelas dinâmicas e funções. Além disso, estou fazendo uma formação em análise de dados e estatística.</p>
        <div className='flex flex-row gap-5'>


          <div className='h-[50px] w-[100px] bg-[#04AA6D] rounded-[12px] text-white'>
            <button><a href="https://github.com/gabrieladutra">Github</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
