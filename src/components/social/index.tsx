import { SocialContainer } from './styles'

export default function Social() {
    return (
        <SocialContainer>
            <a href="https://github.com/carvalho-rafael">
                <img src="/img/github.svg" alt="github link" />
                <span>github.com/carvalho-rafael</span>
            </a>
            <a href="mailto:rafaelvfcarvalho@gmail.com">
                <img src="/img/emailBW.svg" alt="email link" />
                <span>rafaelvfcarvalho@gmail.com</span>
            </a>
            <div>
                <a href="https://web.whatsapp.com/send?phone=5571986844328&text=Ola Rafael">
                    <img src="/img/whatsappBW.svg" alt="whatsapp icon" />
                </a>
                <a href="https://www.linkedin.com/in/rafael-carvalho-dev/">
                    <img src="/img/linkedinBW.svg" alt="linkedin icon" />
                </a>
                <a href="https://www.facebook.com/rafael.victor.737">
                    <img src="/img/facebookBW.svg" alt="facebook icon" />
                </a>
                <a href="https://www.instagram.com/desenvolvedor.jr">
                    <img src="/img/instagram.svg" alt="instagram icon" />
                </a>
            </div>
        </SocialContainer>
    )
}