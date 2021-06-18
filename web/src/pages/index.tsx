import useIndex from 'data/hooks/pages/useIndex.page';

import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';

import { 
  Button, 
  Typography, 
  Container,
  CircularProgress 
} from '@material-ui/core';

import { 
  FormElementsContainer, 
  ProfessionalsPaper, 
  ProfessionalsContainer 
} from 'ui/styles/pages/index.style';

export default function Home() {
  const {     
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes 
  } = useIndex()

  return (
    <div >
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade.'}
      />
 
      <FormElementsContainer>
        <TextFieldMask 
          mask={'99.999-999'}
          label={'Digite seu CEP'}
          variant={'outlined'}
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          fullWidth
        />

        { erro && 
          <Typography color={'error'}>{erro}</Typography>
        }

        <Button
          variant={'contained'}
          color={'secondary'}
          sx={{ width: '220px' }}
          disabled={!cepValido || carregando}
          onClick={() => buscarProfissionais(cep)}
          >
          { 
            carregando ? <CircularProgress size={20} />
            : 'Buscar'
          }
        </Button>
      </FormElementsContainer>

      <Container>
        { buscaFeita && 
          ( diaristas.length > 0 ? (
            <ProfessionalsPaper>
              <ProfessionalsContainer>
                {diaristas.map((item, index) => {
                  return (
                    <UserInformation 
                      key={index} 
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfessionalsContainer>
              
              <Container sx={{ textAlign: 'center' }}>
                {diaristasRestantes > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {diaristasRestantes}{' '} 
                    {diaristasRestantes > 1 
                      ? 'profissionais atendem' 
                      : 'profissional atende'}{' '} 
                      ao seu endereço.
                  </Typography>
                )}

                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={{ mt: 5 }}
                >Contratar um profissional</Button>
              </Container>
            
            </ProfessionalsPaper>
            ) : (
              <Typography align={'center'} color={'textPrimary'}>
                Ainda não temos ninguém disponível em sua região
              </Typography>
            )
          )
        }
      </Container>         
    </div>
  )
}
