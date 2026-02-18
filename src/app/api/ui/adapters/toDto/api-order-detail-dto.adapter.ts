import { OrderDetail } from '../../models/order-detail.interface';
import { ApiOrderDetailDto } from '../../../swagger/models/api-order-detail-dto';
import { adaptApiParticipantOfferSpecificFlagEnum } from './api-participant-offer-specific-flag-enum.adapter';
import { adaptApiTruTypeEnum } from './api-tru-type-enum.adapter';
import { adaptApiUsedClassificatorTypeEnum } from './api-used-classificator-type-enum.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';

export function adaptApiOrderDetailDto(source?: OrderDetail | null): ApiOrderDetailDto {
  return {
    ClassificatorCode: source?.classificatorCode,
    ClassificatorDescription: source?.classificatorDescription,
    Id: source?.id,
    KsrCode: source?.ksrCode,
    KsrUnitQuantity: source?.ksrUnitQuantity,
    LotItemId: source?.lotItemId,
    OkeiCode: source?.okeiCode,
    OkeiDescription: source?.okeiDescription,
    Okpd2Codes: source?.okpd2Codes ?? [],
    ParticipantOfferSpecific: adaptApiParticipantOfferSpecificFlagEnum(source?.participantOfferSpecific),
    PositionNumber: source?.positionNumber,
    ProductName: source?.productName,
    Quantity: source?.quantity,
    Type: adaptApiTruTypeEnum(source?.type),
    UnitPrice: source?.unitPrice,
    UnitPriceRegion: source?.unitPriceRegion,
    UsedClassificatorType: adaptApiUsedClassificatorTypeEnum(source?.usedClassificatorType),
    UsedClassificatorTypeDescription: source?.usedClassificatorTypeDescription,
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}
