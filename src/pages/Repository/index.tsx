import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Header, Issues, RepositoryInfo } from './styles';

interface Repository {
  full_name: string; //eslint-disable-line
  description: string;
  stargazers_count: number; //eslint-disable-line
  forks_count: number; //eslint-disable-line
  open_issues_count: number; //eslint-disable-line
  owner: {
    login: string;
    avatar_url: string; //eslint-disable-line
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string; //eslint-disable-line
  user: {
    login: string;
  };
}

interface repositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setissues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<repositoryParams>();

  useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then((response) => setRepository(response.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then((response) => setissues(response.data));
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer " />
        <Link to="/">
          <FiChevronLeft size={18} />
          voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository?.owner.avatar_url}
              alt={`Foto de perfil de ${repository.owner.login}`}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          // eslint-disable-next-line
          <a key={issue.id} href={issue.html_url} target="_blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={24} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
