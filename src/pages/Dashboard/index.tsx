import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste ">Repo 1</a>
        <img
          src="https://avatars.githubusercontent.com/u/57225173?v=4"
          alt=""
        />
      </Repositories>
    </>
  );
};

export default Dashboard;
