const { azureArr } = require("../data.js");

//   GCP SCRAPPING
const azureN = async () => {
  const azure = {
    provider: "AZURE",
    price: {
      firstFiveForwading: "0.025",
      additionalForwading: "0.01",
    },
  };

  // console.log(azure);

  const data = {
    networking: {
      nodeBalancers: azure,
    },
  };

  azureArr(data);
};

exports.azureN = azureN;
