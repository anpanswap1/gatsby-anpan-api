import { ChainId, Token } from "@anpanswap-libs/sdk";

// BEP-20 addresses.
export const ANPAN = "0x19207575498e375d4673f1954599c84f1a1f812b";
export const WBNB = "0xae13d989dac2f0debff460ac112a837c89baa7cd";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const ANPAN_BNB_FARM = "0x7f5C8B98372aAc6248289443fb232F73EAD06632";
export const MASTERCHEF_CONTRACT = "0x966ea87c1e7d971bd6af0fac2b36e93862c84f4d";
export const LOTTERY_CONTRACT = "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91";
export const MULTICALL_CONTRACT = "0xe99313506bC22601C498D442edd011e541D00b54";

// AnpanSwap SDK Token.
export const ANPAN_TOKEN = new Token(ChainId.BSCTESTNET, ANPAN, 18);
export const WBNB_TOKEN = new Token(ChainId.BSCTESTNET, WBNB, 18);
export const ANPAN_BNB_TOKEN = new Token(ChainId.BSCTESTNET, ANPAN_BNB_FARM, 18);
