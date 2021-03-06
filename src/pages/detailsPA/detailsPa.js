import React, { Component } from "react";
import { api, STATIC_SERVER_ADDRESS } from "../../service/service";
import { Link } from "react-router-dom";
import "../indexPA/index.css";
import "./detail.css";
import { setPdfData, printPdf } from "./templatePdf";
import { maskCpf, toMoney } from "../../util";
import {toLocaleDateString}from '../../util'

export default class PublicoPA extends Component {
  state = {
    publicoAtendido: {
      nome: "",
      foto: "",
      dataNascimento: "",
      sexo: "",
      raca: "",
      altura: 0,
      peso: 0,
      religiao: "",
      naturalidade: "",
      rg: "",
      cpf: 0,
      escola: "",
      ano: "",
      anoAnterior: "",
      rua: "",
      numero: "",
      bairro: "",
      moraComQuem: "",
      nomeResponsavel: "",
      cpfResponsavel: "",
      rgResponsavel: "",
      nis: 0,
      funcao: "",
      escolaridade: "",
      profissao: "",
      rendaFamiliar: "",
      contribuinte: "",
      observacao: "",
    },
    redirect: false,
  };

  async componentDidMount() {
    //metodo executa no momento da execução da aplicação
    const { id } = this.props.match.params; // pegando o ID da url através do props
    const response = await api.get(`/CadastroPublico/${id}`); // busca da lista no banco de dados
    this.setState({ publicoAtendido: response.data }); //setando dados do publicoAtendido com dados da lista
    setPdfData(response.data);

    window.tlds = toLocaleDateString
    
  }

  handleClick() {
    printPdf();
  }

  render() {
    const { publicoAtendido } = this.state; // PublicoAtendido no seu estado atual

    return (
      <form className="tituloDetails" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend align="center">Detalhes Usuario</legend>
          <div className="card textForm">
            <h3 align="center">Dados Pessoais</h3>
            <div className="card-body">
              <div className="container col-md-4 col-sm-4 float-right">
                <img
                  className="d-flex justify-content-center mx-auto"
                  id="img"
                  src={STATIC_SERVER_ADDRESS + publicoAtendido.foto}
                  width="170"
                  height="250"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-sm-5">
                  <label htmlFor="nome">Nome</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.nome}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="dataNascimento">Data Nascimento:</label>

                  <input
                    type="date"
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.dataNascimento.substring(0, 10)}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="sexo">Sexo:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.sexo}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="religiao">Religião:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.religiao}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="rg">RG:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.rg}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="cpf">CPF:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={maskCpf(publicoAtendido.cpf.toString())}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="peso">Peso:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.peso}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="raca">Raça:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.raca}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="altura">Altura:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.altura}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="naturalidade">Naturalidade:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.naturalidade}
                  />
                </div>
              </div>
              <h3 align="center">Escolaridade</h3>
              <div className="form-row">
                <div className="form-group col-sm-5">
                  <label htmlFor="escola">Instituição de ensino:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.escola}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="ano">Ano:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.ano}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="anoAnterior">Ano Anterior:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.anoAnterior}
                  />
                </div>
              </div>
              <h3 align="center">Endereço</h3>

              <div className="form-row">
                <div className="form-group col-sm-3">
                  <label htmlFor="rua">Rua:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.rua}
                  />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="numero">Numero:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.numero}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="bairro">Bairro:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.bairro}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="moraComQuem">Mora Com Quem:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.moraComQuem}
                  />
                </div>
              </div>
              <h3 align="center">Responsável</h3>
              <div className="form-row">
                <div className="form-group col-sm-10">
                  <label htmlFor="nomeResponsavel">Nome do Responsável:</label>
                  <input
                    className="form-control config-input"
                    type="text"
                    id="nomeResponsavel"
                    name="nomeResponsavel"
                    required
                    value={publicoAtendido.nomeResponsavel}
                    disabled
                  />
                </div>
                <div className="form-group col-sm-5">
                  <label htmlFor="rgResponsavel">RG do Responsável:</label>
                  <input
                    className="form-control config-input"
                    type="text"
                    id="rgResponsavel"
                    name="rgResponsavel"
                    minLength="14"
                    maxLength="14"
                    required
                    value={publicoAtendido.rgResponsavel}
                    disabled
                  />
                </div>
                <div className="form-group col-sm-5">
                  <label htmlFor="cpfResponsavel">CPF do Responsável:</label>
                  <input
                    className="form-control config-input"
                    type="text"
                    id="cpfResponsavel"
                    name="cpfResponsavel"
                    minLength="14"
                    maxLength="14"
                    pattern="\d{3}.\d{3}.\d{3}-\d{2}"
                    required
                    value={maskCpf(publicoAtendido.cpfResponsavel.toString())}
                    disabled
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-sm-3">
                  <label htmlFor="nis">Nis:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.nis}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="funcao">Função:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.funcao}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="escolaridade">Escolaridade:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.escolaridade}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="profissao">Profissão:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.profissao}
                  />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="rendaFamiliar">Renda Familiar:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={toMoney(publicoAtendido.rendaFamiliar)}
                  />
                </div>
                <div className="form-group col-sm-3">
                  <label htmlFor="contribunite">Contribuinte:</label>
                  <input
                    className="form-control config-input"
                    disabled="true"
                    value={publicoAtendido.contribuinte}
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="observacao">Observação:</label>
                  <textarea
                    rows=""
                    className="form-control"
                    disabled="true"
                    value={publicoAtendido.observacao}
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-info btn-lg"
                onClick={this.handleClick}
              >
                Imprimir
              </button>
              <Link
                to={`/profile/publicoatendido/editar/${publicoAtendido._id}`}
              >
                <button type="button" className="btn btn-warning btn-lg">
                  Editar
                </button>
              </Link>
              <Link
                to={`/profile/publicoatendido/remover/${publicoAtendido._id}`}
              >
                <button type="button" className="btn btn-danger btn-lg">
                  Deletar
                </button>
              </Link>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}
