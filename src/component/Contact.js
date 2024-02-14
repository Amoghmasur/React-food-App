
const Contact = () => {
  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Amogh</h1>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Phone Number</h2>
        <p className="text-gray-700">Please use the following phone number to contact Amogh:</p>
        <p className="text-lg font-semibold text-blue-500">+1234567890</p>
        <p className="text-gray-700">He may not be available immediately, so please schedule an appointment.</p>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Email Address</h2>
        <p className="text-gray-700">You can also reach out to Amogh via email:</p>
        <p className="text-lg font-semibold text-blue-500">amogh@example.com</p>
        <p className="text-gray-700">Please allow for a response within 1-2 business days.</p>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-semibold mb-4">Send Amogh a Message</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your Message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
