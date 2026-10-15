import info1 from "./../assets/infomation-1.avif"
import info2 from "./../assets/information-2.avif"
import blood from "./../assets/blood.jpg"
const Information = () => {
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-4xl mx-auto text-center px-6 mb-12">

        <span className="badge badge-error badge-outline font-medium mb-2">
          Knowledge Base
        </span>

        <h2 className="text-3xl sm:text-4xl font-semibold text-white">
          Essential Blood Donation Information
        </h2>

        <p className=" font-semibold text-white mt-2">
          Everything you need to know about blood donation.
        </p>

      </div>


      
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="hero bg-base-100 border border-base-200 rounded-3xl shadow-sm">

          <div className="hero-content flex-col lg:flex-row gap-8 p-8 w-full">

            <img
              src={info1}
              alt="Blood Donation"
              className="w-full lg:w-96 h-64 object-cover rounded-2xl"
            />

            <div>

              <span className="badge badge-error badge-outline mb-3">
                Save 3 Lives
              </span>

              <h3 className="text-2xl font-bold text-red-500">
                Why Should You Donate Blood?
              </h3>

              <p className="py-4 text-white">
                There is no synthetic replacement for human blood.
                One single bag of donated blood can help save multiple
                patients in critical condition.
              </p>

              <div className="border-l-2 border-error pl-3 mb-5">
                <p className="text-xs text-blue-800">
                  KEY HIGHLIGHT
                </p>

                <p className="font-bold text-blue-500">
                  1 Bag = 3 Patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="hero bg-base-100 border border-base-200 rounded-3xl shadow-sm">

          <div className="hero-content flex-col lg:flex-row-reverse gap-8 p-8 w-full">

            <img
              src={info2}
              alt="Blood Donor Health"
              className="w-full lg:w-96 h-64 object-cover rounded-2xl"
            />

            <div>

              <span className="badge badge-error badge-outline mb-3">
                Donor Health Benefits
              </span>

              <h3 className="text-2xl font-bold text-red-500">
                Health Perks for Donors
              </h3>

              <p className="py-4 text-white">
                Blood donation can support healthy blood cell production
                and provides an opportunity for basic health screening.
              </p>

              <div className="border-l-2 border-error pl-3 mb-5">
                <p className="text-xs text-blue-800">
                  KEY HIGHLIGHT
                </p>

                <p className="font-bold text-blue-500">
                  Free Blood Screening
                </p>
              </div> 
            </div>
           </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="hero bg-base-100 border border-base-200 rounded-3xl shadow-sm">

          <div className="hero-content flex-col lg:flex-row gap-8 p-8 w-full">

            <img
              src={blood}
              alt="Blood Regeneration"
              className="w-full lg:w-96 h-64 object-cover rounded-2xl"
            />

            <div>

              <span className="badge badge-error badge-outline mb-3">
                Donation Cycle
              </span>

              <h3 className="text-2xl font-bold text-red-500">
                How Fast Does Blood Regenerate?
              </h3>

              <p className="py-4 text-white">
                Your body replaces the donated blood over time.
                Plasma is restored relatively quickly, while red blood
                cells take several weeks to replenish.
              </p>

              <div className="border-l-2 border-error pl-3 mb-5">
                <p className="text-xs text-blue-800">
                  KEY HIGHLIGHT
                </p>

                <p className="font-bold text-blue-500">
                  Blood Regenerates Naturally
                </p>
              </div> 
             </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Information;
