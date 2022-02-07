import { FC } from 'react';

import ExternalLink from '../../ExternalLink';

type Props = {
  title: string;
  subtitle?: string;
  titleLink?: string;
  paragraph: string;
  ulContents: {
    title: string;
    content: string[];
  }[];
};

const Article: FC<Props> = ({
  title,
  subtitle,
  titleLink,
  paragraph,
  ulContents = [],
}) => {
  return (
    <div className='article flex flex-col'>
      {titleLink ? (
        <ExternalLink href={titleLink}>
          <h2
            className={`article__title my-1 text-xl font-bold ${
              titleLink && 'article__title--has-link'
            }`}
          >
            {/* {{ title }} */}
          </h2>
        </ExternalLink>
      ) : (
        <h2 className='article__title my-1 text-xl font-bold'>{title}</h2>
      )}
      <p className='article__subtitle indent-8'>{subtitle}</p>
      <p className='article__paragraph indent-8'>{paragraph}</p>
      {ulContents.map(({ title: ulTitle, content: liContents = [] }, index) => (
        <div key={index} className='lineup my-1'>
          <span className='lineup__title font-bold'>{ulTitle}</span>
          <ul className='ul ml-14 list-disc'>
            {liContents.map((li_content, index) => (
              <li className='li indent-0 leading-7' key={index}>
                {li_content}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Article;
