import { useEffect, useState } from "react";

// const HomeHook = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => response.json())
//       .then((fdata) => setData(fdata));
//  }, []);

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

//-------------------------------------------------------------


// custom hooks always starts with use
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((fdata) => setData(fdata));
  }, [url]);

  return [data];
};

// export default useFetch;

// //--------------------------------------------------------------------

const HomeHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default HomeHook;