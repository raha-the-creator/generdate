import React from "react";
// import { useEffect, useState } from "react";

export default function Heroku({ activities }) {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://generdate-api.herokuapp.com/activities")
  //       .then(res => res.json())
  //       .then(data => {
  //         setData(data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);

  //   console.log(data);

  return (
    <>
      <div>
        {activities.map((activity, index) => {
          <div>
            <p>{activity.id}</p>
            <p>{activity.name}</p>
          </div>;
        })}
      </div>
    </>
  );
}

export async function getServerSideProps({}) {
  const data = await fetch("https://generdate-api.herokuapp.com/activities");
  const activities = await data.json();

  console.log(activities);

  return {
    props: { activities },
  };
}
