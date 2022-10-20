type Information = typeof information[0];

const information = [
  {
    title: "Designação do projecto:",
    content: "ADAPTAR-RAM",
  },
  {
    title: "Código do projecto:",
    content: "M1420-03-08B9-FEDER-000595",
  },
  {
    title: "Objetivo principal:",
    content:
      "Apoiar projetos do PME (micro, pequenas e médias empresas) na adaptação dos seus estabelecimentos face às novas condições de distanciamento físico e de higiene no contexto da pandemia COVID-19",
  },
  {
    title: "Região de intervenção:",
    content: "Região Autónoma da Madeira",
  },
  {
    title: "Beneficiários:",
    content: "City Bubbles - Animação Turística Unipessoal Lda",
  },
  {
    title: "",
    content: [
      {
        title: "Data de aprovação:",
        content: "18-03-2020",
      },
      {
        title: "Data de início:",
        content: "18-03-2020",
      },
      {
        title: "Data de conclusão:",
        content: "31-12-2020",
      },
      {
        title: "Custo total elegível:",
        content: "625,64 EUR",
      },
      {
        title: "FEDER:",
        content: "427,47 EUR",
      },
      {
        title: "Apoio Público Regional:",
        content: "75,44 EUR",
      },
    ],
  },
  {
    title: "Objetivos:",
    content:
      "O objetivo é criar novas condições de distanciamento e de higiene no contexto da pandemia COVID-19, garantindo o cumprimento das normas estabelecidas.",
  },
  {
    title: "Atividades (resultados esperados/atingidos):",
    content:
      "Com o ADAPTAR - RAM, a empresa pretende ter maior capacidade de resposta ao criar condições à retoma da atividade, face à situação em que vivemos.",
  },
];

const renderContent = ({ title, content }: Information) => {
  if (typeof content === "string") {
    return (
      <div className="flex flex-col gap-1">
        <span className="text-gray-900 font-bold">{title}</span>
        <span className="text-gray-700">{content}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <span>{title}</span>

      <div>{content.map(renderContent)}</div>
    </div>
  );
};

export default function EUAward() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto">
        <div className="mx-auto flex flex-col items-center justify-center">
          <h2
            id="faq-heading"
            className="text-4xl font-bold tracking-tight text-gray-900"
          >
            EU Award
          </h2>
          <section
            className="flex flex-col bg-white gap-4"
            aria-labelledby="contact-heading"
          >
            {information.map(renderContent)}
          </section>
        </div>
      </div>
    </div>
  );
}
