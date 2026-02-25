import { OfferFilterAlt } from '../../models/offer-filter-alt.interface';
import { ApiOfferFilterAltDto } from '../../../swagger/models/api-offer-filter';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiParticipantOfferSourceEnumAdapter } from '../enums/api-participant-offer-source-enum.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiParticipantOfferTypeEnumAdapter } from '../enums/api-participant-offer-type-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiOfferFilterAltDtoAdapter = (source?: OfferFilterAlt | null): ApiOfferFilterAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    ProductName: source?.productName,
    SubProductName: source?.subProductName,
    UsedClassificator: source?.usedClassificator === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificator),
    ClassificatorCodes: source?.classificatorCodes,
    PriceFrom: source?.priceFrom,
    PriceTo: source?.priceTo,
    OfferTermsFrom: source?.offerTermsFrom,
    OfferTermsTo: source?.offerTermsTo,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    ParticipantInn: source?.participantInn,
    ParticipantName: source?.participantName,
    OfferType: source?.offerType === null ? undefined : apiParticipantOfferTypeEnumAdapter(source?.offerType),
    PublishDateFrom: source?.publishDateFrom,
    PublishDateTo: source?.publishDateTo,
    IsPublicOffer: source?.isPublicOffer,
    OnlyWithoutPictures: source?.onlyWithoutPictures,
    ParticipantOfferSource: source?.participantOfferSource === null ? undefined : apiParticipantOfferSourceEnumAdapter(source?.participantOfferSource),
    OnlyMyOffers: source?.onlyMyOffers,
    ItemInStock: source?.itemInStock,
    OnOrder: source?.onOrder,
    HasPhoto: source?.hasPhoto,
    QuantityInStockFrom: source?.quantityInStockFrom,
    QuantityInStockTo: source?.quantityInStockTo,
    LastModificationDateFrom: source?.lastModificationDateFrom,
    LastModificationDateTo: source?.lastModificationDateTo,
    ViewsCountFrom: source?.viewsCountFrom,
    ViewsCountTo: source?.viewsCountTo,
    StartedDealsCountFrom: source?.startedDealsCountFrom,
    StartedDealsCountTo: source?.startedDealsCountTo,
    HasStartedDeals: source?.hasStartedDeals,
    HasCompletedDeals: source?.hasCompletedDeals,
    OrganizationId: source?.organizationId,
    UserId: source?.userId,
    ParentObjectId: source?.parentObjectId,
    VendorCode: source?.vendorCode,
    SellerCode: source?.sellerCode,
    BarCode: source?.barCode,
    CategoryIds: source?.categoryIds,
    KladrCodeProductionRegions: source?.kladrCodeProductionRegions,
  };
}
