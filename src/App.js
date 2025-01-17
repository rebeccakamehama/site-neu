import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Banner } from './Assets/Components/banner';
import { Numbers } from './Assets/Components/numbers';
import { Description } from './Assets/Components/description';
import { Pillars } from './Assets/Components/pillars';
import { CardSectionLeft } from './Assets/Components/card_section_left';
import { CardSectionRight } from './Assets/Components/card_section_right';
import { HowWorks } from './Assets/Components/how_works';
import { StartupsLab } from './Assets/Components/startups_lab';
import { StartupsShip } from './Assets/Components/startups_ship';
import { HomeEbook } from './Assets/Components/home_ebook';
import { HomeCursos } from './Assets/Components/home_cursos';
import { HomeParceiros } from './Assets/Components/home_parceiros';
import { Footer } from './Assets/Components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Numbers
        numero1="+100"
        descricao1_1="Startups"
        descricao1_2="parceiras"
        numero2="+15k"
        descricao2_1="Alunos"
        descricao2_2="impactados"
        numero3="+45k"
        descricao3_1="Inscritos nos"
        descricao3_2="cursos online"
        numero4="+20"
        descricao4_1="Startups"
        descricao4_2="criadas" />
        <Description />
        <Pillars />
        <CardSectionLeft />
        <HowWorks 
          titulo1="Como funciona a pré-aceleração?"
          textolateral="No StartupLAB, a equipe receberá todo o apoio, mentoria, material teórico e conexão com empreendedores para tornar sua ideia em realidade."
          item1="- 100% gratuito para todos os alunos e ex-alunos da USP"
          item2="- Apoio e mentoria de fundadores e profissionais de startups"
          item3="- Oferecimento gratuito de materiais montados pelo time NEU"
          item4="- Encontros semanais com outras equipes de nossa pré-aceleração"
        />
        <StartupsLab
        titulo="Alguns cases de sucesso do NEU" />
        <CardSectionRight />
        <HowWorks 
          titulo1="Como funciona para conseguir um estágio pelo NEU?"
          textolateral="Nós conectamos o alunos USP que quer ter uma experiência em um ambiente vibrante com a vaga de estágio de uma startup."
          item1="- Experiência de trabalhar em ambientes de muita autonomia"
          item2="- As melhores startups do Brasil"
          item3="- Inscrição através de apenas um formulário"
          item4="- Contato com muita inovação"
        />
        <StartupsShip
        titulo="Algumas startups que já contrataram pelo NEU" />
        <HomeEbook />
        <HomeCursos />
        <HomeParceiros />
        <Footer />
      </div>
    );
  }
}

export default App;
