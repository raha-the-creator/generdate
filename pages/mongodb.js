import React from "react";
import { MongoClient } from "mongodb";

export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  const db = client.db("generdate-db");
  const collection = db.collection("generdate-collection");

  // Query the collection and return the data
  const data = await collection.find().toArray();
  const serializedData = data.map(item => {
    const serializedItem = { ...item };
    serializedItem._id = item._id.toString();
    return serializedItem;
  });

  // Close the connection
  client.close();

  return {
    props: {
      data: serializedData,
    },
  };
}

export default function mongodb({ data }) {
    console.log(data)

  return (
    <>
      <div className="flex flex-col items-center">
        {data.map((item) => (
          <div className="border-2 border-red-400 p-2 w-1/4" key={item._id}>
            <h2>{item.Name}</h2>
            <p>{item.Address}</p>
          </div>
        ))}
      </div>
    </>
  );
}
