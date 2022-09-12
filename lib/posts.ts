import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// TODO: Move into utils folder

const postsDirectory = path.join(process.cwd(), "posts");

export interface IPost {
  id: string;
  content: string;
  title: string;
  date: string;
}

export function getSortedPostsData(): IPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    const dateA: string = a.date;
    const dateB: string = b.date;
    if (dateA < dateB) {
      return 1;
    } else if (dateA > dateB) {
      return -1;
    } else {
      return 0;
    }
  });
}

export interface PostId {
  params: {
    id: string;
  };
}

/**
 * The returned list is not just an array of strings — it must
 * be an array of objects that look like the comment above.
 * Each object must have the params key and contain an object
 * with the id key (because we’re using [id] in the file name).
 * Otherwise, getStaticPaths will fail.
 *
 * The [id].tsx will look for an id in params
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: contentHtml,
    // ...matterResult.data,
  };
}
