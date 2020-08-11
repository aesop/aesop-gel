import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContentHubArticle from '~/components/ContentHubArticle';
import Transition from '~/components/Transition';
import styles from './ReadMore.module.css';

const ReadMore = ({ articles, className }) => {
  const classSet = cx(styles.base, className);
  const readMoreArticleClassSet = cx(styles.readMoreArticle);

  return (
    <Transition isActiveOnMount={true} type="fade">
      <div className={classSet}>
        {articles.map(article => (
          <ContentHubArticle
            category={article.category}
            className={readMoreArticleClassSet}
            dataTestRef={article.id}
            horizontalThumbnail={article.horizontalThumbnail}
            id={article.id}
            isHorizontal={true}
            isReadMore={true}
            key={article.id}
            longTitle={article.longTitle}
            readingTime={article.readingTime}
            uri={article.uri}
            verticalThumbnail={article.verticalThumbnail}
          />
        ))}
      </div>
    </Transition>
  );
};

ReadMore.propTypes = {
  articles: PropTypes.array,
  className: PropTypes.string,
};

ReadMore.defaultProps = {
  articles: undefined,
  className: undefined,
};

export default ReadMore;
