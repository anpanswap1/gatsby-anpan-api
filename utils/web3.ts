import Web3 from "web3";

const BSC_NODE_RPC = [
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  "https://data-seed-prebsc-1-s2.binance.org:8545/",
  "https://data-seed-prebsc-2-s1.binance.org:8545/",
];

const BSC_ARCHIVE_NODE_RPC = [
  "https://speedy-nodes-nyc.moralis.io/750cce4e5d748c204e03057f/bsc/testnet/archive/",
  
];

export const getWeb3 = (archive = false): Web3 => {
  const provider: string = archive
    ? BSC_ARCHIVE_NODE_RPC[Math.floor(Math.random() * BSC_ARCHIVE_NODE_RPC.length)]
    : BSC_NODE_RPC[Math.floor(Math.random() * BSC_NODE_RPC.length)];

  return new Web3(new Web3.providers.HttpProvider(provider, { timeout: 30000 }));
};

export const getContract = (abi: any, address: string, archive = false) => {
  const web3: Web3 = getWeb3(archive);

  return new web3.eth.Contract(abi, address);
};
