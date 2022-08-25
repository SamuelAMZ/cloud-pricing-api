const { azureArr } = require("../data.js");

//   GCP SCRAPPING
const azureN = async () => {
  const azure = [
    {
      provider: "AZURE",
      pricePerHour: "0.025",
      additionalNode: "0.01",
    },
  ];

  azure.push({
    type: "node balancers",
    currency: "$",
  });

  // console.log(azure);

  const data = {
    networking: {
      nodeBalancers: azure,
    },
  };

  azureArr(data);
};

exports.azureN = azureN;
