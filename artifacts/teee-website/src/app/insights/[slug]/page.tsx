import { articles } from "../../../data/articles";
import ArticlePage from "../../../pages/ArticlePage";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function Page() {
  return <ArticlePage />;
}
