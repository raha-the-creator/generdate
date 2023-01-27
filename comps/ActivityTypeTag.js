import React from 'react'

const ActivityTypeTag = (props) => {
    return (
        <>
            <div class="border-solid border-2 border-gray-400 p-2 mr-2 mt-2 rounded-md">
                <p class="">{props.tag}</p>
            </div>
        </>
    )
}

export default ActivityTypeTag