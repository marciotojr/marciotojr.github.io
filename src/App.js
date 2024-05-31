import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Bio />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
		<div className="container">
			<div className="heading-wrapper">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-location-outline"></i>
							<div className="right-area">
								<h5>Granbery</h5>
								<h5>Juiz de Fora - MG</h5>
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-telephone-outline"></i>
							<div className="right-area">
								<h5>32 99834-4117</h5>
								
							</div>
						</div>
					</div>

					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-chatboxes-outline"></i>
							<div className="right-area">
								<h5><a href="mailto:marciotojr@gmail.com">marciotojr@gmail.com</a></h5>
								<h5><a href="https://goo.gl/fXGi3h" target="_blank">WhatsApp messenger</a></h5>
								<h6>Resposta em 24 horas</h6>
							</div>
						</div>
					</div>
				</div>
			</div>

			<a className="downlad-btn" href="files/CV - Marcio - pt_br.pdf" target="_blank"><i className="icon ion-ios-download-outline"></i> Currículo</a>
		</div>
	</header>

  );
}

function Intro(){
  return (
    
	<section className="intro-section">
  <div className="container">
    <div className="row">
      <div className="col-md-1 col-lg-2"></div>
      <div className="col-md-10 col-lg-8">
        <div className="intro">
          <div className="profile-img"><img src="../images/profile.jpg" alt="" /></div>
          <h2><b>Marcio Tadeu Oliveira Júnior, Msc.</b></h2>
          <h4 className="font-yellow">Engenheiro de Software e Desenvolvedor Full-Stack</h4>
          <ul className="information margin-tb-30">
            <li><b>NASCIMENTO : </b>16 de Julho de 1993</li>
            <li><b>EMAIL : </b>marciotojr@gmail.com</li>
            <li><b>ESTADO CIVIL : </b>Solteiro</li>
          </ul>
          <ul className="social-icons">
            <li><a href="https://github.com/marciotojr" target="_blank"><i className="ion-social-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/marciotojr/" target="_blank"><i className="ion-social-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

function Bio() {
  return (
    <section className="about-section section">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="heading">
						<h3><b>Sobre mim</b></h3>
						<h6 className="font-lite-black"><b>BIO</b></h6>
					</div>
				</div>
				<div className="col-sm-8">
					<p className="margin-b-50">Mestre pela Universidade Federal de Juiz de
						Fora desde 2019. Sempre curioso por computação, buscando
						aprender novas linguagens, técnicas e ferramentas.</p>

				</div>
			</div>
		</div>
	</section>
  );
}

function Experience() {
  return (
    <section className="experience-section section">
		<div className="container">
			<div className="row">
				<div className="col-sm-4">
					<div className="heading">
						<h3><b>Experiência Acadêmica e Profissional</b></h3>
						<h6 className="font-lite-black"><b>EXPERIÊNCIAS ANTERIORES</b></h6>
					</div>
				</div>
				<div className="col-sm-8">

					<div className="experience margin-b-50">
						<h4><b>ENGENHEIRO DE SOFTWARE</b></h4>
						<h5 className="font-yellow"><b>LEVTY SISTEMAS</b></h5>
						<h6 className="margin-t-10">MAIO 2020 - ATUALMENTE</h6>
						<p className="font-semi-white margin-tb-30"> 
							Desenvolvimento de software em conjunto à extensão da plataforma SYDLE ONE, usando-a como backend, na modalidade backend as a service. 
						</p>
						<ul className="list margin-b-30">
							<li>SYDLE ONE.</li>
							<li>Node.js.</li>
							<li>Elasticsearch.</li>
							<li>React.</li>
						</ul>
					</div>

					<div className="experience margin-b-50">
						<h4><b>DESENVOLVEDOR DE SOFTWARE</b></h4>
						<h5 className="font-yellow"><b>CEAD @ UNIVERSIDADE FEDERAL DE JUIZ DE FORA</b></h5>
						<h6 className="margin-t-10">OUTUBRO 2018 - AGOSTO 2019</h6>
						<p className="font-semi-white margin-tb-30"> Desenvolvimento e manutenção de software de sistema externo
						para inscrição em editais de seleção de alunos e tutores para disciplinas administradas pelo 
						Centro de Ensino à Distância da UFJF, e de sistema interno de administração financeira e de 
						acompanhamento de processos destes editais. Eventual desenvolvimento de temas Wordpress.
						</p>
						<ul className="list margin-b-30">
							<li>Desenvolvimento de software em Java e PHP.</li>
							<li>UI/UX design.</li>
							<li>Criação de temas Wordpress com Materialize e CSS 3.</li>
						</ul>
					</div>

					<div className="experience margin-b-50">
						<h4><b>DESENVOLVEDOR DE SOFTWARE</b></h4>
						<h5 className="font-yellow"><b>@ MANAGER SAÚDE</b></h5>
						<h6 className="margin-t-10">AGOSTO 2019 - DEZEMBRO 2019</h6>
						<p className="font-semi-white margin-tb-30"> Manutenção de software de cotação de produtos farmacêuticos.
						Implantação de Wiki.
						</p>
						<ul className="list margin-b-30">
							<li>Desenvolvimento de software em C#, com Entity Framework, ASP.NET.</li>
							<li>Domain-Driven Development.</li>
							<li>Implantação de Wiki com BookStack.</li>
						</ul>
					</div>

					<div className="experience margin-b-50">
						<h4><b>PESQUISADOR EM ENGENHARIA DE SOFTWARE</b></h4>
						<h5 className="font-yellow"><b>CAPES @ UNIVERSIDADE FEDERAL DE JUIZ DE FORA</b></h5>
						<h6 className="margin-t-10">MARÇO 2017 - DEZEMBRO 2019</h6>
						<p className="font-semi-white margin-tb-30"> Pesquisador focado em Sistemas
							 de Recomendação em Ecosistemas de Software. O trabalho desenvolvido
							 se baseia em recomendar desenvolvedores para projetos, observando
							 a experiência e tópicos de conhecimento de domínio dentro dos 
							 ecosistemas do NPM (Node Package Manager) e do Github. </p>
						<ul className="list margin-b-30">
							<li>Desenvolvimento de Sistema de Recomendação.</li>
							<li>Pesquisa sobre interações de desenvolvedores dentro de Ecosistemas de Software.</li>
							<li>Participação em avaliação de projeto em ambito nacional executada por nomes da área.</li>
						</ul>
					</div>

					<div className="experience margin-b-50">
						<h4><b>PESQUISADOR E DESENVOLVEDOR DE SOFTWARE</b></h4>
						<h5 className="font-yellow"><b>GETCOMP @ UNIVERSIDADE FEDERAL DE JUIZ DE FORA</b></h5>
						<h6 className="margin-t-10">OUTUBRO 2012 - JUNHO 2014</h6>
						<p className="font-semi-white margin-tb-30"> Pesquisador e desenvolvedor de software para matching de arquivos XML para compreensão da evolução dos arquivos por sistemas de versionamento, e.g. Git; SVN; Mercurial. </p>
						<ul className="list margin-b-30">
							<li>Desenvolvimento de software em Java.</li>
							<li>UI/UX design.</li>
						</ul>
					</div>

					<div className="experience margin-b-50">
						<h4><b>ESTAGIÁRIO DE TI</b></h4>
						<h5 className="font-yellow"><b>KIKA COLORIDA</b></h5>
						<h6 className="margin-t-10">JANEIRO 2011 - MARÇO 2011</h6>
						<p className="font-semi-white margin-tb-30"> Estágio do Curso Técnico em Informática Industrial. </p>
						<ul className="list margin-b-30">
							<li>Manutenção de computadores.</li>
							<li>Rotinas de TI.</li>
							<li>Troubleshooting.</li>
						</ul>
					</div>

				</div>
			</div>
		</div>

	</section>
  );
}

function Education() {
  return (
    
	<section className="education-section section">
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="heading">
          <h3><b>Educação</b></h3>
          <h6 className="font-lite-black"><b>CARREIRA ACADÊMICA</b></h6>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="education-wrapper">
          <div className="education margin-b-50">
            <h4><b>MESTRADO EM CIÊNCIA DA COMPUTAÇÃO</b></h4>
            <h5 className="font-yellow"><b>PPGCC @ UNIVERSIDADE FEDERAL DE JUIZ DE FORA</b></h5>
            <h6 className="font-lite-black margin-t-10">2017 - 2019</h6>
            <p className="margin-tb-30">O curso de Mestrado em Ciência da
              Computação prepara profissionais capacitados para pesquisar,
              ensinar e contribuir para a evolução do conhecimento científico
              e tecnológico na área de Ciência da Computação, e que sejam
              capazes de utilizar este conhecimento na avaliação,
              especificação e desenvolvimento de novos modelos matemáticos e
              computacionais, ferramentas, métodos e sistemas computacionais. </p>
          </div>

          <div className="education margin-b-50">
            <h4><b>BACHARELADO EM CIÊNCIA DA COMPUTAÇÃO</b></h4>
            <h5 className="font-yellow"><b>DCC @ UNIVERSIDADE FEDERAL DE JUIZ DE FORA</b></h5>
            <h6 className="font-lite-black margin-t-10">2015 - ATUALMENTE</h6>
            <p className="margin-tb-30">O curso de Bacharelado em Ciência da
              Computação da Universidade Federal de Juiz de Fora tem a
              computação como atividade-fim e desta forma tem por objetivo
              formar profissionais com profunda fundamentação técnica e
              científica na área, aptos para a inserção em setores
              profissionais, acadêmicos e científicos, e que possam participar
               do desenvolvimento da sociedade brasileira e contribuir para o
               avanço da ciência e da tecnologia. </p>
          </div>

          <div className="education margin-b-50">
            <h4><b>BACHARELADO SANDUÍCHE EM ENGENHARIA DE SOFTWARE</b></h4>
            <h5 className="font-yellow"><b>COLLEGE OF COMPUTING AND DIGITAL MEDIA @ DE PAUL UNIVERSITY (CHICAGO/EUA)</b></h5>
            <h6 className="font-lite-black margin-t-10">2014 - 2015</h6>
            <p className="margin-tb-30">O programa de Engenharia de Software
              enfatiza as melhores práticas de engenharia de software,
              metodologias atuais, tecnologias emergentes e suas aplicações
              em vários setores. Ele também enfatiza o desenvolvimento de
              habilidades de comunicação e apresentação em um ambiente de
              desenvolvimento de software baseado em equipe. O currículo
              engloba todos os aspectos importantes da engenharia de software,
              incluindo: engenharia de requisitos, arquitetura e design de
              software, construção de software, teste de software e garantia
              de qualidade, manutenção de software e gerenciamento de projetos
              de software. </p>
          </div>

          <div className="education margin-b-50">
            <h4><b>CURSO TÉCNICO EM INFORMÁTICA INTEGRADO AO ENSINO MÉDIO</b></h4>
            <h5 className="font-yellow"><b>IF SUDESTE DE MINAS GERAIS</b></h5>
            <h6 className="font-lite-black margin-t-10">2008 - 2010</h6>
            <p className="margin-tb-30">O curso de Informática forma profissionais
               para trabalhar em atividades de programação, montagem e
               manutenção de computadores isolados ou em rede. O profissional
               é habilitado para identificar a origem das falhas de
               funcionamento de computadores, periféricos e programas;
               realizar programação em linguagem de máquina; criar pequenos
               circuitos digitais para serem ligados a microprocessadores;
               desenvolver algoritmos e estruturas de dados para a criação de
               aplicativos; aplicar linguagens e ambientes de programação no
               desenvolvimento de softwares; e executar ações de treinamento
               e suporte técnico. </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
  );
}

function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer>
		<p className="copyright">
      Copyright &copy;{CURRENT_YEAR} All rights reserved | This template is made with <i className="ion-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
		</p>


	</footer>
  );
}

export default App;
