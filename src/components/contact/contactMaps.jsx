import React from "react";

const ContactMap = () => {
  return (
    <div className="w-full px-4 md:px-0 py-0 bg-gray-100">
      {/* <h2 className="text-3xl font-bold mb-6 text-center">Notre localisation</h2> */}

      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="ETS Paul K services"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.921426496624!2d15.290897900000001!3d-4.425739399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3baaeb783a4f%3A0xd3d4897b925b89e!2sPaul%20K%20Service!5e0!3m2!1sfr!2scd!4v1756387512685!5m2!1sfr!2scd" 
          width="100%"
          height="100%"
          style={{ border: 0 }} // ✅ Style en JSX
          allowFullScreen      // ✅ Attribut en camelCase sans égal
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase JSX
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
