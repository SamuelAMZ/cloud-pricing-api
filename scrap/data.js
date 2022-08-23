const linodeData = [];
const ovhData = [];
const vultrData = [];
const digitalData = [];
const gcpData = [];
const awsData = [];
const azureData = [];

function bluePrint(providerData, data) {
  providerData.push(data);

  if (providerData.length === 4) {
    console.log(providerData);
  }
}

function linodeArr(data) {
  bluePrint(linodeData, data);
}
function ovhArr(data) {
  bluePrint(ovhData, data);
}
function vultrArr(data) {
  bluePrint(vultrData, data);
}
function digitalArr(data) {
  bluePrint(digitalData, data);
}
function gcpArr(data) {
  bluePrint(gcpData, data);
}
function awsArr(data) {
  bluePrint(awsData, data);
}
function azureArr(data) {
  bluePrint(azureData, data);
}

module.exports = {
  linodeArr,
  ovhArr,
  vultrArr,
  digitalArr,
  gcpArr,
  awsArr,
  azureArr,
};
