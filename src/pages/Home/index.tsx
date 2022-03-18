import{Main, Section1, Div, H1, H2, Button, Image, Section2, H3, P} from './styles';
import Ballebot from '../../assets/Ballebot.svg'

export function Home(): JSX.Element {

    function handleClick(): void{
        alert('Adicionado')
    }

    return (
        <Main>
            <Section1>
                <Div>
                    <H1>Balle Bot</H1>
                    <H2>Deixe sua comunidade segura de um jeito facil</H2>
                    <Button onClick={handleClick} >Me Adicione</Button>
                </Div>
                <Image src={Ballebot} alt='Balle Bot' /> 
            </Section1>
            <Section2>
                <H3>O que ela faz por você?</H3>
                <P> 1. Cria um <strong> sistema de verificação capcha </strong> para novos membros garantirem que não são robôs</P>
                <P> 2. Possui um <strong> sistema de banimento automático </strong> para links suspeitos que forem enviados na comunidade</P>
                <P> 3. <strong> Sistema de avisos e banimento manual</strong>, para pessoas administradoras utilizarem</P>
            </Section2>
        </Main>
    )
}