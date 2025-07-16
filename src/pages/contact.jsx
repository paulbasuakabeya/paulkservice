import ContactPage from "../components/contact/contact";

const Contact = () => {
    return (
      <div> 
        <div className="h-40 flex flex-col justify-center items-center bg-violet-100">
          <h2 className="text-4xl font-bold text-center">Contact</h2>
          <div className="w-20 h-0.5 bg-blue-500 mt-2 rounded"></div>
       </div>
       <ContactPage/>
        
      </div>
    );
  };
  export default Contact;
