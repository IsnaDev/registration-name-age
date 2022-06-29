import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; //React-router-dom cria as rotas da aplicação
//novidades na versão 6 do React-router-dom:
/*Switch      =>  Router
  useHistory  =>  useNavigate
  history     =>  navigate
  component   =>  element
  exact       =>  não é mais utilizado
  */

import axios from "axios";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/title"
import { ContainerItens } from "../../components/containerItens/styles";
import Button from "../../components/button";

import { Container, Image, InputLabel, Input } from "./styles";

//JSX
function App() {
  const [users, setUsers] = useState([]); //Estado
  const navigate = useNavigate();

  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value, age: inputAge.current.value
    });

    setUsers([...users, newUser]); //spread operator

    navigate("/usuarios");
  }

  return (
    <Container>

      <Image alt="logo-imagem" src={People} />

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>


      </ContainerItens>
    </Container>
  );
}

export default App
