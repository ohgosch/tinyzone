import React from 'react';

import { LinksProps } from '../../logic/interfaces/links';
import { Container, Link } from './styles';

interface Props {
  data: LinksProps[];
}

const Links: React.SFC<Props> = ({ data }) => {

  return (
    <Container>
      {data.map(({ url, title, id }) => (
        <Link key={id} href={url}>{title}</Link>
      ))}
    </Container>
  );
};

export default Links;
