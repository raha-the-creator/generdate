import React from "react";
import Head from "next/head";
import ActivityCard from "../../comps/ActivityCard";
import { useState } from "react";
import MultiSelect from "multiselect-react-dropdown";

export async function getServerSideProps({}) {
  const data = await fetch("https://generdate-api.herokuapp.com/activities");
  const activities = await data.json();

  return {
    props: {
      activities,
    },
  };
}

export default function Heroku({ activities }) {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (selectedList, selectedItem) => {
    setSelectedTags(selectedList);
  };

  const tags = [
    { name: "Outdoor", id: 1 },
    { name: "Indoor", id: 2 },
    { name: "Eating", id: 3 },
    { name: "Park", id: 4 },
    { name: "Entertainment", id: 5 },
    { name: "Shopping", id: 6 },
    { name: "Pictures", id: 7 },
    { name: "Beach", id: 8 },
    { name: "Exploring", id: 9 },
    { name: "Arcade", id: 10 },
    { name: "View", id: 11 },
  ];

  const filterActivitiesByTags = () => {
    if (selectedTags.length === 0) {
      return activities;
    }

    const filteredActivities = activities.filter((activity) =>
      selectedTags.every((tag) => activity.tags.includes(tag.name))
    );

    return filteredActivities;
  };

  //Function for multiple search filter
  const search = (array) => {
    return array.filter((el) =>
      Object.keys(el).some(
        (name, location) =>
          (el[name] && el[name].toString().toLowerCase().includes(query)) ||
          (el[location] &&
            el[location]?.toString().toLowerCase().includes(query))
      )
    );
  };

  //Applying our search filter function to our array of countries recieved from the API
  const filtered = search(activities);

  // set the value of our useState query anytime the user types on our input
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Activities search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main class="flex flex-col w-full h-full text-center justify-center items-center">
        <div class="flex flex-col bg-white rounded-lg w-11/12 justify-start items-center my-1 ">
          <div className="w-full">
            {/* FILTERS */}
            <div className="z-50 sticky top-16 p-2 bg-white">
              <div className="flex items-center">
                <h2 class="text-left text-xl font-roboto-mono font-bold my-2">
                  Activities to explore
                </h2>
              </div>
              <div class="flex flex-col md:flex-row items-center justify-center">
                <div class="w-full flex-grow-0 flex-shrink-0 md:w-1/2">
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Search by name"
                    className="w-full inline-block rounded box-border border-solid border-2 border-gray-400 p-2 text-sm"
                  />
                </div>
                <div class="flex items-center justify-center w-full h-16 md:w-1/2 md:h-10">
                  <div class="flex-1 h-10 w-1/3 px-2">
                    {/* First third of second child div */}
                    <MultiSelect
                      options={tags}
                      selectedValues={selectedTags}
                      onSelect={handleTagSelect}
                      onRemove={handleTagSelect}
                      displayValue="name"
                      placeholder="Activity type"
                      style={{
                        chips: { background: "#C42455" },
                        "&:hover": { background: "#fad" },
                      }}
                      className="text-sm"
                    />
                  </div>
                  <div class="flex-1 h-10 w-1/3 px-2">
                    {/* Second third of second child div */}
                    <MultiSelect
                      options={tags}
                      selectedValues={selectedTags}
                      onSelect={handleTagSelect}
                      onRemove={handleTagSelect}
                      displayValue="name"
                      placeholder="Price"
                      style={{
                        chips: { background: "#C42455" },
                        "&:hover": { background: "#fad" },
                      }}
                      className="text-sm"
                    />
                  </div>
                  <div class="flex-1 h-10 w-1/3 px-2">
                    {/* Third third of second child div */}
                    <MultiSelect
                      options={tags}
                      selectedValues={selectedTags}
                      onSelect={handleTagSelect}
                      onRemove={handleTagSelect}
                      displayValue="name"
                      placeholder="Location"
                      style={{
                        chips: { background: "#C42455" },
                        "&:hover": { background: "#fad" },
                      }}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="flex flex-col md:flex-row">
              <div class="bg-gray-100 h-32 md:h-auto md:w-1/2">
                <p class="text-center font-bold text-lg mt-4">Child 1</p>
              </div>
              <div class="bg-gray-200 h-32 md:h-auto md:w-1/2 flex">
                <div class="bg-gray-300 flex-1 h-full">
                  <p class="text-center font-bold text-lg mt-4">Sub Child 1</p>
                </div>
                <div class="bg-gray-400 flex-1 h-full">
                  <p class="text-center font-bold text-lg mt-4">Sub Child 2</p>
                </div>
                <div class="bg-gray-500 flex-1 h-full">
                  <p class="text-center font-bold text-lg mt-4">Sub Child 3</p>
                </div>
              </div>
            </div> */}

            <br></br>

            {/* # Filter by activity tag
            <div className="w-full flex-row">
              <MultiSelect
                options={tags}
                selectedValues={selectedTags}
                onSelect={handleTagSelect}
                onRemove={handleTagSelect}
                displayValue="name"
                placeholder="Select activity type"
                style={{
                  chips: { background: "#C42455" },
                  "&:hover": { background: "#fad" },
                }}
              />
            </div> */}

            {/* # Filter with search box (by all fields and content)
            <div className="w-11/12 relative m-4 bg-red flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-0">
              <input
                onChange={handleChange}
                type="text"
                placeholder="Type your activity"
                className="w-auto inline-block rounded box-border border-solid border-2 border-gray-400 p-2"
              />
            </div> */}

            <div class="flex flex-row flex-wrap w-full">
              {/* {filtered.map((activity, index) => {
                return (
                  <ActivityCard
                    key={activity.id}
                    link={`activities/${index + 2}`}
                    img={activity.feature}
                    header={activity.name}
                    price={activity.price}
                    city={activity.location}
                    tags={activity.tags}
                  />
                );
              })} */}

              {filterActivitiesByTags().map((activity, index) => (
                <ActivityCard
                  key={activity.id}
                  link={`activities/${index + 2}`}
                  img={activity.feature}
                  header={activity.name}
                  price={activity.price}
                  city={activity.location}
                  tags={activity.tags}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
