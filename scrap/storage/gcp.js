const { gcpArr } = require("../data.js");

const gcpS = async () => {
  const constantS = 0.02; //standard storage
  const constantN = 0.01; //nearline storage

  // standard storage
  const standard = [
    {
      storage: 100,
      price: (100 * constantS).toFixed(3),
    },
    {
      storage: 500,
      price: (500 * constantS).toFixed(3),
    },
    {
      storage: 1000,
      price: (1000 * constantS).toFixed(3),
    },
  ];

  // standard storage
  const nearline = [
    {
      storage: 100,
      price: (100 * constantN).toFixed(3),
    },
    {
      storage: 500,
      price: (500 * constantN).toFixed(3),
    },
    {
      storage: 1000,
      price: (1000 * constantN).toFixed(3),
    },
  ];

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
