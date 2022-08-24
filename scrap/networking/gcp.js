const { gcpArr } = require("../data.js");

//   GCP SCRAPPING

const gcpN = async () => {
  const gcp = [
    {
      tilte: "1 node",
      pricePerHour: "0.025",
      additionalNode: "0.01",
    },
  ];

  gcp.push({
    type: "node balancers",
    currency: "$",
  });

  console.log(gcp);

  const data = {
    networking: {
      nodeBalancers: gcp,
    },
  };

  gcpArr(data);
};

exports.gcpN = gcpN;
