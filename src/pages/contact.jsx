import ContactPage from "../components/contact/contact";
import ContactMap from "../components/contact/contactMaps";

const Contact = () => {
    return (
      <div> 
        <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
          <h2 className="text-4xl font-bold text-center">Contact</h2>
          <div className="w-20 h-0.5 bg-blue-500 mt-2 rounded"></div>
       </div>
       <ContactPage/>
       <ContactMap/>
        
      </div>
    );
  };
  export default Contact;
