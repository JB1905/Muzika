import styled from 'styled-components';

import Title from '../atoms/Title';

const Wrapper = styled.div`
  margin: 32px 25px 0; // TODO
`;

type Props = {
  readonly title: string;
};

const Header = ({ title }: Props) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;
