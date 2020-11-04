import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContentHubArticle from '~/components/ContentHubArticle';
import styles from './ContentHubArticleList.module.css';

const ContentHubArticleList = ({
  articles,
  className,
  isFirstGroup,
  pattern, // 0 means first image is horizontal
}) => {
  const count = articles && articles.length;

  const classSet = cx(styles.base, className);
  const mobileSet = cx(styles.mobile, className);
  const mobileMiddleSet = cx(styles.mobileMiddleRow, className);
  const topLeftClassSet = cx(styles[`top-left-${pattern}`], styles[`article`], {
    [styles.nonFirstRow]: (count < 3 && pattern === 0) || count < 2,
  });
  const topRightClassSet = cx(
    styles[`top-right-${pattern}`],
    styles[`article`],
    {
      [styles.nonFirstRow]: (count < 3 && pattern === 1) || count < 2,
    },
  );
  const bottomLeftClassSet = cx(
    styles[`bottom-left-${pattern}`],
    styles[`article`],
    {
      [styles.nonFirstRow]: count === 1 && pattern === 1,
    },
  );
  const bottomRightClassSet = cx(
    styles[`bottom-right-${pattern}`],
    styles[`article`],
  );
  const leftMiddleArticleClassSet = cx(styles.leftMiddleArticle);
  const middleArticleClassSet = cx(styles.middleArticle);
  const rightMiddleArticleClassSet = cx(styles.rightMiddleArticle);

  return (
    <section>
      <Fragment>
        <div className={classSet}>
          <div className={topLeftClassSet}>
            {count >= 3 && (
              <ContentHubArticle
                category={articles[0].category}
                dataTestRef={articles[0].id}
                handleClickTracking={articles[0].handleClickTracking}
                horizontalThumbnail={articles[0].horizontalThumbnail}
                id={articles[0].id}
                isHorizontal={Boolean(!pattern)}
                isInFirstGroup={isFirstGroup}
                key={articles[0].id}
                longTitle={articles[0].longTitle}
                readingTime={articles[0].readingTime}
                uri={articles[0].uri}
                verticalThumbnail={articles[0].verticalThumbnail}
              />
            )}
          </div>
          <div className={topRightClassSet}>
            {count >= 4 && (
              <ContentHubArticle
                category={articles[1].category}
                dataTestRef={articles[1].id}
                handleClickTracking={articles[1].handleClickTracking}
                horizontalThumbnail={articles[1].horizontalThumbnail}
                id={articles[1].id}
                isHorizontal={Boolean(pattern)}
                isInFirstGroup={isFirstGroup}
                key={articles[1].id}
                longTitle={articles[1].longTitle}
                readingTime={articles[1].readingTime}
                uri={articles[1].uri}
                verticalThumbnail={articles[1].verticalThumbnail}
              />
            )}
          </div>
          <div className={bottomLeftClassSet}>
            {count >= 1 && (
              <ContentHubArticle
                category={(articles[count - 2] || articles[0]).category}
                dataTestRef={(articles[count - 2] || articles[0]).id}
                handleClickTracking={
                  (articles[count - 2] || articles[0]).handleClickTracking
                }
                horizontalThumbnail={
                  (articles[count - 2] || articles[0]).horizontalThumbnail
                }
                id={(articles[count - 2] || articles[0]).id}
                isHorizontal={Boolean(pattern)}
                isInFirstGroup={isFirstGroup}
                longTitle={(articles[count - 2] || articles[0]).longTitle}
                readingTime={(articles[count - 2] || articles[0]).readingTime}
                uri={(articles[count - 2] || articles[0]).uri}
                verticalThumbnail={
                  (articles[count - 2] || articles[0]).verticalThumbnail
                }
              />
            )}
          </div>
          <div className={bottomRightClassSet}>
            {count >= 2 && (
              <ContentHubArticle
                category={(articles[count - 1] || articles[1]).category}
                dataTestRef={(articles[count - 1] || articles[1]).id}
                handleClickTracking={
                  (articles[count - 1] || articles[1]).handleClickTracking
                }
                horizontalThumbnail={
                  (articles[count - 1] || articles[1]).horizontalThumbnail
                }
                id={(articles[count - 1] || articles[1]).id}
                isHorizontal={Boolean(!pattern)}
                isInFirstGroup={isFirstGroup}
                longTitle={(articles[count - 1] || articles[1]).longTitle}
                readingTime={(articles[count - 1] || articles[1]).readingTime}
                uri={(articles[count - 1] || articles[1]).uri}
                verticalThumbnail={
                  (articles[count - 1] || articles[1]).verticalThumbnail
                }
              />
            )}
          </div>
        </div>

        {pattern === 0 && (
          <div className={mobileSet}>
            {count >= 4 && (
              <ContentHubArticle
                category={articles[0].category}
                dataTestRef={articles[0].id}
                handleClickTracking={articles[0].handleClickTracking}
                horizontalThumbnail={articles[0].horizontalThumbnail}
                id={articles[0].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[0].id}
                longTitle={articles[0].longTitle}
                readingTime={articles[0].readingTime}
                uri={articles[0].uri}
                verticalThumbnail={articles[0].verticalThumbnail}
              />
            )}
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet}>
                {count >= 3 && (
                  <ContentHubArticle
                    category={(articles[count - 3] || articles[0]).category}
                    className={leftMiddleArticleClassSet}
                    dataTestRef={(articles[count - 3] || articles[0]).id}
                    handleClickTracking={
                      (articles[count - 3] || articles[0]).handleClickTracking
                    }
                    horizontalThumbnail={
                      (articles[count - 3] || articles[0]).horizontalThumbnail
                    }
                    id={(articles[count - 3] || articles[0]).id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={(articles[count - 3] || articles[0]).id}
                    longTitle={(articles[count - 3] || articles[0]).longTitle}
                    readingTime={
                      (articles[count - 3] || articles[0]).readingTime
                    }
                    uri={(articles[count - 3] || articles[0]).uri}
                    verticalThumbnail={
                      (articles[count - 3] || articles[0]).verticalThumbnail
                    }
                  />
                )}
              </div>
              <div className={middleArticleClassSet}>
                {count >= 2 && (
                  <ContentHubArticle
                    category={articles[count - 2].category}
                    className={rightMiddleArticleClassSet}
                    dataTestRef={articles[count - 2].id}
                    handleClickTracking={
                      articles[count - 2].handleClickTracking
                    }
                    horizontalThumbnail={
                      articles[count - 2].horizontalThumbnail
                    }
                    id={articles[count - 2].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[count - 2].id}
                    longTitle={articles[count - 2].longTitle}
                    readingTime={articles[count - 2].readingTime}
                    uri={articles[count - 2].uri}
                    verticalThumbnail={articles[count - 2].verticalThumbnail}
                  />
                )}
              </div>
            </div>
            {count >= 1 && (
              <ContentHubArticle
                category={articles[count - 1].category}
                dataTestRef={articles[count - 1].id}
                handleClickTracking={articles[count - 1].handleClickTracking}
                horizontalThumbnail={articles[count - 1].horizontalThumbnail}
                id={articles[count - 1].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[count - 1].id}
                longTitle={articles[count - 1].longTitle}
                readingTime={articles[count - 1].readingTime}
                uri={articles[count - 1].uri}
                verticalThumbnail={articles[count - 1].verticalThumbnail}
              />
            )}
          </div>
        )}
        {pattern === 1 && (
          <div className={mobileSet}>
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet}>
                {count >= 4 && (
                  <ContentHubArticle
                    category={articles[0].category}
                    className={leftMiddleArticleClassSet}
                    dataTestRef={articles[0].id}
                    handleClickTracking={articles[0].handleClickTracking}
                    horizontalThumbnail={articles[0].horizontalThumbnail}
                    id={articles[0].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[0].id}
                    longTitle={articles[0].longTitle}
                    readingTime={articles[0].readingTime}
                    uri={articles[0].uri}
                    verticalThumbnail={articles[0].verticalThumbnail}
                  />
                )}
              </div>
              <div className={middleArticleClassSet} />
            </div>
            {count >= 3 && (
              <ContentHubArticle
                category={(articles[count - 3] || articles[0]).category}
                dataTestRef={(articles[count - 3] || articles[0]).id}
                handleClickTracking={
                  (articles[count - 3] || articles[0]).handleClickTracking
                }
                horizontalThumbnail={
                  (articles[count - 3] || articles[0]).horizontalThumbnail
                }
                id={(articles[count - 3] || articles[0]).id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={(articles[count - 3] || articles[0]).id}
                longTitle={(articles[count - 3] || articles[0]).longTitle}
                readingTime={(articles[count - 3] || articles[0]).readingTime}
                uri={(articles[count - 3] || articles[0]).uri}
                verticalThumbnail={
                  (articles[count - 3] || articles[0]).verticalThumbnail
                }
              />
            )}
            {count >= 2 && (
              <ContentHubArticle
                category={articles[count - 2].category}
                dataTestRef={articles[count - 2].id}
                handleClickTracking={articles[count - 2].handleClickTracking}
                horizontalThumbnail={articles[count - 2].horizontalThumbnail}
                id={articles[count - 2].id}
                isHorizontal={true}
                isInFirstGroup={isFirstGroup}
                key={articles[count - 2].id}
                longTitle={articles[count - 2].longTitle}
                readingTime={articles[count - 2].readingTime}
                uri={articles[count - 2].uri}
                verticalThumbnail={articles[count - 2].verticalThumbnail}
              />
            )}
            <div className={mobileMiddleSet}>
              <div className={middleArticleClassSet} />
              <div className={middleArticleClassSet}>
                {count >= 1 && (
                  <ContentHubArticle
                    category={articles[count - 1].category}
                    className={rightMiddleArticleClassSet}
                    dataTestRef={articles[count - 1].id}
                    handleClickTracking={
                      articles[count - 1].handleClickTracking
                    }
                    horizontalThumbnail={
                      articles[count - 1].horizontalThumbnail
                    }
                    id={articles[count - 1].id}
                    isHorizontal={false}
                    isInFirstGroup={isFirstGroup}
                    key={articles[count - 1].id}
                    longTitle={articles[count - 1].longTitle}
                    readingTime={articles[count - 1].readingTime}
                    uri={articles[count - 1].uri}
                    verticalThumbnail={articles[count - 1].verticalThumbnail}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </section>
  );
};

ContentHubArticleList.propTypes = {
  articles: PropTypes.array,
  className: PropTypes.string,
  isFirstGroup: PropTypes.bool,
  pattern: PropTypes.oneOf([0, 1]),
};

ContentHubArticleList.defaultProps = {
  articles: undefined,
  className: undefined,
  isFirstGroup: false,
  pattern: 0,
};

export default ContentHubArticleList;
