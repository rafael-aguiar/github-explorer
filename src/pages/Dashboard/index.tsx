import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

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
        <a href="teste ">
          <img
            src="https://avatars.githubusercontent.com/u/57225173?v=4"
            alt=""
          />
          <div>
            <strong>gobarber</strong>
            <p>
              Aplicação para agendamentos. Feita com Typescript, Node.js e
              Typeorm
            </p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href="teste ">
          <img
            src="https://avatars.githubusercontent.com/u/57225173?v=4"
            alt=""
          />
          <div>
            <strong>gobarber</strong>
            <p>
              Aplicação para agendamentos. Feita com Typescript, Node.js e
              Typeorm
            </p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href="teste ">
          <img
            src="https://avatars.githubusercontent.com/u/57225173?v=4"
            alt=""
          />
          <div>
            <strong>gobarber</strong>
            <p>
              Aplicação para agendamentos. Feita com Typescript, Node.js e
              Typeorm
            </p>
          </div>
          <FiChevronRight size={24} />
        </a>
        <a href="teste ">
          <img
            src="https://avatars.githubusercontent.com/u/57225173?v=4"
            alt=""
          />
          <div>
            <strong>gobarber</strong>
            <p>
              Aplicação para agendamentos. Feita com Typescript, Node.js e
              Typeorm
            </p>
          </div>
          <FiChevronRight size={24} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
