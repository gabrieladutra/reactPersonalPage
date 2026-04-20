import { useState } from "react";
import "./App.css";
import foto from "./assets/gabriela.png";
import reactLogo from "./assets/react.png";
import excel from "./assets/excel.png";
import css from "./assets/css.png";
import html from "./assets/html.png";
import python from "./assets/python.png";
import js from "./assets/js.png";
import sql from "./assets/sql.png";
import tailwind from "./assets/tailwind.png";
import br from "./assets/brazil.png";
import us from "./assets/us.png";
import aws from "./assets/aws.jpg";

let textos = {
  pt: {
    presentation:
      "Profissional recém-formada em Análise e Desenvolvimento de Sistemas, com experiência em análise de dados na Accenture e em suporte a produto digital SaaS em startup de planejamento financeiro. Combino visão de negócio com habilidades técnicas em automação, dashboards, análise de dados e documentação funcional. Tenho perfil analítico e colaborativo, facilidade para traduzir necessidades do negócio em requisitos claros para times técnicos e não técnicos, e projetos próprios voltados a automação e exibição de informações.",
    project: "Meus projetos",
    code: "Site Pessoal",
    game: "Color Code Game",
    cat: "Cat Revealer",
    menu: "Menu Automatizado do SESC",
    bazar: "Site Meu Bazar CWB",
  },
  en: {
    presentation:
      "A recent graduate in Systems Analysis and Development, with experience in data analysis at Accenture and in supporting a SaaS digital product at a financial planning startup. I combine business acumen with technical skills in automation, dashboards, data analysis, and functional documentation. I have an analytical and collaborative mindset, with a knack for translating business needs into clear requirements for both technical and non-technical teams, and I have developed my own projects focused on automation and information display.",
    project: "My projects",
    code: "Personal Website",
    game: "Color Code Game",
    cat: "Cat Revealer",
    menu: "Automated SESC Lunch Menu",
    bazar: "My Thrift Shop CWB Website",
  },
};
function App() {
  const [language, setLanguage] = useState("pt");
  const t = textos[language];

  var ratio = window.devicePixelRatio || 1;
  var w = screen.width * ratio;
  var h = screen.height * ratio;

  return (
    <div className="bg-red-500 h-screen w-screen flex flex-col md:flex-row font-[Poppins]">
      <div className="min-h-full bg-black h-screen w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <div className="flex flew-row gap-3 p-3">
            <div
              onClick={() => setLanguage("pt")}
              className="h-9 w-9 cursor-pointer"
            >
              <button>
                <img className="cursor-pointer" src={br} alt="" />
              </button>
            </div>
            <div
              onClick={() => setLanguage("en")}
              className="h-9 w-9 cursor-pointer"
            >
              <button>
                <img className="cursor-pointer" src={us} alt="" />
              </button>
            </div>
          </div>
          <div className="flex itens-center justify-center ">
            <div
              className="w-[160px] h-[160px] py-[20px] cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gabrieladiasdutra/",
                  "_blank",
                )
              }
            >
              <img
                src={foto}
                className="rounded-full border-[4px] border-[#d9d9d9] object-cover "
              ></img>
            </div>
          </div>

          <div className=" text-[#d9d9d9]">
            <h1
              className="text-[32px] font-semibold py-[25px] flex items-center justify-center cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/gabrieladiasdutra/",
                  "_blank",
                )
              }
            >
              Gabriela Dutra
            </h1>
            <p className="text-sm celularzao:text-base md:text-lg lg:text-xl p-3 text-[Open Sans]">
              {/* {w}x{h} <br /> */}
              {t.presentation}
            </p>
          </div>

          <div className="flex flex-row gap-5 mt-1 celularzao:mt-2 md:mt-4 mb-4 justify-center flex-wrap">
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={reactLogo}></img>
            </div>
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={js}></img>
            </div>
            <div className="h-14s w-14">
              <img src={tailwind}></img>
            </div>
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={html}></img>
            </div>
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={css}></img>
            </div>
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={python}></img>
            </div>
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={excel}></img>
            </div>
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={sql}></img>
            </div>
            <div className="h-9 w-9 md:h-10 md:w-10">
              <img src={aws}></img>
            </div>
          </div>
        </div>
        <footer className="mb-16 md:mb-3 h-[60px] bottom-0 w-full flex items-center justify-center m-l-[100px]">
          <div
            onClick={() =>
              window.open("https://github.com/gabrieladutra", "_blank")
            }
            className="h-[50px] w-[100px] bg-green-600 hover:bg-green-800 rounded-[12px] text-white font-semibold flex justify-center cursor-pointer items-center"
          >
            Github
          </div>
        </footer>
      </div>
      <div className="min-h-full bg-gradient-to-tr from-[#ef6da0] to-[#ee8e6b] h-screen w-full md:w-1/2 flex flex-col items-center justify-start md:justify-center lg:justify-center">
        <div className="mb-[250px] py-[30px] px-[20px] ptext-[#333]">
          <h1 className=" font-semibold text-[32px] mb-[30px] ">{t.project}</h1>
          <ul className="text-[18px] cursor-pointer flex  flex-col gap-5 mt-2">
            <li
              onClick={() =>
                window.open(
                  "https://github.com/gabrieladutra/reactPersonalPage",
                  "_blank",
                )
              }
            >
              {t.code}
            </li>
            <li
              onClick={() =>
                window.open("https://menu.gabrieladutra.com", "_blank")
              }
            >
              {t.menu}
            </li>
            <li
              onClick={() =>
                window.open("https://meubazarcwb.gabrieladutra.com", "_blank")
              }
            >
              {t.bazar}
            </li>
            <li
              onClick={() =>
                window.open("https://colorcodes.gabrieladutra.com", "_blank")
              }
            >
              {t.game}
            </li>
            <li
              onClick={() =>
                window.open("https://catrevealer.gabrieladutra.com", "_blank")
              }
            >
              {t.cat}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
