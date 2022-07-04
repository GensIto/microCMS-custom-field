import Link from "next/link";
import { client } from "../lib/client";

export default function Recipe({ recipe }: any) {
  return (
    <div>
      <ul>
        {recipe.map((recipe: any) => (
          <li key={recipe.id}>
            <Link href={`/recipe/${recipe.id}`}>
              <a>{recipe.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "qcdgn6qpi5di" });
  console.log(data);
  return {
    props: {
      recipe: data.contents,
    },
  };
};
