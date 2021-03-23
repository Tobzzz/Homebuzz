import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import brixtonImage from './images/brikky (2).jpg';
import camdenImage from './images/Camden (1).jpg';
import shoreditchImage from './images/Shoreditch.jpg';
import nottinghillImage from './images/Notting hill.jpg';
import hackneyImage from './images/Hackney Wick.jpg';
import batterseaImage from './images/Battersea.jpg'


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
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Brixton',
          brixtonImage,
          '?address=London&bounds=51.47030911%2C-0.09591138%2C51.44287872%2C-0.13651028'
        )}
        {locationLink(
          'Camden',
          camdenImage,
          '?address=London&bounds=51.55273343%2C-0.1219784%2C51.53102291%2C-0.15417167'
        )}
        {locationLink(
          'Shoreditch',
          shoreditchImage,
          '?address=Shoreditch%2C%20East%20London&bounds=51.53233597%2C-0.06825022%2C51.51890999%2C-0.08815171'
        )}
      </div>
      <div className={css.locations}>
        {locationLink(
          'Hackney Wick',
          hackneyImage,
          '?address=London&bounds=51.55758072,-0.00695198,51.53020282,-0.04755087'
        )}
        {locationLink(
          'Notting Hill',
          nottinghillImage,
          '?address=London&bounds=51.52289649%2C-0.18761462%2C51.49780958%2C-0.2247888'
        )}
        {locationLink(
          'Battersea',
          batterseaImage,
          '?address=London&bounds=51.48180091%2C-0.15616649%2C51.45871592%2C-0.19034412'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
