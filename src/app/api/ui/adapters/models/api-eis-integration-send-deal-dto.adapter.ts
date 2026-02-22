import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { ApiEisIntegrationSendDealDto } from '../../../swagger/models/api-eis-integration-send-deal-dto';
import { apiLongTermVolumeAltDtoAdapter } from './api-long-term-volume.adapter';
import { apiMarketDealPositionDtoAdapter } from './api-market-deal-position-dto.adapter';

export const apiEisIntegrationSendDealDtoAdapter = (source?: EisIntegrationSendDeal | null): ApiEisIntegrationSendDealDto => {
  return {
    CustomContractNumber: source?.customContractNumber,
    DealId: source?.dealId,
    DealPositions: source?.dealPositions?.map((item) => apiMarketDealPositionDtoAdapter(item)),
    ExecutionFrom: source?.executionFrom,
    ExecutionTo: source?.executionTo,
    PaymentData: source?.paymentData?.map((item) => apiLongTermVolumeAltDtoAdapter(item)),
    Price: source?.price,
  };
}
