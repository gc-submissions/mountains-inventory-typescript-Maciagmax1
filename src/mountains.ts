import Mountain from "../models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length > 0) {
    let TallestMountain: Mountain = array[0];
    array.forEach((item) => {
      if (item.height > TallestMountain.height) {
        TallestMountain = item;
      }
    });
    return TallestMountain.name;
  } else {
    return "";
  }
};

// const TallestMountainName = findNameOfTallestMountain(mountains);
// console.log(TallestMountainName);

export { findNameOfTallestMountain };
