import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"; //permite que navegue para onde quiser na aplicação

import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import H1 from "../../components/title";
import ContainerItens from "../../components/containerItens";
import Button from "../../components/button";

import { Container, Image, User } from "./styles";

//JSX
function Users() {
  const [users, setUsers] = useState([]); //Estado
  const navigate = useNavigate()
  
  useEffect(() => { //carregar todos os usuários
    async function fetchuUsers (){
    const {data: newUsers} = await axios.get("http://localhost:3001/users");
    setUsers(newUsers);
    /* REACT HOOK => useEffect (efeito colateral)
       A aplicação inicia (a página carregou, useEffect é chamado)
       Quando um estado está no array de dependência do useEffect é alterado
       useEffect não aceita async */
    
  }

  fetchuUsers()

  }, [])

  async function deleteUser(userId) { //deletar usuários
    await axios.delete(`http://localhost:3001/users/${userId}`);

    const newUsers = users.filter(user => user.id !== userId);
    setUsers(newUsers);
  }

  function goBackPage(){
    navigate('/')
  };

  return (
    <Container>

      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name} - {user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lixeira" /></button></User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}><img alt="seta" src={Arrow} />Voltar</Button>
        
      </ContainerItens>
    </Container>
  );
}

export default Users;
