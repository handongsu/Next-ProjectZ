import Post from "../_component/Post";
import style from "./home.module.css";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";

export default function Home() {
  return (
    <main className={style.main}>
      <Tab />
      <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
}
