import { NavLink } from 'react-router-dom';

/* eslint-disable max-len */
function Terms() {
  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight });
  };

  return (
    <article className="flex flex-col text-[#ccd6f6] w-full h-full 2xl:h-[100dvh] px-6 mt-6">
      <div className="md:absolute mb-6">
        <NavLink to="/" onClick={handleScrollToBottom} className="inline-flex items-center px-4 py-2 bg-[#e83e8c] hover:bg-[#e83e8dbb] text-white text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Retour
        </NavLink>
      </div>
      <div className="max-w-[900px] flex flex-col justify-center h-full mx-auto mb-10">
        <h2 className="text-4xl font-bold underline decoration-[#e83e8c] decoration-4 underline-offset-4 mb-4 max-w-fit">Conditions générales d'utilisation</h2>
        <p>
          En utilisant ce portfolio, vous acceptez les présentes Conditions Générales d'Utilisation (CGU). Veuillez les lire attentivement avant d'accéder au contenu ou d'utiliser les fonctionnalités du portfolio.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Objectif du portfolio</h3>
        <p>
          Ce portfolio a pour objectif de présenter les compétences, les capacités et les projets développés par Mr. Erwann Rousseau. Il vise à mettre en valeur les réalisations professionnelles ou personnelles dans le domaine du développement web. L'utilisation du portfolio est réservée à des fins d'information, de démonstration et de prise de contact.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Droits de propriété intellectuelle</h3>
        <p>
          Tous les contenus présents dans ce portfolio, tels que les textes, les images, les vidéos, les logos de technologies de programmation (libres de droits) et le PDF de mon CV (autorisé au téléchargement), sont protégés par les lois sur le droit d'auteur et les autres lois applicables. Sauf indication contraire, Mr. Erwann Rousseau est le titulaire des droits d'auteur de ces contenus. Vous êtes autorisé à utiliser les logos de technologies de programmation conformément à leurs conditions d'utilisation spécifiques, et vous êtes également autorisé à télécharger et à utiliser le PDF de mon CV à des fins non commerciales, personnelles et éducatives.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Utilisation autorisée</h3>
        <p>
          Vous êtes autorisé à accéder au contenu de ce portfolio et à l'utiliser à des fins non commerciales, personnelles et éducatives. Vous pouvez visualiser, partager et éventuellement télécharger le contenu dans le respect des droits de propriété intellectuelle. Toute utilisation commerciale, modification ou reproduction du contenu est strictement interdite sans autorisation préalable de Mr. Erwann Rousseau.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Liens externes</h3>
        <p>
          Ce portfolio peut contenir des liens vers des sites externes, tels que LinkedIn et GitHub, qui sont pertinents pour les activités professionnelles de Mr. Erwann Rousseau. Ces liens sont fournis à titre de référence et pour faciliter l'accès à des informations supplémentaires. Mr. Erwann Rousseau décline toute responsabilité quant au contenu, à la disponibilité et aux pratiques de confidentialité de ces sites externes.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Responsabilité</h3>
        <p>
          L'utilisation de ce portfolio se fait à vos propres risques. Mr. Erwann Rousseau ne peut garantir l'exactitude, l'exhaustivité ou la disponibilité continue du contenu. Mr. Erwann Rousseau décline toute responsabilité pour tout préjudice résultant de l'utilisation ou de l'impossibilité d'utiliser le portfolio, y compris les dommages directs, indirects, consécutifs, spéciaux ou exemplaires.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Modifications des CGU</h3>
        <p>
          Mr. Erwann Rousseau se réserve le droit de modifier les présentes CGU à tout moment et sans préavis. Les modifications entrent en vigueur dès leur publication sur le portfolio. Il est de votre responsabilité de consulter régulièrement les CGU pour prendre connaissance des éventuelles mises à jour. En continuant à utiliser ce portfolio après l'annonce des modifications, vous acceptez les nouvelles CGU.
        </p>
        <h3 className="text-2xl font-bold mt-4 mb-2">Dispositions générales</h3>
        <p>
          Si l'une des dispositions des présentes CGU est jugée invalide, illégale ou inapplicable, cela n'affectera pas la validité, la légalité ou l'applicabilité des autres dispositions. Les présentes CGU sont régies par les lois en vigueur en France et tout litige relatif à ces CGU sera soumis à la juridiction exclusive des tribunaux compétents de France.
        </p>
        <p>
          En utilisant ce portfolio, vous reconnaissez avoir lu, compris et accepté les présentes Conditions Générales d'Utilisation. Si vous n'acceptez pas ces CGU, veuillez ne pas accéder au contenu ni utiliser les fonctionnalités du portfolio.
        </p>
      </div>
    </article>
  );
}

export default Terms;
