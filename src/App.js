import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';
import re from "./re.png"
import cone from "./cone.png"
import flavia from "./flavia.png"
import flumi from "./flumi.png"
import gabi from "./gabi.png"
import thais from "./thais.png"
import alice from "./alice.png"
function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Levantadora',
      cor: '#FF69B4'
    },
    {
      id: uuidv4(),
      nome: 'Oposta',
      cor: '#C71585'
    },
    {
      id: uuidv4(),
      nome: 'Ponteira',
      cor: '#C71585'
    },
    {
      id: uuidv4(),
      nome: 'Central',
      cor: '#FF69B4	'
    },
    {
      id: uuidv4(),
      nome: 'Líbero',
      cor: '#C71585'
    },
    {
      id: uuidv4(),
      nome: 'Técnico',
      cor: '#DB7093'
    },
    // {
    //   id: uuidv4(),
    //   nome: 'Inovação e Gestão',
    //   cor: '#FF8A29'
    // },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'FLÁVIA SAMPAIO',
      cargo: 'Jogadora de Velocidade e ninja no bloqueio',
      imagem: flavia,
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'RENATA MUNIZ',
      cargo: 'Jogadora de Velocidade e ninja no bloqueio',
      imagem: re,
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'THAIS OLIVEIRA',
      cargo: 'Jogadora de Velocidade e ninja no bloqueio',
      imagem: thais,
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'CARLOS EDUARDO',
      cargo: 'TÉCNICO E PREPARADOR FÍSICO',
      imagem: cone,
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'ALICE PAUTZ',
      cargo: 'Jogadora de Velocidade e ninja no levantamento',
      imagem: alice,
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'BÁRBARA CARDOS',
      cargo: 'Jogadora de Velocidade e ninja no ataque',
      imagem: flumi,
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'GABRIELA GERHARDT',
      cargo: 'Jogadora de Velocidade e ninja no ataque',
      imagem: gabi,
      time: times[1].nome
    },
  
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  // function deletarColaborador(id) {
  //   setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  // }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>RAINHAS DA QUADRA <img src="/imagens/logo.png" alt="" /></h1>
        <p>Conheça mais sobre nossas jogadoras!</p>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}  />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
