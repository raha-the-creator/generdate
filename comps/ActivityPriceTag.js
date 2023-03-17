import React from "react";

const ActivityPriceTag = (props) => {
  return (
    <>
      <h3 class="text-white mr-2 mt-2 bg-emerald-500 p-2 rounded-md">{props.price}</h3>
    </>
  );
};

export default ActivityPriceTag;
