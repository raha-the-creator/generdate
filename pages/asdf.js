import { useState } from "react";
import MultiSelect from "multiselect-react-dropdown";

export default function Home({ activities }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (selectedList, selectedItem) => {
    setSelectedTags(selectedList);
  };

  const filterActivitiesByTags = () => {
    if (selectedTags.length === 0) {
      return activities;
    }

    const filteredActivities = activities.filter((activity) =>
      selectedTags.every((tag) => activity.tags.includes(tag))
    );

    return filteredActivities;
  };

  return (
    <div>
      <MultiSelect
        options={Array.from(
          new Set(activities.flatMap((activity) => activity.tags))
        )}
        selectedValues={selectedTags}
        onSelect={handleTagSelect}
        onRemove={handleTagSelect}
        displayValue="tag"
        placeholder="Select tags"
      />
      <ul>
        {filterActivitiesByTags().map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://generdate-api.herokuapp.com/activities"
  );
  const activities = await response.json();

  return {
    props: {
      activities,
    },
  };
}