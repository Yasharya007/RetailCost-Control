import { useState,useEffect } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Country } from "country-state-city";


const country = Country.getAllCountries();

console.log(country);

function SelectorInput({setfunction}) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [query, setQuery] = useState("");

  const filteredCountry =
    query === ""
      ? country
      : country.filter((person) =>
          person.name.toLowerCase().includes(query.toLowerCase())
        );

        useEffect(()=>{
          setfunction((prev)=>({
            ...prev,
            customerCountry:selectedPerson?.isoCode
          }))
        },[selectedPerson])
  return (
    <div className="text-black">
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <div className="relative mt-1">
          <Combobox.Input
            className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            displayValue={(person) => (person ? person.name : "")}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Combobox.Button>
        </div>
        <Transition
          as="div"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute mt-1 max-h-60 w-[29%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCountry.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredCountry.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-indigo-600 text-white" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-indigo-600"
                          }`}
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414L9 14.414l-3.707-3.707a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414z"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}

export default SelectorInput;
