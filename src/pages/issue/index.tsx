import { ArrowLeft, Calendar, Chat, GithubLogo } from "phosphor-react";
import { CardBody, CardContainer, FillContainer, IssueContainer, RepoContent } from "./styles";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../api/github-api";
import { set } from "date-fns";

interface RepoIssue {
    title: string;
    id: string;
    created_at: Date;
    body: string;
}

export function Issue() {

    let [URLSearchParams, urlSetSearchParam] = useSearchParams();
    let [issue, setIssueSate] = useState<RepoIssue>({} as RepoIssue);
    const title = URLSearchParams.get('title');
    const repo = URLSearchParams.get('repo');
    async function fetchIssueDetails(){
        const result = await api.get(`search/issues?q=${title}+repo:${repo}`)
        setIssueSate((result.data.items as RepoIssue[])[0])
    }

    useEffect(()=> {
        fetchIssueDetails().finally(() => console.log('feito'))
    }, [])

    return (
        <IssueContainer>
            <FillContainer>
                <CardContainer>
                    <CardBody>
                        <div>
                            <div>
                                <NavLink to="/"><ArrowLeft /> Voltar</NavLink>
                                <a>GITHUB</a>
                            </div>
                            <h1>{issue.title}</h1>
                        </div>

                        <footer>
                            <span><GithubLogo /> cameronwll</span>
                            <span><Calendar /> Rocketseat</span>
                            <span><Chat /> 32 seguidores</span>
                        </footer>
                    </CardBody>
                </CardContainer>
            </FillContainer>

            <RepoContent>
                <p>
                 {issue.body}
                </p>
                <br></br>
            </RepoContent>

        </IssueContainer>
    );
}