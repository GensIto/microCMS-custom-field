import { client } from "../../lib/client";
import { GetStaticProps, GetStaticPaths } from "next";

export default function RecipeId({ recipe }: any) {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.img.url} alt={recipe.title} width='250' />
      <div
        dangerouslySetInnerHTML={{
          __html: `${recipe.content}`,
        }}
      />
      <p>材料</p>
      <ul>
        {recipe.material.map((item: any) => (
          <li key={item.length}>{item.material}</li>
        ))}
      </ul>
      <p>手順</p>
      <ul>
        {recipe.procedure.map((item: any) => (
          <li key={item.length}>{item.procedure}</li>
        ))}
      </ul>
    </div>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "qcdgn6qpi5di" });

  const paths = data.contents.map((content: any) => `/recipe/${content.id}`); // ここである分の[id]ファイルを展開
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "qcdgn6qpi5di", contentId: id });

  return {
    props: {
      recipe: data,
    },
  };
};
