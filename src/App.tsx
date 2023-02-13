import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface postProps {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}
const posts: postProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/micaellyuchoa.png",
      name: "Micaelly Uchoa",
      role: "Front-end Developer Senior",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-11 11:51:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/micaellyuchoa.png",
      name: "Micaelly Uchoa",
      role: "Front-end Developer Senior",
    },
    content: [
      { type: "paragraph", content: "Oie Pessoal 👋" },
      {
        type: "paragraph",
        content: "Acabei de fazer um projeto incrivel com a rocketseat.",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-02-11 06:30:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            console.log(post.content);
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
