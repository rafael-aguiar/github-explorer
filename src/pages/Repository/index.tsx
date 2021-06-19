import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Header, Issues, RepositoryInfo } from './styles';

interface repositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<repositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer " />
        <Link to="/">
          <FiChevronLeft size={18} />
          voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong>Repo name</strong>
            <p>repo info</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>42</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>8</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>2</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link key="{}" to="/">
          <div>
            <strong>{}</strong>
            <p>{}</p>
          </div>
          <FiChevronRight size={24} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
