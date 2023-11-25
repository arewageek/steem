// SPDX-License-Identifier: MIT

/// @title ERC20 Token creator >>> Steem
/// @author @arewageek
/// @notice This contract is a template to enable anyone create an ERC20 token with ease
/// @dev This project/contract can be integrated into any project to eanble developers create dApps that enable users create and deploy custom ERC20 tokens

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Token is ERC20 {
    constructor (string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol){
        _mint(msg.sender, initialSupply);
    }
}