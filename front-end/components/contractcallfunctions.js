import { networkType, myStxAddress, userSession } from "./auth";
import {
  callReadOnlyFunction,
  cvToJSON,
  standardPrincipalCV,
  uintCV,
  stringAsciiCV,
  bufferCV,
  responseErrorCV,
  responseOkCV,
  trueCV,
  falseCV,
} from "@stacks/transactions";

import { openContractCall } from "@stacks/connect";

let currentuser = "none";
const MyContractName = "VoteCasting";
const MyContractAddress = "ST2C20XGZBAYFZ1NYNHT1J6MGMM0EW9X7PFZZEXA6";

export default async function appCallReadOnlyFunction(optionsProps) {
  if (!optionsProps)
    return new Promise((resolve, reject) => reject("no arguments provided"));

  const options = {
    ...optionsProps,
    network: networkType(),
    senderAddress: myStxAddress(),
  };

  return callReadOnlyFunction(options)
    .then((response) => {
      const responseJson = cvToJSON(response);

      return new Promise((resolve, reject) => resolve(responseJson));
    })
    .catch((e) => {
      return new Promise((resolve, reject) => reject(e));
    });
}

const RegisterUser = (CNIC, DOB) => {
  const functionArgs = [
    standardPrincipalCV(myStxAddress()),
    stringAsciiCV(CNIC),
    stringAsciiCV(DOB),
  ];

  const options = {
    contractAddress: MyContractAddress,
    contractName: MyContractName,
    functionName: "reg",
    functionArgs,
    network: networkType(),
    appDetails: {
      name: "VoteCasting",
      icon: window.location.origin + "/img/vote.jpeg",
    },
    onFinish: (data) => {
      alert("Adding Username, Please try again in a few minutes");
      window.location.assign("/landing");
    },
  };

  openContractCall(options);
};

export function callRegisterUser(){
  const CNIC = document.getElementById("CNIC").value;
  const DOB = document.getElementById("DOB").value;
  RegisterUser(CNIC, DOB);
};



const CastVote = (PartyName, Symbol) => {
  const functionArgs = [
    standardPrincipalCV(myStxAddress()),
    stringAsciiCV(PartyName),
    stringAsciiCV(Symbol),
  ];

  const options = {
    contractAddress: MyContractAddress,
    contractName: MyContractName,
    functionName: "vote",
    functionArgs,
    network: networkType(),
    appDetails: {
      name: "VoteCasting",
      icon: window.location.origin + "/img/vote.jpeg",
    },
    onFinish: (data) => {
      alert("Vote Casted Successfully!");
      window.location.assign("/landing");
    },
  };

  openContractCall(options);
};

export async function Signout() {
  userSession.signUserOut();
  window.location.assign("/index");
}

export async function CheckStats(PartyName, Symbol) { 
  appCallReadOnlyFunction({
    contractAddress: MyContractAddress,
    contractName: MyContractName,
    functionName: "get-stats",
    functionArgs: [
      // enter all your function arguments here but cast them to CV first
      stringAsciiCV(PartyName),
      stringAsciiCV(Symbol),
      
    ],
  })
    .then((value) => {
      const Count = value.value;

      alert(Count);      
    })
    .catch((e) => {
      alert(e.message);
    });
};

export async function CheckNewUser() { 
  appCallReadOnlyFunction({
    contractAddress: MyContractAddress,
    contractName: MyContractName,
    functionName: "get-new-user",
    functionArgs: [
      // enter all your function arguments here but cast them to CV first
      
      
    ],
  })
    .then((value) => {
      const Count = value.value;

      return Count;      
    })
    .catch((e) => {
      alert(e.message);
    });
};