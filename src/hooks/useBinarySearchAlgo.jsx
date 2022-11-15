
const useBinarySearchAlgo = () => {
    const searchUsingBinaryAlgo = (searcharray, high, low, key) => {
        const array = searcharray.map((a) => parseInt(a));
        const searchKey = parseInt(key);
        let mid = null;
        if (high >= low) {
            mid = Math.round((high + low)/2);
            // if searchable element found at mid position
            if (searchKey === array[mid]) {
                return mid;
            } else if (searchKey > array[mid]) {
                // search key is greater than mid value
                return searchUsingBinaryAlgo(array, high, (mid + 1), searchKey);
            } else {
                // serch key is smaller than mid value
                return searchUsingBinaryAlgo(array, (mid - 1), low, searchKey);
            }
        } else {
            // search key not exists in array
            return -1;
        }
    };
    return { searchUsingBinaryAlgo };
};

export default useBinarySearchAlgo;
