import { FC } from "react";

import markdownStyles from "../../styles/markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody: FC<Props> = ({ content }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className={markdownStyles["markdown-body"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
