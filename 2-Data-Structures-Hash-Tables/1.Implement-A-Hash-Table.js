/*

Implement A Hash Table

*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {       // O(1)
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      
    } 
      this.data[address].push(key, value);
      return this.data;
    
  }

  get(key) {     // if no collisions O(1) or O(n)
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }

    }
    return undefined

  }

  keys() {
    const keysArray = [];
    for (let i=0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;

  }
}

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set('apples', 54);
myHashTable.set("oranges",2);
myHashTable.keys();
console.log(myHashTable.get('grapes'));
// myHashTable.get("grapes");
// myHashTable.set("apples", 9);
// myHashTable.get("apples");
