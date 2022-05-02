import Web3 from 'web3';

let selectedAccount;

// block header hash
let hashContract;

let isInitialized = false;

export const init = async () => {
    let provider = window.ethereum;

    if (typeof provider !== 'undefined') {
        provider    
            .request({ method: 'eth_requestAccounts' })
            .then((accounts) => {
                selectedAccount = accounts[0];
                console.log(`Selected account is ${selectedAccount}`);
            })
            .catch((err) => {
                console.log(err);
            });

        window.ethereum.on('accountsChanged', function (accounts) {
            selectedAccount = accounts[0];
            console.log(`Selected account changed to ${selectedAccount}`);
        });
    }

    const web3 = new Web3(provider);

    const networkID = await web3.eth.net.getId();

    const hashABI = [
        {
            "inputs": [],
            "name": "extractor",
            "outputs": [
                {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    hashContract = new web3.eth.Contract(
        hashABI,
        '0x69a928bca4a20c55145C04d44cd36e667c67D6ec'
    );

    isInitialized = true;

}

export const getBlockHash = async () => {
    if (!isInitialized) {
        await init();
    }
    return hashContract.methods.extractor().call();
}
