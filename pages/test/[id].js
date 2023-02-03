import { google } from "googleapis";

export async function getServerSideProps({ query }) {

    // auth
    const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

    const sheets = google.sheets({ version: 'v4', auth })

    // query
    const { id } = query
    const range = `Sheet1!A${id}:F${id}`

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range
    })

    // result

    const [name, address, tags, price, location, feature] = response.data.values[0]
    console.log(name, address, tags, price, location, feature)
    console.log("1111")

    return {
        props: {
            name,
            address,
            tags,
            price,
            location,
            feature
        }
    }
}

export default function Post({ name, address, tags, price, location, feature }) {
    return <article>
        <h1>{name}</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: address}}></div> */}
        <p>{address}</p>
        <p>{tags}</p>

        <p>{price}</p>
        <p>{location}</p>

        <img src={feature} width={600} height={600} alt="1111"/>

    </article>
}