 

const Home = () => {
  return (
    <div className="container mx-auto p-6 space-y-12">
      
      {/*how important*/}
      <section className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          How Blood Donation Saves Lives ? 
        </h1>
        <p className="text-gray-700 mb-6">
          There is no artificial substitute for human blood—patients in medical emergencies rely entirely on voluntary donors.
        </p>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
            <h2 className="text-xl font-semibold text-gray-800">Emergency & Trauma Cases</h2>
            <p className="text-gray-600">
              Victims of severe accidents, cardiac surgeries, and major organ transplants require immediate transfusions to survive.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
            <h2 className="text-xl font-bold text-gray-800">Maternal & Child Health</h2>
            <p className="text-gray-600">
              Mothers suffering from severe postpartum hemorrhaging during childbirth, as well as premature infants, depend heavily on blood transfusions.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-red-100">
            <h2 className="text-xl font-bold text-gray-800">Cancer & Thalassemia Patients</h2>
            <p className="text-gray-600">
              Children with Thalassemia need regular transfusions every 1 to 2 months. Cancer patients require frequent platelet transfusions following chemotherapy.
            </p>
          </div>

          <div className="bg-red-600 text-white p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold">1 Bag = 3 Lives</h2>
            <p>
              A single donation of Whole Blood can be separated into Red Blood Cells, Plasma, and Platelets—saving up to three different patients.
            </p>
          </div>
        </div>
      </section>


      {/*afraid section*/}
      <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Why You Shouldn't Be Afraid to Donate
        </h1>
        <p className="text-gray-700 mb-6">
          Many people hesitate to give blood due to common myths, but medically, the process is completely safe:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Minimal Needle Pain</h2>
            <p className="text-gray-600">
              You only feel a minor pinch for 1–2 seconds when the needle is inserted. The rest of the process is painless.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Quick Recovery</h2>
            <p className="text-gray-600">
              Taking a 10–15 minute rest and drinking juice or fluid right after donating fully restores your energy.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Rapid Blood Regeneration</h2>
            <p className="text-gray-600">
              Your body’s bone marrow immediately produces new cells. Fluid volume (plasma) restores within 24–48 hours.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">Zero Risk of Infection</h2>
            <p className="text-gray-600">
              Single-use, sterile, and disposable equipment is used for every donor, eliminating any risk.
            </p>
          </div>
        </div>
      </section>


       {/* key details */}
      <section className="bg-red-50 text-black p-6 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold text-black-500 mb-4">
          Key Details About Human Blood
        </h1>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl text-black font-bold mb-2">4 Main Components:</h2>
            <ul className="list-disc list-inside space-y-1 text-black">
              <li><strong className="text-black">Plasma (55%):</strong> Liquid portion transporting nutrients and proteins.</li>
              <li><strong className="text-black">Red Blood Cells (RBCs):</strong> Delivers oxygen from lungs to the rest of the body.</li>
              <li><strong className="text-black">White Blood Cells (WBCs):</strong> Forms the immune system to fight off infections.</li>
              <li><strong className="text-black">Platelets:</strong> Enables blood clotting to stop bleeding effectively.</li>
            </ul>
          </div>

          <div className="border-t border-gray-800 pt-4 space-y-2">
            <div>
              <h3 className="font-bold text-black">Total Volume in Body</h3>
              <p className="text-black">An average healthy adult has about 4.5 to 5.5 liters of blood.</p>
            </div>

            <div>
              <h3 className="font-black text-black">Donation Amount</h3>
              <p className="text-black-400">Takes only 350 to 450 mL (roughly 8–10% of total supply).</p>
            </div>

            <div>
              <h3 className="font-bold text-black-200">Natural Life Cycle</h3>
              <p className="text-black">RBCs replace themselves every 120 days. Donating every 3 months (90 days) is completely safe.</p>
            </div>
          </div>
        </div>
      </section>


       {/* health& benefits */}
      <section className="bg-white p-6 rounded-2xl border border-black-100 shadow-sm">
        <h1 className="text-3xl font-bold text-black mb-4">
          Proven Health Benefits for Donors
        </h1>
        <p className="text-gray-700 mb-6">
          Donating blood doesn't just help the recipient—it actively improves the donor's health as well:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
            <h2 className="text-lg font-bold text-gray-800">Reduces Heart Attack & Stroke Risks</h2>
            <p className="text-gray-600">
              Regular donation helps regulate excessive iron levels in the bloodstream, preventing arterial blockage and lowering cardiovascular risks.
            </p>
          </div>

          <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
            <h2 className="text-lg font-bold text-gray-800">Stimulates Fresh Cell Production</h2>
            <p className="text-gray-600">
              Donating prompts the body to generate fresh, highly functional red blood cells, enhancing overall physical stamina.
            </p>
          </div>

          <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
            <h2 className="text-lg font-bold text-gray-800">Free Health Screening</h2>
            <p className="text-gray-600">
              Prior to donating, blood pressure, hemoglobin, and screenings for 5 major infectious diseases are checked free of charge.
            </p>
          </div>

          <div className="p-4 bg-red-50/50 rounded-xl border border-red-100">
            <h2 className="text-lg font-bold text-gray-800">Burns Calories</h2>
            <p className="text-gray-600">
              The body expends approximately 650 calories to replenish the donated blood cells, boosting your metabolic rate.
            </p>
          </div>

          <div className="p-4 bg-red-50/50 rounded-xl border border-red-100 md:col-span-2">
            <h2 className="text-lg font-bold text-gray-800">Mental Well-being</h2>
            <p className="text-gray-600">
              Knowing that your selfless act directly saved someone's life provides a profound sense of purpose and psychological fulfillment.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;