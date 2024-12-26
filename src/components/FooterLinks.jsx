import React, { useState } from "react";

const footerData = [
  {
    title: "Case Studies",
    links: [
      "Adversarial Data Labeling",
      "Content Moderation",
      "Search Ranking",
      "Reinforcement Learning with Human Feedback",
      "Training Next-Gen Command LLM",
    ],
  },
  {
    title: "Company",
    links: ["Home", "Blog", "About", "Careers", "Contact"],
  },
  {
    title: "Developers",
    links: ["Python SDK", "API Documentation", "Support"],
  },
  {
    title: "Platform",
    links: ["Pricing", "Use Cases", "Customers"],
  },
];

const FooterLinks = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:w-full mt-20">
      {/* Első rész */}
      <div className="lg:flex text-white">
        {footerData.slice(0, 2).map((section, index) => (
          <div key={index} className="flex flex-col lg:mr-10 lg:w-[400px] pb-5 px-8 lg:px-0">
            {/* Fejléc (kattintható kis kijelzőn) */}
            <div
              className="flex flex-row justify-between items-end pb-6 lg:cursor-default cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-2xl font-medium text-white">{section.title}</h3>
              <img
                src="/assets/icons/arrowDown.svg"
                alt=""
                height={36}
                width={36}
                className={`lg:hidden transform transition-transform ${
                  openSection === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {/* Linkek megjelenítése */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openSection === index ? "max-h-screen" : "max-h-0"
              } lg:max-h-screen lg:overflow-visible`}
            >
              {section.links.map((link, i) => (
                <div
                  key={i}
                  className={`group items-center cursor-pointer ${
                    openSection === index ? "flex" : "hidden"
                  } sm:flex lg:flex`}
                >
                  <div className="w-3 h-3 rounded-full border-[1px] border-[#9747FF] group-hover:bg-[#9747FF]" />
                  <p className="text-[#716083] group-hover:text-white ml-2">{link}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Második rész */}
      <div className="lg:flex text-white">
        {footerData.slice(2).map((section, index) => (
          <div
            key={index + 2}
            className="flex flex-col lg:mr-10 lg:w-[400px] pb-5 px-8 lg:px-0"
          >
            <div
              className="flex flex-row justify-between items-end pb-6 lg:cursor-default cursor-pointer"
              onClick={() => toggleSection(index + 2)}
            >
              <h3 className="text-2xl font-medium text-white">{section.title}</h3>
              <img
                src="/assets/icons/arrowDown.svg"
                alt=""
                height={36}
                width={36}
                className={`lg:hidden transform transition-transform ${
                  openSection === index + 2 ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openSection === index + 2 ? "max-h-screen" : "max-h-0"
              } lg:max-h-screen lg:overflow-visible`}
            >
              {section.links.map((link, i) => (
                <div
                  key={i}
                  className={`group items-center cursor-pointer ${
                    openSection === index + 2 ? "flex" : "hidden"
                  } sm:flex lg:flex`}
                >
                  <div className="w-3 h-3 rounded-full border-[1px] border-[#9747FF] group-hover:bg-[#9747FF]" />
                  <p className="text-[#716083] group-hover:text-white ml-2">{link}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
