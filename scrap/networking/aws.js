const { awsArr } = require("../data.js");
//   AWS SCRAPPING
const awsN = async () => {
  const aws = [
    {
      title: "1 node",
      pricePerHour: "0,0225",
    },
  ];

  aws.push({
    type: "node balancers",
    currency: "$",
  });

  // console.log(aws);

  const data = {
    networking: {
      nodeBalancers: aws,
    },
  };

  awsArr(data);
};

exports.awsN = awsN;
