window.addEventListener('DOMContentLoaded', () => {
            //Web3 Scripts here!
        const stakingABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "_fixedAPY",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_durationInDays",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lockDurationInDays",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxAmountStaked",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "stakeHolder",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Claim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startPeriod",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lockupPeriod",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endingPeriod",
				"type": "uint256"
			}
		],
		"name": "StartStaking",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "stakeHolder",
				"type": "address"
			}
		],
		"name": "amountStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fixedAPY",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lockupDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lockupPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "stakeHolder",
				"type": "address"
			}
		],
		"name": "rewardOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "staked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakingMax",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startStaking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDeposited",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawResidualBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
        const tokenABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sniper","type":"address"}],"name":"BoughtEarly","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"isExcluded","type":"bool"}],"name":"ExcludeFromFees","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newTreasuryWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newDevelopmentWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newMarketingWallet","type":"address"},{"indexed":false,"internalType":"address","name":"newDeployerWallet","type":"address"}],"name":"WalletsUpdated","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_isExcludedMaxTransactionAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"buyTotalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearUSDC","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disableTransferDelay","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_deadBlocks","type":"uint256"}],"name":"enableTrading","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"excluded","type":"bool"}],"name":"excludeFromFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"updAds","type":"address"},{"internalType":"bool","name":"isEx","type":"bool"}],"name":"excludeFromMaxTransaction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFees","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"limitsInEffect","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTransactionAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"blockees","type":"address[]"},{"internalType":"bool","name":"shouldBlock","type":"bool"}],"name":"multiBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairedToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"removeLimits","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"routerUni","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sellTotalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapTokensAtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tradingActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferDelayEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_buyFee","type":"uint256"}],"name":"updateBuyFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newNum","type":"uint256"}],"name":"updateMaxTxnAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newNum","type":"uint256"}],"name":"updateMaxWalletAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_treasuryShare","type":"uint256"},{"internalType":"uint256","name":"_developmentShare","type":"uint256"},{"internalType":"uint256","name":"_marketingShare","type":"uint256"},{"internalType":"uint256","name":"_deployerShare","type":"uint256"}],"name":"updateRatios","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_sellFee","type":"uint256"}],"name":"updateSellFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"name":"updateSwapEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"updateSwapTokensAtAmount","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newTreasuryWallet","type":"address"},{"internalType":"address","name":"newDevelopmentWallet","type":"address"},{"internalType":"address","name":"newMarketingWallet","type":"address"},{"internalType":"address","name":"newDeployerWallet","type":"address"}],"name":"updateWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
        const token = '0x7b26F8c27da4b273BCaaE9570C4C5aDa16c1a1E4'
        const staking = '0x0f9466c2f2829fB7478D073E9633835Fce061d06'
            
    document.querySelector('.card-big').style.display = 'none'
    //Web3 Scripts here!
    const bscscan = 'https://testnet.bscscan.com/address/'
    const COST = 0.001
    let stakingContract = null
    let tokenContact = null
    let web3 = null
    let web3Provider = null;
    
    console.log("[web3] getting provider...");
    // Modern Browsers like Chrome and Brave
    if (window.ethereum) {
        web3Provider = window.ethereum;
        web3 = new Web3(web3Provider);
        stakingContract = new web3.eth.Contract(stakingABI, staking)
        tokenContact = new web3.eth.Contract(tokenABI, token)
        
    } else {
        alert("web3 is not working");
        return;
    }
    
    if (!web3) return alert("web3 is not working");

    function minFourDigits(n) {
        return n < 100000 ? n  + '.0000' : n;
    }
    
    function returnReward(n, symbol = true) {
        if (n >= 999 && n < 10000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,1) + '.' + amount.slice(1,2) + 'K' : amount.slice(0,1) + '.' + amount.slice(1,2) + 'K'
        }
        if (n >= 10000 && n < 100000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,2) + '.' + amount.slice(2,3) + 'K' :  amount.slice(0,2) + '.' + amount.slice(2,3) + 'K'
        }
        if (n >= 100000 && n < 1000000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,3) + 'K' : amount.slice(0,3) + 'K'
        }
        if (n >= 1000000 && n < 10000000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,1) + 'M' : amount.slice(0,1) + 'M'
        }
        if (n >= 10000000 && n < 100000000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,2) + 'M' : amount.slice(0,2) + 'M'
        }
        if (n >= 100000000 && n < 1000000000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,3) + 'M' : amount.slice(0,3) + 'M'
        }
        if (n >= 1000000000 && n < 10000000000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,1) + 'B' : amount.slice(0,1) + 'B'
        }
        if (n >= 10000000000 && n < 100000000000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,2) + 'B' : amount.slice(0,2) + 'B'
        }
        if (n >= 100000000000 && n < 1000000000000) {
            const amount = n + ''
            return symbol ? '$' + ' ' + amount.slice(0,3) + 'B' : '' + ' ' + amount.slice(0,3) + 'B'
        }

        return symbol ? '$' + ' ' + n.toFixed(0) : n.toFixed(0)
    }
    
    async function getBalance() {
        const accounts = await web3.eth.getAccounts();

        if (!accounts[0]) return 
        const balance = await tokenContact.methods.balanceOf(accounts[0]).call()

        document.querySelector('.card-balance').innerHTML = minFourDigits(balance).slice(0,10);
        document.querySelector('.transaction').href = bscscan + accounts[0]
        document.querySelector('.show-contact').href = bscscan + staking
        document.querySelector('.staking-address').value = accounts[0]
    }

    async function checkMaxStake(amount) {
        const stakingMax = await stakingContract.methods.stakingMax().call()
        // console.log(web3.utils.fromWei(stakingMax))
        if (amount > stakingMax) {
            alert('Max staking ' + web3.utils.fromWei(stakingMax))
            return true
        } else {
            return false
        }
    }

    getBalance()
   
    async function stake(account, amount) {      
        await stakingContract.methods.deposit(amount)
            .send({from: account})
            .once('receipt', async function (receipt) {
                
                if (receipt) {
                    const staked = await stakingContract.methods.staked(account).call()
                    getBalance()
                    fillStakeInfo(+web3.utils.fromWei(staked))
                }
            })
            .on('error', function (error) {
                console.log('error', error)
                alert("You can't stake")
            })
    }

    async function approveStake(item) {
        const value = document.querySelector(item).value;
        const accounts = await web3.eth.getAccounts();
        if (value < 1) return alert('You need to fill amount')
        if (!accounts) return alert('Connect wallet')
        const amount = web3.utils.toWei(value)
        
        if (await checkMaxStake(amount)) return

        await tokenContact
            .methods.approve(staking, amount)
            .send({from: accounts[0]})
            .once('receipt', function (receipt) {
                console.log('receipt',receipt)
                if (receipt) {
                    stake(accounts[0], amount)
                }
            })
            .on('error', function (error) {
                console.log('error', error)
                alert("You can't stake")
            })
    }      

    async function withdrawAll() {
        const accounts = await web3.eth.getAccounts();
        
        await stakingContract.methods.withdrawAll()
            .send({from: accounts[0]})
            .once('receipt', async function (receipt) {
                console.log('receipt',receipt)
                if (receipt) {
                    const staked = await stakingContract.methods.staked(accounts[0]).call()
                    getBalance()
                    fillStakeInfo(+web3.utils.fromWei(staked))
                }
            })
            .on('error', function (error) {
                console.log('error', error)
                alert("You can't withdrawAll")
            })
    } 

    async function withdraw() {
        const value = document.querySelector('.amount').value;
        const accounts = await web3.eth.getAccounts();
        
        if (value < 1) return alert('You need to fill amount')
        if (!accounts) return alert('Connect wallet')
        const amount = web3.utils.toWei(value)

        await stakingContract.methods.withdraw(amount)
            .send({from: accounts[0]})
            .once('receipt', async function (receipt) {
                if (receipt) {
                    const staked = await stakingContract.methods.staked(accounts[0]).call()
                    getBalance()
                    fillStakeInfo(+web3.utils.fromWei(staked))
                }
            })
            .on('error', function (error) {
                console.log('error', error)
                alert("You can't withdraw")
            })
    } 

    async function fillStakeInfo(staked) {
        const accounts = await web3.eth.getAccounts();
        const APY = await stakingContract.methods.fixedAPY().call()
        const rewardOf = await stakingContract.methods.rewardOf(accounts[0]).call()
        const totalDeposited = await stakingContract.methods.totalDeposited().call()
        const name = await tokenContact.methods.name().call()
        //
        const totalDepositedAmount = web3.utils.fromWei(totalDeposited) * COST;
        const earned = web3.utils.fromWei(rewardOf);
        const share = (10000 / web3.utils.fromWei(totalDeposited)) * 100;
        const deposit = staked * COST
        //
        document.querySelector('.staked-name').innerHTML = 'Staked' + ' ' + name;
        document.querySelector('.stake-tvl').innerHTML = returnReward(totalDepositedAmount);
        document.querySelector('.stake-apr').innerHTML =  Number(APY).toFixed(1) + '%';
        document.querySelector('.stake-reward').innerHTML = returnReward(+web3.utils.fromWei(rewardOf), false)
        document.querySelector('.stake-earned').innerHTML = '$' + ' ' + Number(earned).toFixed(4);
        document.querySelector('.stake-staked').innerHTML =  staked.toLocaleString();
        document.querySelector('.stake-share').innerHTML = share.toFixed(2) + '%';
        document.querySelector('.stake-earnings').innerHTML = '$' + ' ' + deposit.toLocaleString();
    }
  
    async function view() {
        const address = document.querySelector('.staking-address').value;
        const element = document.querySelector('.card-big')

        if (!address) {
            alert('You need to fill your address')
            return 
        }

        const staked = await stakingContract.methods.staked(address).call()
        
        if (staked == 0) {
            alert("you don't have a stake yet")
        }

        if (staked > 0) {
            await fillStakeInfo(+web3.utils.fromWei(staked))
            element.style.display = 'block'
            element.scrollIntoView({block: "center", behavior: "smooth"})
        }
        
        element.scrollIntoView({block: "center", behavior: "smooth"})
    }  


    async function connectMetamask() {
        if (window.ethereum) {
            web3Provider = window.ethereum;
            try {
                // Request account access
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                alert("You must connect your metamask wallet !");
                console.error("User denied account access to metamask.");
                return;
            }
        } else {
            // you cant connect
            console.error("Unable to connect to metamask");
            alert(
            "You have to use Trustwallet or install Metamask to use this service, you can install it from :  https://metamask.io/download.html"
            );
            return;
        }
            
        let web3 = new Web3(window.ethereum);
        let accounts = await web3.eth.getAccounts();
    
        console.log("accounts : " + accounts);
        window.account = accounts[0];
        let res = accounts[0].slice(0, 10);
        document.querySelector(".btn-connect").innerHTML = res;
       
        getBalance()

        return web3;
    }

    function openModal() {
        const block = document.querySelector('.block-transaction')

        if (block.classList?.contains('active')) {
            block.classList.remove('active')
        } else {
            block.classList.add('active')
        }
    }

    document.querySelector(".logo")?.addEventListener("click", function() {window.location.href='./index.html'});
    document.querySelector(".btn-connect")?.addEventListener("click", connectMetamask)
    document.querySelector('.stake-confirm')?.addEventListener('click', () => approveStake('.stake-amount'))
    document.querySelector('.view-staking')?.addEventListener('click', view)
    document.querySelector('.withdraw')?.addEventListener('click', withdraw)
    document.querySelector('.deposit')?.addEventListener('click', () => approveStake('.amount'))
    document.querySelector('.withdrawAll')?.addEventListener('click', withdrawAll)
    document.querySelector('.stake-modal')?.addEventListener('click', openModal)

        })