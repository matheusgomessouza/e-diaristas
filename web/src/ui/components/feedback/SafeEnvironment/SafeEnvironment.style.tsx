import { styled } from '@material-ui/core/styles';

export const SafeEnvironmentContainer = styled('div')`
  background-color: ${({ theme }) => theme.palette.background.default};

  text-align: right;
  font-size: 12px;
  color: ${({ theme }) => theme.palette.text.secondary};

  padding: 16px 0;
`