const { awsArr } = require("../data.js");
//   AWS SCRAPPING
const awsN = async () => {
  const aws = {
    provider: "AWS",
    price: "0,0225",
  };

  // console.log(aws);
  const data = {
    networking: {
      nodeBalancers: aws,
    },
  };

  awsArr(data);
};

exports.awsN = awsN;
