import React, { useState, useTransition } from "react";

var arrayData = [];
for (let i = 0; i < 50; i++) {
    // for (let i = 0; i < 50000; i++) {
  arrayData.push({
    index: i,
    label: `Index ID ${i}`,
  });
}
function Index() {
  const [arrayDataState, setArrayData] = useState(arrayData);
  const [name, setName] = useState("Akash");
  const [isPending, startTransaction] = useTransition();

//   closures
  const add = (a) => {
        const inner = (b) =>{
            console.log(a + b)
        }
    return inner
  }

  const add2 = add(2)

  const updateArray = (e) => {
    add2(5)
    console.log("e : ", e.target.id);
    startTransaction(() => {
      setArrayData((prevState) => {
        const prevArray = [...prevState];
        prevArray.splice(Number(e.target.id), 1);
        return prevArray;
      });
    });
    setName(`Akash ${e.target.id}`)
  };
  return (
    <>
    {name}
      {arrayDataState.map((data) => {
        return (
          <p
            id={data.index}
            onClick={updateArray}
          >{`This is array ${data.label}`}</p>
        );
      })}
      {isPending ? <>Wait...</> : ""}
    </>
  );
}

export default Index;
