import React from 'react';

import { SafeEnvironmentContainer } from './SafeEnvironment.style';
import { Container } from '@material-ui/core';

const SafeEnvironment: React.FC = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente seguro <i className={'twf-lock'}/>
      </Container>
    </SafeEnvironmentContainer>
  );
}

export default SafeEnvironment;