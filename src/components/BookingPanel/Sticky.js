// import React from 'react';
// import { StickyContainer, Sticky } from 'react-sticky';
// // ...
 
// class App extends React.Component {
//   render() {
//     return (
//       <StickyContainer>
//         {/* Other elements can be in between `StickyContainer` and `Sticky`,
//         but certain styles can break the positioning logic used. */}
//         <Sticky>
//           {({
//             style,
 
//             // the following are also available but unused in this example
//           }) => (
//             <div className={classes}>
//       <ModalInMobile
//         containerClassName={css.modalContainer}
//         id="BookingDatesFormInModal"
//         isModalOpenOnMobile={isBook}
//         onClose={() => closeBookModal(history, location)}
//         showAsModalMaxWidth={MODAL_BREAKPOINT}
//         onManageDisableScrolling={onManageDisableScrolling}
//       >
//         <div className={css.modalHeading}>
//           <h1 className={css.title}>{title}</h1>
//           <div className={css.author}>
//             <FormattedMessage id="BookingPanel.hostedBy" values={{ name: authorDisplayName }} />
//           </div>
//         </div>

//         <div className={css.bookingHeading}>
//           <h2 className={titleClasses}>{title}</h2>
//           {subTitleText ? <div className={css.bookingHelp}>{subTitleText}</div> : null}
//         </div>
//         {showBookingDatesForm ? (
//           <BookingDatesForm
//             className={css.bookingForm}
//             formId="BookingPanel"
//             submitButtonWrapperClassName={css.bookingDatesSubmitButtonWrapper}
//             unitType={unitType}
//             onSubmit={onSubmit}
//             price={price}
//             listingId={listing.id}
//             isOwnListing={isOwnListing}
//             timeSlots={timeSlots}
//             fetchTimeSlotsError={fetchTimeSlotsError}
//             onFetchTransactionLineItems={onFetchTransactionLineItems}
//             lineItems={lineItems}
//             fetchLineItemsInProgress={fetchLineItemsInProgress}
//             fetchLineItemsError={fetchLineItemsError}
//           />
//         ) : null}
//       </ModalInMobile>
//       <div className={css.openBookingForm}>
//         <div className={css.priceContainer}>
//           <div className={css.priceValue} title={priceTitle}>
//             {formattedPrice}
//           </div>
//           <div className={css.perUnit}>
//             <FormattedMessage id={unitTranslationKey} />
//           </div>
//         </div>

//         {showBookingDatesForm ? (
//           <Button
//             rootClassName={css.bookButton}
//             onClick={() => openBookModal(isOwnListing, isClosed, history, location)}
//           >
//             <FormattedMessage id="BookingPanel.ctaButtonMessage" />
//           </Button>
//         ) : isClosed ? (
//           <div className={css.closedListingButton}>
//             <FormattedMessage id="BookingPanel.closedListingButtonText" />
//           </div>
//         ) : null}
//       </div>
//     </div>
//           )}
//         </Sticky>
//       </StickyContainer>
//     )
// }
// }
