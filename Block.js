import sha256 from "crypto-js";

class Block {
  hash;
  previousHash;
  timestamp;
  data;

  constructor(data, previousHash = "N/A") {
    this.data = data;
    this.previousHash = previousHash;
    this.timestamp = Date.now();
    this.hash = this.calculateHash(data);
  }

  calculateHash(data) {
    return sha256.SHA256(data).toString();
  }
}

export default Block;
