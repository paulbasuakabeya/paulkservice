import { Helmet } from "react-helmet-async";
import ContactPage from "../components/contact/contact";
import ContactMap from "../components/contact/contactMaps";

const Contact = () => {
  return (
    <div>
      {/* --- Balises SEO --- */}
      <Helmet>
        <title>Contact | Paul K Service</title>
        <meta
          name="description"
          content="Contactez Paul K Service pour vos projets de développement web, marketing digital ou assistance informatique. Nous sommes à votre écoute pour concrétiser vos idées."
        />
        <meta
          name="keywords"
          content="Paul K Service, contact, développement web, marketing digital, assistance informatique, Kinshasa, Congo"
        />
        <meta property="og:title" content="Contact - Paul K Service" />
        <meta
          property="og:description"
          content="Besoin d’un site web, d’une stratégie digitale ou d’une assistance technique ? Contactez Paul K Service dès aujourd’hui."
        />
        <meta property="og:url" content="https://paulkservice.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://paulkservice.vercel.app/logo.png" />
      </Helmet>

      {/* --- Section titre --- */}
      <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
        <h2 className="text-4xl font-bold text-center">Contact</h2>
        <div className="w-20 h-0.5 bg-blue-500 mt-2 rounded"></div>
      </div>

      {/* --- Contenu de la page --- */}
      <ContactPage />
      <ContactMap />
    </div>
  );
};

export default Contact;



// import ContactPage from "../components/contact/contact";
// import ContactMap from "../components/contact/contactMaps";

// const Contact = () => {
//     return (
//       <div> 
//         <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
//           <h2 className="text-4xl font-bold text-center">Contact</h2>
//           <div className="w-20 h-0.5 bg-blue-500 mt-2 rounded"></div>
//        </div>
//        <ContactPage/>
//        <ContactMap/>
        
//       </div>
//     );
//   };
//   export default Contact;
