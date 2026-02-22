import { ApiOrderDetailDto } from '../../../swagger/models/api-order-detail-dto';
import { OrderDetail } from '../../models/order-detail.interface';
import { participantOfferSpecificFlagEnumAdapter } from '../enums/participant-offer-specific-flag-enum.adapter';
import { truTypeEnumAdapter } from '../enums/tru-type-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const orderDetailAdapter = (source?: ApiOrderDetailDto | null): OrderDetail => {
  return {
    classificatorCode: source?.ClassificatorCode,
    classificatorDescription: source?.ClassificatorDescription,
    id: source?.Id,
    ksrCode: source?.KsrCode,
    ksrUnitQuantity: source?.KsrUnitQuantity,
    lotItemId: source?.LotItemId,
    okeiCode: source?.OkeiCode,
    okeiDescription: source?.OkeiDescription,
    okpd2Codes: source?.Okpd2Codes,
    participantOfferSpecific: source?.ParticipantOfferSpecific === null ? undefined : participantOfferSpecificFlagEnumAdapter(source?.ParticipantOfferSpecific),
    positionNumber: source?.PositionNumber,
    productName: source?.ProductName,
    quantity: source?.Quantity,
    type: source?.Type === null ? undefined : truTypeEnumAdapter(source?.Type),
    unitPrice: source?.UnitPrice,
    unitPriceRegion: source?.UnitPriceRegion,
    usedClassificatorType: source?.UsedClassificatorType === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificatorType),
    usedClassificatorTypeDescription: source?.UsedClassificatorTypeDescription,
    vatRate: source?.VatRate,
    vatRateDescription: source?.VatRateDescription,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}
