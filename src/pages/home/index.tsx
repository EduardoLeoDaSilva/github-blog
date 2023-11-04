import { GithubLogo, Buildings, Users } from 'phosphor-react';
import avatar from '../../assets/avatar.png'
import { CardBody, CardContainer, HomeContainer } from './styles';
export function Home() {
    return (






            <HomeContainer>
            <CardContainer>
                <img src={avatar} />
                <CardBody>
                    <div>
                        <div>
                            <h2>Cameron Wiliamson</h2>
                            <a>GITHUB</a>
                        </div>
                        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas.
                            Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                    </div>

                    <footer>
                        <span><GithubLogo /> cameronwll</span>
                        <span><Buildings /> Rocketseat</span>
                        <span><Users /> 32 seguidores</span>
                    </footer>
                </CardBody>
                </CardContainer>

            </HomeContainer>


    );
}