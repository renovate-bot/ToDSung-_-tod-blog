import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

export const POSTS_ROOT_NAME = "_posts";

const getFullPath = (path) => join(process.cwd(), path);

export function getPostFullSlugs(path = POSTS_ROOT_NAME) {
  const postsPath = getFullPath(path);
  const files = fs.readdirSync(postsPath);
  return files
    .map((file) => {
      const fullPath = join(path, file);
      if (file.includes(".md")) return fullPath;

      return getPostFullSlugs(fullPath);
    })
    .flat();
}

export function getPostByPath(path, fields = []) {
  const fullPath = getFullPath(path);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      const slug = path.split("/").slice(1).join("/").replace(/\.md$/, "");
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const paths = getPostFullSlugs();
  const posts = paths
    .map((path) => getPostByPath(path, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
