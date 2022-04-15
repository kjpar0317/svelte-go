export function getTextColorByTheme(darkMode) {
  if (darkMode) {
    return "#FFFFFF";
  } else {
    return "#302F2F";
  }
}

export function getCoinColor(coinId) {
  let tmpcolor = "#10A4F9";

  switch (coinId) {
    case "btc-bitcoin":
      tmpcolor = "#F9A410";
      break;
    case "eth-ethereum":
      tmpcolor = "#E1E5E7";
      break;
    case "usdt-tether":
      tmpcolor = "#05BA2E";
      break;
    case "xrp-xrp":
      tmpcolor = "#5C5D5C";
      break;
    case "sol-solana":
      tmpcolor = "#BF68F8";
      break;
    case "luna-terra":
      tmpcolor = "D9D909";
      break;
    case "avax-avalanche":
      tmpcolor = "#F94837";
      break;
    case "doge-dogecoin":
      tmpcolor = "#F9E237";
      break;
    case "dot-polkadot":
      tmpcolor = "#E194FC";
      break;
    case "etc-ethereum-classic":
      tmpcolor = "#94FCAC";
      break;
    case "kda-kadena":
      tmpcolor = "#D1A1E1";
      break;
    case "zel-zelcash":
      tmpcolor = "#3363F9";
      break;
  }

  return tmpcolor;
}
