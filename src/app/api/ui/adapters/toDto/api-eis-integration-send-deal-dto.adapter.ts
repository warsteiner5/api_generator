import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { ApiEisIntegrationSendDealDto } from '../../../swagger/models/api-eis-integration-send-deal-dto';
import { adaptApiLongTermVolumeAltDto } from './api-long-term-volume.adapter';
import { adaptApiMarketDealPositionDto } from './api-market-deal-position-dto.adapter';

export function adaptApiEisIntegrationSendDealDto(source?: EisIntegrationSendDeal | null): ApiEisIntegrationSendDealDto {
  return {
    CustomContractNumber: source?.customContractNumber,
    DealId: source?.dealId,
    DealPositions: (source?.dealPositions ?? []).map((item) => adaptApiMarketDealPositionDto(item)),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    PaymentData: (source?.paymentData ?? []).map((item) => adaptApiLongTermVolumeAltDto(item)),
    Price: source?.price,
  };
}
