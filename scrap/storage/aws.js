const { awsArr } = require("../data.js");

const awsS = async () => {
  const constantS = 0.023; //standard storage
  const constantO = 0.01; //nearline storage

  // standard storage
  const S3Standard = [
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
  const S3OneZone = [
    {
      storage: 100,
      price: (100 * constantO).toFixed(3),
    },
    {
      storage: 500,
      price: (500 * constantO).toFixed(3),
    },
    {
      storage: 1000,
      price: (1000 * constantO).toFixed(3),
    },
  ];

  // console.log(S3Standard, S3OneZone);
  const data = {
    storage: {
      S3Standard: S3Standard,
      S3OneZone: S3OneZone,
    },
  };

  awsArr(data);
};

exports.awsS = awsS;
