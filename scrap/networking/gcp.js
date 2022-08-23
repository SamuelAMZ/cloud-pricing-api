const { gcpArr } = require("../data.js");

//   GCP SCRAPPING

const gcpN = async () => {
  const gcp = {
    provider: "GCP",
    price: {
      firstFiveForwading: "0.025",
      additionalForwading: "0.01",
    },
  };

  // console.log(gcp);
  const data = {
    networking: {
      nodeBalancers: gcp,
    },
  };

  gcpArr(data);
};

exports.gcpN = gcpN;
