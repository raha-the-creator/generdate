import React from "react";
import { createClient } from "contentful";
import ActivityCard from "../../comps/ActivityCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "locations" });

  return {
    props: {
      locations: res.items,
    },
  };
}

export default function Loactions({ locations }) {
  console.log(locations);

  return (
    <>
      <div>
        {locations.map((location) => (
          <ActivityCard
            key={location.sys.id}
            link={`/contentful/${location.fields.slug}`}
            as={`/contentful/${location.fields.slug}`}
            img={'https:' + location.fields.featureImage.fields.file.url}
            header={location.fields.name}
            price={location.fields.price}
            city={location.fields.city}
            tags={location.fields.tags}
          />
        ))}
      </div>
    </>
  );
}
