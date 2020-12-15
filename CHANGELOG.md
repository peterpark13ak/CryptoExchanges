# CHANGELOG

## [Autonio Smartdex v1.1.1](https://gitlab.com/autonio/smartdex-front-end/-/commit/feea0173bf9f8195ebe032029122ee57fd449f1b)
- update README.md
- Add CHANGELOG

## [Autonio Smartdex v1.1](https://gitlab.com/autonio/smartdex-front-end/-/commit/17a2cdd985409e0ff23e4e352da3c962ffab2613)

- Dex UI update and corrections
- Fix the issue with showing wMATIC as wETH incorrectly on some of the UI elements
- Listed NIOX and USDT

## [Autonio Smartdex v1](https://gitlab.com/autonio/smartdex-front-end/-/commit/27cb870c590ee22de896719902fc9eecf3614a33)

- Clone the 0x-launch-kit-frontend in the same parent directory with 0x-monorepo and 0x-launch-kit-backend
- Similar to the backend, open yarn.lock file and replace all line "@0x/contract-addresses" "^3.0.1" with "@0x/contract-addresses" "file:../0x-monorepo/packages/contract-addresses", then install the dependencies with
```
–frozen-lockfile flag
$ yarn install --frozen-lockfile
```
- Open src/common/constants.ts file, change the DEFAULT_GAS_PRICE to zero
export const DEFAULT_GAS_PRICE = new BigNumber(0);
- Open src/util/types.ts file, add matic to network enum
```
export enum Network {
    Mainnet = 1,
    Rinkeby = 4,
    Kovan = 42,
    Ganache = 50,
    Matic = 80001,
}
```
- Update src/config.json with our addresses
```
{
    "general": {
        "title": "Autonio Smartdex"
    },
    "tokens": [
        {
            "symbol": "zrx",
            "name": "0x Protocol Token",
            "primaryColor": "#333333",
            "icon": "assets/icons/zrx.svg",
            "addresses": {
                "1": "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
                "3": "0xff67881f8d12f372d91baae9752eb3631ff0ed00",
                "4": "0x8080c7e4b81ecf23aa6f877cfbfd9b0c228c6ffa",
                "42": "0x2002d3812f58e35f0ea1ffbf80a75a38c32175fa",
                "50": "0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c",
                "8995": "0xb1b57aca0977fdc772bda3ee292b189f363bcea0"
            },
            "decimals": 18,
            "displayDecimals": 2
        },
        {
            "symbol": "weth",
            "name": "Wrapped Ether",
            "primaryColor": "#3333ff",
            "icon": "assets/icons/weth.svg",
            "addresses": {
                "1": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "3": "0xc778417e063141139fce010982780140aa0cd5ab",
                "4": "0xc778417e063141139fce010982780140aa0cd5ab",
                "42": "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
                "50": "0x0b1ba0af832d7c05fd64161e0db78e85978e8082",
                "8995": "0xbf4263c8842b48c2f7cb1ceb237ae0207952edab"
            },
            "decimals": 18,
            "displayDecimals": 2
        }
    ],
    "pairs": [
        {
            "base": "zrx",
            "quote": "weth"
        }
    ],
    "marketFilters": [
        {
            "text": "ETH",
            "value": "weth"
        }
    ]
}
```
- Start the frontend using our above relayer (restart the backend if you stopped it)
REACT_APP_NETWORK_ID='80001' REACT_APP_RELAYER_URL='http://localhost:3000/v2' yarn start