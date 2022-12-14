import AuthLayout from 'layouts/AuthLayout/AuthLayout'
import React from 'react'
import './About.scss'

const About = () => {
    return (
        <AuthLayout>
            <div className="about-wrapper">
                <p>
                    A <span className="highlight"> iDerm</span> é uma empresa de cuidados dermatológicos focada em
                    atender o público utilizando o melhor da tecnologia e com isso conseguindo prestar com maior
                    qualidade e o menor preço possível.
                </p>
                <p>
                    Possuímos uma unidade fixa onde está instalada a infraestrutura principal para atender e dar suporte
                    as unidades móveis, que são equipadas com as principais ferramentas utilizadas em atendimentos
                    primários e cuidados básicos com a pele.
                </p>
                <p>
                    Os agendamentos de consultas e atendimentos são feitos de forma presencial, telefone ou via
                    aplicativo, disponibilizado para o público de forma gratuita.
                </p>
                <p>
                    Nosso diferencial é o alcance, devido as nossas instalações móveis, o atendimento pode chegar a
                    locais que esse tipo de serviço é de difícil acesso, devido à distância e valor do serviço.{' '}
                </p>

                <p>
                    <span>Missão:</span> Preservar a saúde, o a autoestima e a qualidade de vida das pessoas de baixa
                    renda, a partir de um atendimento profissional, ético e personalizado.
                </p>
                <p>
                    <span>Visão:</span> Manter e ampliar o nível da instituição e ser reconhecida na região como
                    referência no tratamento de dermatológico em populações carentes.
                </p>
                <p>
                    <span>Valores:</span>
                    <li>Responsabilidade social</li>
                    <li>Tratamentos flexíveis</li>
                </p>
            </div>
        </AuthLayout>
    )
}

export default About
