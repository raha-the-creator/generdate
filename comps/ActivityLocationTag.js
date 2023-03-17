import React from "react";

const ActivityLocationTag = (props) => {
  return (
    <>
      <h3 class="text-whit text-sm mr-2 mt-2 bg-pink-700 p-2 rounded-md">{props.location}</h3>
    </>
  );
};

export default ActivityLocationTag;
