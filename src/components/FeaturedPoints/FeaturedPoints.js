import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './FeaturedPoints.css';
import icon1 from './icon/cleaners.png';
import icon2 from './icon/growth.png';
import icon3 from './icon/Verified.png';

const FeaturedPoints = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="FeaturedPoints.titleLineOne" />
        <br />
        <FormattedMessage id="FeaturedPoints.titleLineTwo" />
      </div>

      <div className={css.steps}>
        <div className={css.step}>
        <img src= {icon1} className={css.iconImage} alt="step1"/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="FeaturedPoints.part1Title" />
          </h2>
          <p>
            <FormattedMessage id="FeaturedPoints.part1Text" />
          </p>
        </div>

        <div className={css.step}>
        <img src= {icon2} className={css.iconImage} alt="step2"/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="FeaturedPoints.part2Title" />
          </h2>
          <p>
            <FormattedMessage id="FeaturedPoints.part2Text" />
          </p>
        </div>

        <div className={css.step}>
        <img src= {icon3} className={css.iconImage} alt="step3"/>
          <h2 className={css.stepTitle}>
            <FormattedMessage id="FeaturedPoints.part3Title" />
          </h2>
          <p>
            <FormattedMessage id="FeaturedPoints.part3Text" />
          </p>
        </div>
      </div>
      <div className={css.createListingLink}>
        <NamedLink name="NewListingPage">
          <FormattedMessage id="SectionHowItWorks.createListingLink" />
        </NamedLink>
      </div>
    </div>
  );
};

FeaturedPoints.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

FeaturedPoints.propTypes = {
  rootClassName: string,
  className: string,
};

export default FeaturedPoints;
