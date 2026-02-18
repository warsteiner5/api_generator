import { ApiOrderDetailDto } from '../../../swagger/models/api-order-detail-dto';
import { OrderDetail } from '../../models/order-detail.interface';
import { adaptParticipantOfferSpecificFlagEnumToUI } from './participant-offer-specific-flag-enum.adapter';
import { adaptTruTypeEnumToUI } from './tru-type-enum.adapter';
import { adaptUsedClassificatorTypeEnumToUI } from './used-classificator-type-enum.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptOrderDetailToUI(source?: ApiOrderDetailDto | null): OrderDetail {
  return {
    classificatorCode: source?.ClassificatorCode ?? '',
    classificatorDescription: source?.ClassificatorDescription ?? '',
    id: source?.Id ?? 0,
    ksrCode: source?.KsrCode ?? '',
    ksrUnitQuantity: source?.KsrUnitQuantity ?? 0,
    lotItemId: source?.LotItemId ?? 0,
    okeiCode: source?.OkeiCode ?? '',
    okeiDescription: source?.OkeiDescription ?? '',
    okpd2Codes: source?.Okpd2Codes ?? [],
    participantOfferSpecific: adaptParticipantOfferSpecificFlagEnumToUI(source?.ParticipantOfferSpecific),
    positionNumber: source?.PositionNumber ?? '',
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    type: adaptTruTypeEnumToUI(source?.Type),
    unitPrice: source?.UnitPrice ?? 0,
    unitPriceRegion: source?.UnitPriceRegion ?? '',
    usedClassificatorType: adaptUsedClassificatorTypeEnumToUI(source?.UsedClassificatorType),
    usedClassificatorTypeDescription: source?.UsedClassificatorTypeDescription ?? '',
    vatRate: source?.VatRate ?? 0,
    vatRateDescription: source?.VatRateDescription ?? '',
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}
