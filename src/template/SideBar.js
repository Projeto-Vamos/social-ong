

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHandsHelping,
	faChild,
	faIdCardAlt,
	faPeopleCarry,
	faUserTie,
	faHandshake,
	faDollarSign,
	faFunnelDollar,
	faEdit,
	faBookOpen,
	faListOl
} from '@fortawesome/free-solid-svg-icons'
import Index from '../pages/index';
import IndexServidor from '../Servidor/index';
import IndexVolutario from '../Voluntario/index';
import Frequencia from '../Frequencia';
import IndexPadrinho from '../Padrinho/index';
import Despesa from '../Despesa/index';
import Receita from '../Receita/index';
import Educacao from '../Educacao/index';
import Planejamento from '../planejamento/index'
import PlanejamentoCoordenador from '../planejamentoCoordenador/index'

import jwt_decode from 'jwt-decode';
import './style.css'






import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class SideBar extends Component {
	constructor() {
		super()
		this.state = {
		  nivel: Number
		}
	  }


	componentDidMount() {
		const token = localStorage.usertoken
		if (token) {
		  const decoded = jwt_decode(token)
		 this.setState({
		   nivel:  decoded.nivel
		 })
		}
	 }

	 servidor(){
		 return (
	
			<Link to="/profile/servidor/lista" className="nav-link pl-0">
				<FontAwesomeIcon icon={faIdCardAlt} className='fa-fw' />
					<span className="font-weight-bolder"> Servidor</span>
				</Link>
		 )
	 }

	 planejamentoCoordenador(){
		return (
			<Link to="/profile/planejamentoCoordenador/lista" className="nav-link pl-0">
				<FontAwesomeIcon icon={faEdit} className='fa-fw' /> 
			      <span className="text-nowrap font-weight-bolder">Planejamento<br></br> Coordenador</span>
			</Link>
		)
	}


	 volutario(){
		return ( 
        <Link to="/profile/voluntario/lista" className="nav-link pl-0">
			<FontAwesomeIcon icon={faPeopleCarry} className='fa-fw' /> 
			<span className="font-weight-bolder"> Voluntário</span>
			</Link>
		)
	}




	render () {
		return (
			<Router>
				<div className="container-fluid margenSoperior">
					<div className="row min-vh-100 flex-row">
						<aside className="col-md-3 col-lg-2 p-0  flex-shrink-1 SideColor">
							<nav className="navbar navbar-expand navbar-dark  flex-column align-items-start py-2 SideColor">
								<div className="collapse navbar-collapse ml-4">
									<ul className="flex-column navbar-nav w-100 justify-content-between">
										{/* visível em tela sm ou menor */}
										<li class="nav-item active d-md-none d-lg-none d-xl-none d-sm-block d-xs-block">
											<Link to="/profile/publicoatendido/lista" className="nav-link pl-0"><i class="fa fa-bullseye fa-fw"></i> <span class="font-weight-bold">Vamos</span></Link>
										</li>
										{/* visível em tela md ou maior */}
										<li id='vamos' class="nav-item active d-none d-md-block d-lg-block d-xl-block">
											<Link to="/profile/publicoatendido/lista" className="nav-link pl-0"><i class="fa fa-bullseye fa-fw"></i> <h4 class="font-weight-bold">Vamos</h4></Link>
										</li>
										<li className="nav-item">
										<Link to="/profile/publicoatendido/lista" className="nav-link pl-0">
				                  <FontAwesomeIcon icon={faChild} className='fa-fw' /> 
				                  <span className="text-nowrap font-weight-bolder">Público atendido</span>
			               </Link>
										</li>
										<li className="nav-item">
											<Link to="/profile/planejamento/lista" className="nav-link pl-0"><FontAwesomeIcon icon={faEdit} className='fa-fw' /> <span className="text-nowrap font-weight-bolder">Planejamento</span></Link>
										</li>
										<li className="nav-item">
										{this.state.nivel == 1 ? this.planejamentoCoordenador() : null}
										</li>
										<li className="nav-item">
										{this.state.nivel == 1 ? this.servidor() : null}
										</li>
										<li className="nav-item">
										{this.state.nivel == 1 ? this.volutario() : null}
										</li>
										<li className="nav-item">
											<Link to="/profile/padrinho/lista" className="nav-link pl-0"><FontAwesomeIcon icon={faUserTie} className='fa-fw' /> <span className="font-weight-bolder">Padrinhos</span></Link>
										</li>
										<li className="nav-item">
											<Link to="#" className="nav-link pl-0"><FontAwesomeIcon icon={faHandshake} className='fa-fw' /> <span className="font-weight-bolder" >Parceiros</span></Link>
										</li>
										<li className="nav-item">
											<Link to="/profile/despesa/lista" className="nav-link pl-0"><FontAwesomeIcon icon={faFunnelDollar} className='fa-fw' /> <span className="font-weight-bolder">Despesas</span></Link>
										</li>
										<li className="nav-item">
											<Link to="/profile/receita/lista" className="nav-link pl-0"><FontAwesomeIcon icon={faDollarSign} className='fa-fw' /> <span className="font-weight-bolder">Receita</span></Link>
										</li>
										<li className="nav-item">
											<Link to="/profile/educacao/turmas" className="nav-link pl-0"><FontAwesomeIcon icon={faBookOpen} className='fa-fw' /> <span className="font-weight-bolder">Turma</span></Link>
										</li>
										<li className="nav-item">
				                            <Link to="/profile/frequencia" className="nav-link pl-0"><FontAwesomeIcon icon={faListOl} className='fa-fw' /> <span className="font-weight-bolder">Frequência</span></Link>
				                        </li>
									</ul>
								</div>
							</nav>
						</aside>
						<main class="col bg-faded  flex-grow-1">
							<Switch>
								<Route path="/profile/publicoatendido" component={Index} />
								<Route path="/profile/servidor" component={IndexServidor} />
								<Route path="/profile/voluntario" component={IndexVolutario} />
								<Route path="/profile/padrinho" component={IndexPadrinho} />
								<Route path="/profile/despesa" component={Despesa} />
								<Route path="/profile/receita" component={Receita} />
								<Route path="/profile/planejamento" component={Planejamento} />
								<Route path="/profile/planejamentoCoordenador" component={PlanejamentoCoordenador} />
								<Route path="/profile/educacao" component={Educacao} />
                               <Route path="/profile/frequencia" component={Frequencia} />
							</Switch>
						</main>
					</div>
				</div>
			</Router>
		);
	}
}
