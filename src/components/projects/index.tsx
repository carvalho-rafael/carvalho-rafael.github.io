import { ProjectsComponentContainer } from "./styles";

export default function ProjectsComponent() {
    return (
        <ProjectsComponentContainer>
            <ul>
                <li>
                    <a href="https://github.com/carvalho-rafael/ecommerce-frontend" >
                        <img src="/img/portfolio/eshop.svg" alt="eshop-logo" />
                        <h3>EShop</h3>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/carvalho-rafael/chatjs" >
                        <img src="/img/portfolio/chat.svg" alt="chatjs" />
                        <h3>Chatjs</h3>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/carvalho-rafael/elabore" >
                        <img src="/img/portfolio/elabore.svg" alt="elabore-logo" />
                        <h3>Elabore</h3>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/carvalho-rafael/happy" >
                        <img src="/img/portfolio/happy.png" alt="happy" />
                        <h3>Happy</h3>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/carvalho-rafael/moveit-nlw4" >
                        <img src="/img/portfolio/moveit.png" alt="moveit" />
                        <h3>Move.it</h3>
                    </a>
                </li>
            </ul>

        </ProjectsComponentContainer>
    )
}