import sha256 from "crypto-js";

class Block {
  hash;
  timestamp;
  data;
  previousHash;
  nonce = 0;

  constructor(data, previousHash = "N/A") {
    this.timestamp = Date.now();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = "";
  }
}

export default Block;
