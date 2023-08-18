import React, { useState } from "react";
function Home() {
  const [randomArray, setRandomArray] = useState([]);

  const arrKey = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleRandomArray = () => {
    const newArray = [];
    for (let i = 0; i < 1000; i++) {
      const randomLength = Math.floor(Math.random() * 5) + 1;
      let randomString = "";
      for (let j = 0; j < randomLength; j++) {
        const randomIndex = Math.floor(Math.random() * arrKey.length);
        randomString += arrKey[randomIndex];
      }
      newArray.push(randomString);
    }
    setRandomArray(newArray);
  };

  const handleSort = (arr) => {
    return arr.sort();
  };

  const handleBubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  };

  const handleSelectionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  };

  const handleInsertionSort = (arr) => {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  };

  const handleQuickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...handleQuickSort(left), pivot, ...handleQuickSort(right)];
  };

  const sortArray = (sortFunction) => {
    const sortedArray = sortFunction([...randomArray]);
    setRandomArray(sortedArray);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Array</h1>
          <button onClick={handleRandomArray}>Random Array</button>
        <div className="button_box">
          <button onClick={() => sortArray(handleSort)}>Sort</button>
          <button onClick={() => sortArray(handleBubbleSort)}>Bubble Sort</button>
          <button onClick={() => sortArray(handleSelectionSort)}>
            Selection Sort
          </button>
          <button onClick={() => sortArray(handleInsertionSort)}>
            Insertion Sort
          </button>
          <button onClick={() => sortArray(handleQuickSort)}>Quick Sort</button>
        </div>
        <div className="random-array-table">
          {randomArray.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {randomArray.map((item, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </header>
    </div>
  );
}

export default Home;
