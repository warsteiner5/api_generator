import { ApiEisIntegrationSendDealDto } from '../../../swagger/models/api-eis-integration-send-deal-dto';
import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { longTermVolumeAltAdapter } from './long-term-volume-alt.adapter';
import { marketDealPositionAdapter } from './market-deal-position.adapter';

export const eisIntegrationSendDealAdapter = (source?: ApiEisIntegrationSendDealDto | null): EisIntegrationSendDeal => {
  return {
    customContractNumber: source?.CustomContractNumber,
    dealId: source?.DealId,
    dealPositions: source?.DealPositions?.map((item) => marketDealPositionAdapter(item)),
    executionFrom: source?.ExecutionFrom,
    executionTo: source?.ExecutionTo,
    paymentData: source?.PaymentData?.map((item) => longTermVolumeAltAdapter(item)),
    price: source?.Price,
  };
}
