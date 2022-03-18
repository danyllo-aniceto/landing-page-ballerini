import { Footer, Image } from './styles';
import Ballerini from '../../assets/Ballerini.svg'
export function FooterComponent(): JSX.Element{
    return (
        <Footer>
            <Image src={Ballerini} alt='Imagem Ballerini' />
        </Footer>
    )
}