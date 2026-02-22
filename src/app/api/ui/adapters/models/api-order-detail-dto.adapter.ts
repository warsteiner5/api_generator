import { OrderDetail } from '../../models/order-detail.interface';
import { ApiOrderDetailDto } from '../../../swagger/models/api-order-detail-dto';
import { apiParticipantOfferSpecificFlagEnumAdapter } from '../enums/api-participant-offer-specific-flag-enum.adapter';
import { apiTruTypeEnumAdapter } from '../enums/api-tru-type-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiOrderDetailDtoAdapter = (source?: OrderDetail | null): ApiOrderDetailDto => {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Id: source?.id,
    KsrCode: source?.ksrCode,
    KsrUnitQuantity: source?.ksrUnitQuantity,
    LotItemId: source?.lotItemId,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: source?.okpd2Codes,
    ParticipantOfferSpecific: source?.participantOfferSpecific === null ? undefined : apiParticipantOfferSpecificFlagEnumAdapter(source?.participantOfferSpecific),
    PositionNumber: source?.positionNumber,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    Type: source?.type === null ? undefined : apiTruTypeEnumAdapter(source?.type),
    UnitPrice: source?.unitPrice,
    UnitPriceRegion: source?.unitPriceRegion,
    UsedClassificatorType: source?.usedClassificatorType === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificatorType),
    UsedClassificatorTypeDescription: source?.usedClassificatorTypeDescription,
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}
