//  10-->5-->16


/*
let myLinkedList = {
    head: {
        value:10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
    */

/*
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

*/

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head
        this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null,
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;   
    }

    printList() {

        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value) {
        // check params
        if (index >= this.length) {
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index-1);
        // const holdingPointer = leader.next;
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        // newNode.next = holdingPointer;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        //check params

        let counter = 0;
        let currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        // check params

        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(200,99);
myLinkedList.remove(2);

console.log(myLinkedList);