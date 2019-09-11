import { Account, SecureWalletName } from 'v2/types';

export const accounts: Account[] = [
  {
    address: '0xc7bfc8a6bd4e52bfe901764143abef76caf2f912',
    networkId: 'Ethereum',
    assets: [
      {
        uuid: '10e14757-78bb-4bb2-a17a-8333830f6698',
        balance: '100000000000000',
        mtime: Date.now()
      },
      {
        uuid: 'f7e30bbe-08e2-41ce-9231-5236e6aab702',
        balance: '100000000000000',
        mtime: Date.now()
      }
    ],
    wallet: SecureWalletName.WEB3,
    dPath: `m/44'/60'/0'/0/0`,
    transactions: [],
    mtime: Date.now(),
    favorite: true
  },
  {
    address: '0xc7bfc8a6bd4e52bfe901764143abef76caf2f912',
    networkId: 'Goerli',
    assets: [
      {
        uuid: '12d3cbf2-de3a-4050-a0c6-521592e4b85a',
        balance: '100000000000000',
        mtime: Date.now()
      }
    ],
    wallet: SecureWalletName.WEB3,
    dPath: `m/44'/60'/0'/0/0`,
    transactions: [],
    mtime: Date.now(),
    favorite: true
  },
  {
    address: '0x82d69476357a03415e92b5780c89e5e9e972ce75',
    networkId: 'Ropsten',
    assets: [
      {
        uuid: '01f2d4ec-c263-6ba8-de38-01d66c86f309',
        balance: '5000000000000000000',
        mtime: Date.now()
      }
    ],
    wallet: SecureWalletName.WEB3,
    dPath: `m/44'/60'/0'/0/0`,
    transactions: [],
    mtime: Date.now(),
    favorite: true
  },
  {
    address: '0x8fe684ae26557DfFF70ceE9a4Ff5ee7251a31AD5',
    networkId: 'Rinkeby',
    assets: [
      {
        uuid: '89397517-5dcb-9cd1-76b5-224e3f0ace80',
        balance: '5000000000000000000',
        mtime: Date.now()
      }
    ],
    wallet: SecureWalletName.WEB3,
    dPath: `m/44'/60'/0'/0/0`,
    transactions: [],
    mtime: Date.now(),
    favorite: true
  },
  {
    address: '0xd57478a81CF7DcA65996Ef0550367467cbD6309f',
    networkId: 'Kovan',
    assets: [
      {
        uuid: '4d8b9524-e2c8-243b-cdca-c0a9f27a3b01',
        balance: '5000000000000000000',
        mtime: Date.now()
      }
    ],
    wallet: SecureWalletName.WEB3,
    dPath: `m/44'/60'/0'/0/0`,
    transactions: [],
    mtime: Date.now(),
    favorite: true
  }
];
