const dataSet = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 
    40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 
    73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 
    27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 
    1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 
    34, 53, 78, 40, 14, 5]

let quickSortCounter = 0;

function swap(array, i, j) {
    // quickSortCounter++;
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function qSort(array, start=0, end=array.length) {
    quickSortCounter++;
    start = start;
    end = end;
    if (start >= end) {
        return array;
    }
   
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);
    return quickSortCounter;
}
 
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i=start; i<end - 1; i++) {
        // quickSortCounter++;
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
}

// console.log(qSort(dataSet, start=0, end=dataSet.length));
// console.log(qSort(dataSet));


function mSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    mergeCounter++
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
};


let mergeCounter=0;
function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
        mergeCounter++;
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i=leftIndex; i<left.length; i++) { 
        array[outputIndex++] = left[i];
        mergeCounter++;
        
    }

    for (let i=rightIndex; i<right.length; i++) {
        array[outputIndex++] = right[i];
        mergeCounter++;
        
    }
    return mergeCounter;

};

// console.log('merge counter: ', mSort(dataSet));

//write O(n) algo to sort an array of integers where you know in advanced
//lowest and highest values

const arr = [22, 45, 12, 8]


function insertionSort(array) {
    let length = array.length;

    for(let i = 1; i < length; i++) {
        let temp = array[i];
        for(let j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
    return array;
}

function bucketSort(array, bucketSize) {
    if (array.length === 0) {
      return array;
    }
}

function bucket(array, min, max) {

    let bucketCount = Math.floor((max-min)+1);
    let allBuckets = new Array((bucketCount))
    let bucketSize = array.length;

    //initiale buckets
    for (i = 0; i < allBuckets.length; i++) {
        allBuckets[i] = [];
    }

    //push values into bucket
    array.forEach(function(currentVal) {
        allBuckets[Math.floor((currentVal-min)/bucketSize)].push(currentVal)
    });

    //sort buckets
    array.length = 0;

    allBuckets.forEach(function(bucket) {
        insertionSort(bucket);
        bucket.forEach(function(element) {
            array.push(element)
        })
    })

    return array;


    // let divider = ceil((max+1)/bucket)
    // bucket[j] = array[i];
    // j = floor(array[i]/divider)



}

console.log(bucket(arr, 8, 45));