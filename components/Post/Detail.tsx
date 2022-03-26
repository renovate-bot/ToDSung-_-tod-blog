import { FC } from 'react';

import markdownStyles from '@/styles/markdown-styles.module.css';

type Props = {
  content: string;
};

const PostDetail: FC<Props> = ({ content }) => {
  return (
    <div className='mx-auto max-w-5xl'>
      <div
        className={markdownStyles['markdown-body']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostDetail;
