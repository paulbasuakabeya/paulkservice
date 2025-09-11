import React, { useState } from 'react';

const StayInTouch = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();

    if (!email) return;

    // TODO: Intégrer ici une requête vers une API ou un backend
    console.log("User subscribed with email:", email);

    setIsSubmitted(true);
    event.target.reset();
  };

  return (
    <div className='bg-violet-100'>
    <section className="mt-16 py-10 px-6 rounded-lg max-w-3xl mx-auto text-center ">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay In Touch</h3>
      <p className="text-gray-600 mb-6">
        Je reste à votre écoute pour toute question, projet ou demande d’information. N’hésitez pas à me contacter à tout moment.
      </p>
      <span className="block h-0.5 w-24 bg-blue-500 mx-auto mb-6 rounded-full"></span>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Subscribe
        </button>
      </form>

      {isSubmitted && (
        <p className="text-green-600 mt-4 font-medium">
          Thank you for subscribing!
        </p>
      )}
    </section>
    </div>
  );
};

export default StayInTouch;
