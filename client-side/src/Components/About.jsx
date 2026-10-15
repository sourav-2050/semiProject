  
import blood from './../assets/blood.jpg'
const About = () => {
  return (
     <div className='bg-base-100'>
      <div className="hero min-h-[70vh]   border-base-200">
      <div className="hero-content flex-col lg:flex-row gap-12 max-w-6xl mx-auto px-6 py-12">
        
        {/* Left Side: Image */}
        <img
          src={blood}
          alt="About Voluntary Blood Donation"
          className="max-w-xs sm:max-w-sm rounded-2xl shadow-xl border border-base-200 object-cover"
        />

        {/* Right Side: Content */}
        <div className="max-w-xl">
          <span className="badge badge-error badge-outline font-medium mb-3">
            About Our Mission
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-red-500 tracking-tight leading-tight">
            Bridging the gap to <br />
            <span className="text-red-500">save human lives.</span>
          </h1>

          <p className="py-6 text-slate-600 text-base leading-relaxed">
            Finding blood in critical medical emergencies shouldn't be stressful. We built a direct, voluntary platform connecting donors directly with recipients—ensuring zero delays, complete transparency, and 100% free service for everyone.
          </p>

          <div className="grid grid-cols-2 gap-4 pb-6">
            <div className="border-l-2 border-error pl-3">
              <h4 className="font-bold text-blue-800 text-sm">Direct Contact</h4>
              <p className="text-xs text-blue-500">No middleman delays</p>
            </div>
            <div className="border-l-2 border-slate-200 pl-3">
              <h4 className="font-bold text-blue-800 text-sm">100% Free</h4>
              <p className="text-xs text-blue-500">Voluntary non-profit network</p>
            </div>
          </div>

        </div>

      </div>
    </div>
     <div className='items-center justify-center text-center'>
  <h1 className="text-3xl font-bold text-red-500">What We Do</h1>

  <ul className= "ml-6 mt-4">
    <li>
      <div className="p-6 border rounded-xl shadow-md bg-blue-950">
        <h1>Find Blood Donors</h1>
        <p>
          We help people find suitable blood donors quickly.
        </p>
      </div>
    </li>
    <li>
      <div className="p-6 border rounded-xl shadow-md bg-blue-950">
        <h1>Request Blood</h1>
        <p>Users can request blood when they need it urgently.</p>
      </div>
    </li>
    <li>
      <div className="p-6 border rounded-xl shadow-md bg-blue-950 ">
        <h1>Quick Communication</h1>
        <p> We help donors and recipients communicate quickly.</p>
      </div>
    </li>
  </ul>
</div>
     </div>
  );
};

export default About;