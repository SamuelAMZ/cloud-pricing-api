const { gcpArr } = require("../data.js");

const gcpS = async () => {
  const constantS = 0.02; //standard storage
  const constantN = 0.01; //nearline storage

  // standard storage
  const standard = [
    {
      storage: "100",
      pricePerMo: (100 * constantS).toFixed(2),
    },
    {
      storage: "500",
      pricePerMo: (500 * constantS).toFixed(2),
    },
    {
      storage: "1000",
      pricePerMo: (1000 * constantS).toFixed(2),
    },
  ];

  // standard storage
  const nearline = [
    {
      storage: "100",
      pricePerMo: (100 * constantN).toFixed(2),
    },
    {
      storage: "500",
      pricePerMo: (500 * constantN).toFixed(2),
    },
    {
      storage: "1000",
      pricePerMo: (1000 * constantN).toFixed(2),
    },
  ];

  standard.push({
    type: "standard",
    currency: "$",
    size: "GB",
  });
  nearline.push({
    type: "nearline",
    currency: "$",
    size: "GB",
  });

  // console.log(standard, nearline);

  const data = {
    storage: {
      standard: standard,
      nearline: nearline,
    },
  };

  gcpArr(data);
};

exports.gcpS = gcpS;
