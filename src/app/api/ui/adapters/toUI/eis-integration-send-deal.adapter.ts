import { ApiEisIntegrationSendDealDto } from '../../../swagger/models/api-eis-integration-send-deal-dto';
import { EisIntegrationSendDeal } from '../../models/eis-integration-send-deal.interface';
import { adaptLongTermVolumeAltToUI } from './long-term-volume-alt.adapter';
import { adaptMarketDealPositionToUI } from './market-deal-position.adapter';

export function adaptEisIntegrationSendDealToUI(source?: ApiEisIntegrationSendDealDto | null): EisIntegrationSendDeal {
  return {
    customContractNumber: source?.CustomContractNumber ?? '',
    dealId: source?.DealId ?? 0,
    dealPositions: (source?.DealPositions ?? []).map((item) => adaptMarketDealPositionToUI(item)),
    executionFrom: source?.ExecutionFrom ?? '',
    executionTo: source?.ExecutionTo ?? '',
    paymentData: (source?.PaymentData ?? []).map((item) => adaptLongTermVolumeAltToUI(item)),
    price: source?.Price ?? 0,
  };
}
