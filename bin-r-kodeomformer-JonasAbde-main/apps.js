let ipadresse1 = document.getElementById("ip1").value;
let ipadresse2 = document.getElementById("ip2").value;
let ipadresse3 = document.getElementById("ip3").value;
let ipadresse4 = document.getElementById("ip4").value;
let binært = "";
let rep = "";

function update() {
  // opdeler IP-adresse i 4 dele
  ipadresse1 = document.getElementById("ip1").value; // henter værdier fra input
  console.log(ipadresse1);
  if (ipadresse1 >= 128) {
    ipadresse1 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 64) {
    ipadresse1 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 32) {
    ipadresse1 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 16) {
    ipadresse1 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 8) {
    ipadresse1 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 4) {
    ipadresse1 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 2) {
    ipadresse1 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse1 >= 1) {
    ipadresse1 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update1() {
  // opdeler IP-adresse i 4 dele
  ipadresse2 = document.getElementById("ip2").value; // henter værdier fra input
  console.log(ipadresse2);
  if (ipadresse2 >= 128) {
    ipadresse2 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 64) {
    ipadresse2 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 32) {
    ipadresse2 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 16) {
    ipadresse2 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 8) {
    ipadresse2 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 4) {
    ipadresse2 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 2) {
    ipadresse2 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse2 >= 1) {
    ipadresse2 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update2() {
  // opdeler IP-adresse i 4 dele
  ipadresse3 = document.getElementById("ip3").value; // henter værdier fra input
  console.log(ipadresse3);
  if (ipadresse3 >= 128) {
    ipadresse3 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 64) {
    ipadresse3 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 32) {
    ipadresse3 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 16) {
    ipadresse3 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 8) {
    ipadresse3 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 4) {
    ipadresse3 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 2) {
    ipadresse3 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse3 >= 1) {
    ipadresse3 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært + ".";
  binært = "";
}

function update3() {
  // opdeler IP-adresse i 4 dele
  ipadresse4 = document.getElementById("ip4").value; // henter værdier fra input
  console.log(ipadresse4);
  if (ipadresse4 >= 128) {
    ipadresse4 -= 128;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 64) {
    ipadresse4 -= 64;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 32) {
    ipadresse4 -= 32;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 16) {
    ipadresse4 -= 16;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 8) {
    ipadresse4 -= 8;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 4) {
    ipadresse4 -= 4;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 2) {
    ipadresse4 -= 2;
    binært += "1";
  } else {
    binært += "0";
  }
  if (ipadresse4 >= 1) {
    ipadresse4 -= 1;
    binært += "1";
  } else {
    binært += "0";
  }
  console.log(binært);
  rep += binært;
  binært = "";
}

function svar() {
  // viser binære værdier
  document.getElementById("svar").innerHTML = "Binary representation: " + rep; //
  console.log(rep);
}

function convertbinary() {
  let binært = document.getElementById("binaryInput").value;
  let ipoutput = 0;
  if (binært[0] == 1) {
    ipoutput += 128;
  }
  if (binært[1] == 1) {
    ipoutput += 64;
  }
  if (binært[2] == 1) {
    ipoutput += 32;
  }
  if (binært[3] == 1) {
    ipoutput += 16;
  }
  if (binært[4] == 1) {
    ipoutput += 8;
  }
  if (binært[5] == 1) {
    ipoutput += 4;
  }
  if (binært[6] == 1) {
    ipoutput += 2;
  }
  if (binært[7] == 1) {
    ipoutput += 1;
  }
  if (binært[8] == ".") {
    ipoutput += ".";
  }

  let ipoutput1 = 0;
  if (binært[9] == 1) {
    ipoutput1 += 128;
  }
  if (binært[10] == 1) {
    ipoutput1 += 64;
  }
  if (binært[11] == 1) {
    ipoutput1 += 32;
  }
  if (binært[12] == 1) {
    ipoutput1 += 16;
  }
  if (binært[13] == 1) {
    ipoutput1 += 8;
  }
  if (binært[14] == 1) {
    ipoutput1 += 4;
  }
  if (binært[15] == 1) {
    ipoutput1 += 2;
  }
  if (binært[16] == 1) {
    ipoutput1 += 1;
  }
  if (binært[17] == ".") {
    ipoutput1 += ".";
  }

  let ipoutput2 = 0;
  if (binært[18] == 1) {
    ipoutput2 += 128;
  }
  if (binært[19] == 1) {
    ipoutput2 += 64;
  }
  if (binært[20] == 1) {
    ipoutput2 += 32;
  }
  if (binært[21] == 1) {
    ipoutput2 += 16;
  }
  if (binært[22] == 1) {
    ipoutput2 += 8;
  }
  if (binært[23] == 1) {
    ipoutput2 += 4;
  }
  if (binært[24] == 1) {
    ipoutput2 += 2;
  }
  if (binært[25] == 1) {
    ipoutput2 += 1;
  }
  if (binært[26] == ".") {
    ipoutput2 += ".";
  }
  let ipoutput3 = 0;
  if (binært[27] == 1) {
    ipoutput3 += 128;
  }
  if (binært[28] == 1) {
    ipoutput3 += 64;
  }
  if (binært[29] == 1) {
    ipoutput3 += 32;
  }
  if (binært[30] == 1) {
    ipoutput3 += 16;
  }
  if (binært[31] == 1) {
    ipoutput3 += 8;
  }
  if (binært[32] == 1) {
    ipoutput3 += 4;
  }
  if (binært[33] == 1) {
    ipoutput3 += 2;
  }
  if (binært[34] == 1) {
    ipoutput3 += 1;
  }
  console.log(ipoutput + ipoutput1 + ipoutput2 + ipoutput3);

  document.getElementById("ipResult").innerHTML =
    "IP Address: " + ipoutput + ipoutput1 + ipoutput2 + ipoutput3;
}
convertbinary();
