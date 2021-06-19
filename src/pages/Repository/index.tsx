import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface repositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<repositoryParams>();
  return <h1>Olá, mundo! Este é o Repositório {params.repository}.</h1>;
};

export default Repository;
