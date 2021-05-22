import Social from '../social'
import { ProfileContainer } from './styles'

export default function Profile() {
    return (
        <ProfileContainer>
            <img src="/img/profile.jpg" alt="" />
            <h1>Rafael C.</h1>
            <Social />
            <p>
                Olá, sou desenvolvedor full-stack, atualmente trabalhando com javascript - Node,
                React e Nextjs. Formando em Análise e Desenvolvimento de Sistemas pelo Instituto Federal da Bahia.
            </p>
            <p>
                Gosto de estudar idiomas, tenho boa compreensão do Inglês e estou me aperfeiçoando no Espanhol.
            </p>
        </ProfileContainer>
    )
}