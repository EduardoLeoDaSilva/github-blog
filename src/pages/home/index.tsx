import { GithubLogo, Buildings, Users } from 'phosphor-react';
import avatar from '../../assets/avatar.png'
import { CardBody, CardContainer, FillContainer, HomeContainer, SearchInputContainer } from './styles';
import Card from '../../components/card';
import { NavLink } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../../api/github-api';
import { useForm } from 'react-hook-form';

interface UserResponse {
    bio: string;
    name: string;
    company: string;
    followers: string;
    html_url: string;
    node_id: string;
    avatar_url: string;
    login: string
}

interface RepoIssue {
    title: string;
    id: string;
    created_at: Date;
    body: string;
}

export function Home() {

    const [user, userState] = useState<UserResponse>({} as UserResponse)
    const [repos, setReposState] = useState<RepoIssue[]>([])
    const [search, setSearchState] = useState<string>('')
    const repo = 'github-blog'


    useEffect(() => {
        async function fetchRepositories() {
            const result = await api.get<UserResponse>('users/EduardoLeoDaSilva');
            const resultIssue = await api.get('search/issues?q=repo:EduardoLeodasilva/github-blog');
            userState(result.data)
            setReposState(resultIssue.data.items)
        }
        fetchRepositories();
    }, [])

    async function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchState((state) => {
            state = e.target.value;
            if (e.target.value != '' && e.target.value) {
                api.get(`search/issues?q=${state}+repo:${user.login}/${repo}`).then((res) => {
                    setReposState(res.data.items);

                })
            } else {
                api.get('search/issues?q=repo:EduardoLeodasilva/github-blog').then((res) => {
                    setReposState(res.data.items)
                })
            }
            return state;
        })


    }


    return (
        <HomeContainer>
            <FillContainer>
                <CardContainer>
                    <img src={user?.avatar_url} />
                    <CardBody>
                        <div>
                            <div>
                                <h2>{user?.name}</h2>
                                <a href={user?.html_url}>GITHUB</a>
                            </div>
                            <p>{user?.bio}</p>
                        </div>

                        <footer>
                            <span><GithubLogo /> {user?.login}</span>
                            <span><Buildings /> {user?.company}</span>
                            <span><Users /> {user?.followers} seguidores</span>
                        </footer>
                    </CardBody>
                </CardContainer>
            </FillContainer>
            <SearchInputContainer>
                <div>
                    <h2>Publicações</h2>
                    <span>6 publicações</span>
                </div>
                <input value={search} onChange={handleInputChange} placeholder='Buscar conteúdo' type='text' />

            </SearchInputContainer>


            <ul>
                {
                    repos.map((x) => {
                        return (
                            <li>
                                <NavLink to={`/issue?title=${x.title}&repo=${user.login}/${repo}`}><Card title={x.title} content={x.body} timeCreated={x.created_at.toString()} /></NavLink>
                            </li>
                        )
                    })
                }


            </ul>



        </HomeContainer>

    );
}