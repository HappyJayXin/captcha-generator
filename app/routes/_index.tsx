import type { MetaFunction, LinksFunction } from "@remix-run/node";
import styles from "../styles/index.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Index = () => {
  return (
    <div className="wrapper">
      <h1>歡迎來到我的 Remix 應用！</h1>
      <p>這是一個全新的乾淨頁面，從這裡開始你的旅程。</p>
    </div>
  );
};

export default Index;
