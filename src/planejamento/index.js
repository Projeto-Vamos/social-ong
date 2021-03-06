import React, { Component } from 'react';
import Header from '../planejamento/header';
import Insert from '../planejamento/cadastro/insertPlanejamento';
import Lista from '../planejamento/index/indexPlanejamento';
import Detalhes from '../planejamento/detailsPlanejamento/detailsPlanejamento';
import Deletar from '../planejamento/deletePlanejamento/index';
import Update from '../planejamento/updatePlanejamento/index';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>
          <header>
            <Header />
          </header>

          <section>
            <Switch>
              <Route path="/profile/planejamento/lista" component={Lista} />
              <Route path="/profile/planejamento/cadastro" component={Insert} />
              <Route path="/profile/planejamento/detalhes/:id" component={Detalhes} />
              <Route path="/profile/planejamento/atualizar/:id" component={Update} />
              <Route path="/profile/planejamento/remover/:id" component={Deletar} />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}


