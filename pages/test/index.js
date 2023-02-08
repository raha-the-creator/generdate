import { google } from 'googleapis';
import Link from 'next/link';

export async function getServerSideProps({ query }) {

  const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'] });

  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'Sheet1!A2:G100',
  });

  const posts = response.data.values.map((item) => {
    return {
      id: item[0],
      name: item[1],
      address: item[2],
      tag: item[3],
      price: item[4],
      city: item[5],
      img: item[6]
    }
  })
  
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

export default function Post({ posts }) {
  console.log(posts)
  return (
    <article>
      <h1 class="font-bold text-3xl">Data</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id} class="border-2 border-red-400 m-10">
            <Link href={`test/${index + 2}`}>
              <p>{post.name}</p>
              <p>{post.address}</p>
              <p>{post.city}</p>
              <img src={post.img} alt="111" class="w-40 h-40" />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}