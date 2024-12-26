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
    <div className="flex flex-col lg:w-full pt-20 lg:pl-48">
      {/* Első rész */}
      <div className="lg:flex text-white lg:space-x-16">
        {footerData.slice(0, 2).map((section, index) => (
          <div key={index} className="flex flex-col lg:mr-10  pb-5 px-6 lg:px-0 ">
            {/* Fejléc (kattintható kis kijelőn) */}
            <div
              className="flex flex-row justify-between items-center pb-6 lg:cursor-default cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-2xl font-medium text-white leading-none lg:text-md">
                {section.title}
              </h3>
              <img
                src="/assets/icons/arrowDown.svg"
                alt=""
                className={`lg:hidden transform transition-transform h-9 w-9 ${
                  openSection === index ? "rotate-180" : ""
                }`}
                style={{ verticalAlign: "middle" }}
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
                  className={`group items-center cursor-pointer pb-5 lg:pb-0 ${
                    openSection === index ? "flex" : "hidden"
                  } sm:flex lg:flex`}
                >
                  <div className="w-3 h-3 rounded-full border-[1px] border-[#9747FF] group-hover:bg-[#9747FF]" />
                  <p className=" text-white lg:text-[#716083] group-hover:text-white ml-4 lg:ml-2 text-lg lg:text-sm">{link}</p>
                </div>
              ))}
            </div>
          </div>

        ))}
      </div>

      {/* Második rész */}
      <div className="lg:flex text-white lg:space-x-56">
        {footerData.slice(2).map((section, index) => (
          <div
            key={index + 2}
            className="flex flex-col lg:mr-10  pb-5 px-6 lg:px-0 "
          >
            <div
              className="flex flex-row justify-between items-center pb-6 lg:cursor-default cursor-pointer"
              onClick={() => toggleSection(index + 2)}
            >
              <h3 className="text-2xl font-medium text-white leading-none lg:text-md">
                {section.title}
              </h3>
              <img
                src="/assets/icons/arrowDown.svg"
                alt=""
                className={`lg:hidden transform transition-transform h-9 w-9 ${
                  openSection === index + 2 ? "rotate-180" : ""
                }`}
                style={{ verticalAlign: "middle" }}
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
                  className={`group items-center cursor-pointer pb-5 lg:pb-0 ${
                    openSection === index + 2 ? "flex" : "hidden"
                  } sm:flex lg:flex`}
                >
                  <div className="w-3 h-3 rounded-full border-[1px] border-[#9747FF] group-hover:bg-[#9747FF]" />
                  <p className=" text-white lg:text-[#716083] group-hover:text-white ml-4 lg:ml-2 text-lg lg:text-sm">{link}</p>
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
