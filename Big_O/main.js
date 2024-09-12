const nemo = ["nemo"];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel',
    'squirt', 'darla', 'hank'
];
const large = new Array(100000).fill('nemo');

function findNemo(array) {
    for (let i=0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('FOUND NEMO!');
        }
    }
}

findNemo(large); // O(n) --> Linear Time


const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]);  // 0(1)
    console.log(boxes[1]);  // O(1)
}

logFirstTwoBoxes(boxes);  // O(1) - Constant Time