import Block from "./Block.js";

class Blockchain {
  chain;
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block("Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  createBlock(data) {
    const previousBlock = this.getLatestBlock();
    const newBlock = new Block(data, previousBlock.hash);
    this.chain.push(newBlock);
  }
}

const blockchain = new Blockchain();

for (let i = 0; i < 10; i++) {
  blockchain.createBlock("Block " + (i + 1));
}

console.log(blockchain.chain);
