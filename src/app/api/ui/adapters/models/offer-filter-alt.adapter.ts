import { ApiOfferFilterAltDto } from '../../../swagger/models/api-offer-filter';
import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { participantOfferTypeEnumAdapter } from '../enums/participant-offer-type-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const offerFilterAltAdapter = (source?: ApiOfferFilterAltDto | null): OfferFilterAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    productName: source?.ProductName,
    subProductName: source?.SubProductName,
    usedClassificator: source?.UsedClassificator === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificator),
    classificatorCodes: source?.ClassificatorCodes,
    priceFrom: source?.PriceFrom,
    priceTo: source?.PriceTo,
    offerTermsFrom: source?.OfferTermsFrom,
    offerTermsTo: source?.OfferTermsTo,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    participantInn: source?.ParticipantInn,
    participantName: source?.ParticipantName,
    offerType: source?.OfferType === null ? undefined : participantOfferTypeEnumAdapter(source?.OfferType),
    publishDateFrom: source?.PublishDateFrom,
    publishDateTo: source?.PublishDateTo,
    isPublicOffer: source?.IsPublicOffer,
    onlyWithoutPictures: source?.OnlyWithoutPictures,
    participantOfferSource: source?.ParticipantOfferSource === null ? undefined : participantOfferSourceEnumAdapter(source?.ParticipantOfferSource),
    onlyMyOffers: source?.OnlyMyOffers,
    itemInStock: source?.ItemInStock,
    onOrder: source?.OnOrder,
    hasPhoto: source?.HasPhoto,
    quantityInStockFrom: source?.QuantityInStockFrom,
    quantityInStockTo: source?.QuantityInStockTo,
    lastModificationDateFrom: source?.LastModificationDateFrom,
    lastModificationDateTo: source?.LastModificationDateTo,
    viewsCountFrom: source?.ViewsCountFrom,
    viewsCountTo: source?.ViewsCountTo,
    startedDealsCountFrom: source?.StartedDealsCountFrom,
    startedDealsCountTo: source?.StartedDealsCountTo,
    hasStartedDeals: source?.HasStartedDeals,
    hasCompletedDeals: source?.HasCompletedDeals,
    organizationId: source?.OrganizationId,
    userId: source?.UserId,
    parentObjectId: source?.ParentObjectId,
    vendorCode: source?.VendorCode,
    sellerCode: source?.SellerCode,
    barCode: source?.BarCode,
    categoryIds: source?.CategoryIds,
    kladrCodeProductionRegions: source?.KladrCodeProductionRegions,
  };
}
