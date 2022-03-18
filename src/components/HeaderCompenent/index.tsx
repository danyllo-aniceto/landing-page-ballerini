import { Header, Image, Link, Nav } from './styles';
import Logo from '../../assets/Vector.svg';

export function HeaderComponent(): JSX.Element {
    return (
        <Header>
            <Image src={Logo} alt='Logo' />
            <Nav>
                <Link href='/'>Comunidade Ballerini</Link>
                <Link href='/'>Tutorial</Link>
                <Link href='/'>Open Source</Link>
                <Link href='/'>Comandos</Link>
            </Nav>
        </Header>
    )
}