import React, { useMemo, useState } from "react";

const App = () => {
  const [info, setInfo] = useState({ weight: "72", height: "186" });

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  }

  const bmi = useMemo(() => {
    const heightMeters = info.height / 100;
    const bmi = info.weight / (heightMeters * heightMeters);
    return bmi.toFixed(1);
  }, [info]);

  return (
    <div className="md:w-2/4 lg:w-2/6">
      <section className="bg-blue-900 rounded-t-lg shadow-sm shadow-red-50">
        <h1 className="text-white font-bold text-3xl p-4 text-center tracking-wider">
          BMI Calculator
        </h1>
      </section>
      <main className="bg-white p-8 rounded-b-lg shadow-sm shadow-red-50">
        <fieldset>
          <label htmlFor="weight" className="block">
            Kilo: {info.weight} kg
            <input
              className="block w-full"
              id="weight"
              name="weight"
              type="range"
              min="0"
              max="300"
              onChange={handleChange}
              value={info.weight}
              aria-label="Weight in Kg"
            />
          </label>
          <label htmlFor="height" className="block mt-4">
            Boy: {info.height} cm
            <input
              className="block w-full"
              id="height"
              name="height"
              type="range"
              min="0"
              max="250"
              onChange={handleChange}
              value={info.height}
              aria-label="Weight in Cm"
            />
          </label>
        </fieldset>
        <div className="flex justify-center items-center flex-col gap-2 mt-4">
          <p className="text-xl font-semibold underline underline-offset-4">
            BMI
          </p>
          <p className="bg-blue-900 inline-block text-white rounded-full p-2 font-semibold">
            {bmi}
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
