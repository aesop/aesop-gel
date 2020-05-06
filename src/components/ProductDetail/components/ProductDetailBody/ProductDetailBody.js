import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ParagraphSet } from '~/components/Paragraph';
import AddToCartButton from '~/components/AddToCartButton';
import DefinitionList from '~/components/DefinitionList';
import FlyinPanel from '~/components/FlyinPanel';
import Hidden from '~/components/Hidden';
import Icon from '~/components/Icon';
import Transition from '~/components/Transition';
import styles from './ProductDetailBody.module.css';

import Button from '~/components/Button';

const ProductDetailBody = ({
  className,
  copy,
  definitionList,
  ingredients,
  keyIngredient,
  price,
  productName,
  sku,
  theme,
}) => {
  const classSet = cx(styles.base, styles[theme], className);
  const [isFlyinPanelVisible, setIsFlyinPanelVisible] = React.useState(false);

  const definitionListItems = [
    ...definitionList,
    {
      term: (
        <>
          <span>{copy.ingredients.label}</span>
          {ingredients && (
            <Button
              className={cx(styles.ingredientsTrigger, {
                [styles.isActiveButton]: isFlyinPanelVisible,
              })}
              isInline={true}
              onClick={() => setIsFlyinPanelVisible(true)}
              theme={theme}
              title={copy.ingredients.title}
            >
              <Icon
                height={22}
                name="plusAndCloseWithCircle"
                theme={theme}
                width={22}
              />
            </Button>
          )}
        </>
      ),
      description: keyIngredient,
    },
  ];

  return (
    <div className={classSet}>
      <Hidden isLarge={true} isXLarge={true}>
        <Transition isActiveOnMount={true} type="shiftInDown">
          <AddToCartButton
            dataTestRef="ADD_TO_CART_SMALL_CTA"
            isEnabled={!!price && !!sku}
            price={price}
            productName={productName}
            theme={theme}
          />
        </Transition>
      </Hidden>

      <Transition isActiveOnMount={true} type="shiftInDown">
        <DefinitionList
          className={styles.definitionList}
          items={definitionListItems}
          theme={theme}
        />
      </Transition>

      <Hidden isMedium={true} isSmall={true}>
        <Transition isActiveOnMount={true} type="shiftInDown">
          <AddToCartButton
            dataTestRef="ADD_TO_CART_SMALL_CTA"
            isEnabled={!!price && !!sku}
            price={price}
            productName={productName}
            theme={theme}
          />
        </Transition>
      </Hidden>
      {ingredients && (
        <FlyinPanel
          heading={copy.ingredients.heading}
          isVisible={isFlyinPanelVisible}
          onClose={() => setIsFlyinPanelVisible(false)}
        >
          <ParagraphSet>{ingredients}</ParagraphSet>
        </FlyinPanel>
      )}
    </div>
  );
};

ProductDetailBody.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.shape({
    ingredients: {
      heading: PropTypes.string,
      label: PropTypes.string,
      title: PropTypes.string,
    },
  }),
  definitionList: PropTypes.arrayOf(
    PropTypes.shape({
      term: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  ingredients: PropTypes.string,
  keyIngredient: PropTypes.string,
  price: PropTypes.string,
  productName: PropTypes.string,
  sku: PropTypes.string,
  theme: PropTypes.oneOf(['dark', 'light']),
};

ProductDetailBody.defaultProps = {
  className: undefined,
  copy: {
    ingredients: {
      heading: 'Ingredients',
      label: 'Key ingredients',
      title: 'See ingredients',
    },
  },
  definitionList: [],
  ingredients: undefined,
  keyIngredient: undefined,
  price: undefined,
  productName: undefined,
  sku: undefined,
  theme: 'dark',
};

export default ProductDetailBody;
