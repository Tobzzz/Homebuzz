import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './FeaturedListings.css';

import brixtonImage from './images/studio apartments.jpeg';
import camdenImage from './images/Lux studio.jpeg';
import shoreditchImage from './images/shared apartments.jpeg';


class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="FeaturedListings.listingsInLocation"
          values={{ apartments: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const FeaturedListings = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="FeaturedListings.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Studio Flats',
          brixtonImage,
          '?address=London&bounds=51.47030911%2C-0.09591138%2C51.44287872%2C-0.13651028'
        )}
        {locationLink(
          'Luxury Apartments',
          camdenImage,
          '?address=London&bounds=51.55273343%2C-0.1219784%2C51.53102291%2C-0.15417167'
        )}
        {locationLink(
          'Co-Living Homes',
          shoreditchImage,
          '?address=Shoreditch%2C%20East%20London&bounds=51.53233597%2C-0.06825022%2C51.51890999%2C-0.08815171'
        )}
      </div>
    </div>
  );
};

FeaturedListings.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

FeaturedListings.propTypes = {
  rootClassName: string,
  className: string,
};

export default FeaturedListings;
