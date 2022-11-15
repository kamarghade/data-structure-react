import React from 'react';
import useBinarySearchAlgo from '../hooks/useBinarySearchAlgo';
const BinarySearchAlgo = (props) => {
    const { array, sortedArray, searchKey } = props;
    const { searchUsingBinaryAlgo } = useBinarySearchAlgo();
    const [found, setFound] = React.useState(undefined);

    const callSearchAlgo = () => {
        const ArrayFormat = array.split(',');
        const result = searchUsingBinaryAlgo(ArrayFormat.sort((a, b) => a - b), ArrayFormat.length - 1, 0, searchKey);
        let output = `Found at array index ${result}`;
        if (result === -1) output = 'Not found in array';
        setFound(output);
    };

    // React.useEffect(() => {
    //     callSearchAlgo();
    // }, [searchKey]);
    return (
        <>
        <h1>Binary Search Algorithm</h1>
            <p>
                Array: [{array}] <br />
                Sorted Array: [{sortedArray.sort((a, b) => a - b).join(', ')}] <br />
                Search Key: {searchKey} <br />
                {found && `Searched Element: ${found}`}
            </p>
            <button onClick={callSearchAlgo}>Search the Number</button>
        </>
    )
};

export default BinarySearchAlgo;
