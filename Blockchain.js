import Block from "./Block.js";
import sha256 from "crypto-js";

class Blockchain {
  chain = [];
  constructor() {
    this.createGenesisBlock();
  }

  createGenesisBlock() {
    let Genesis = new Block("Genesis Block", "N/A");
    // Genesis = this.mine(Genesis);
    console.log("Genesis Block Mined");
    this.chain.push(Genesis);
  }

  mine(block) {
    while (block.hash.substring(0, 3) !== "000") {
      block.hash = sha256
        .SHA256(block + block.nonce + block.timestamp)
        .toString();
      block.nonce++;
    }

    return block;
  }

  addBlock(data) {
    let previousBlock = this.chain[this.chain.length - 1];
    let newBlock = new Block(data, previousBlock.hash);
    newBlock = this.mine(newBlock);
    this.chain.push(newBlock);
  }

  validateChain() {
    for (let i = 1; i < this.chain.length; i++) {
      const reHash = this.mine(this.chain[i]);

      if (this.chain[i].previousHash !== this.chain[i - 1].hash) {
        return `Block ${i} is not the same as block ${i - 1} hash`;
      }
      if (reHash.hash !== this.chain[i].hash) {
        return `Block ${i} hash is not Correct`;
      }
    }

    return `Blockchain is valid`;
  }
}

const blockchain = new Blockchain();
blockchain.addBlock("2nd Block");
blockchain.addBlock("3rd Block");
blockchain.addBlock("4th Block");
console.log(blockchain.validateChain());
