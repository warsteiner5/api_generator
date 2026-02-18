import { NicRegistryParticipantInfo } from './nic-registry-participant-info.interface';

export interface NicRegistryTradeInfo {
  customerInn: string;
  customerKpp: string;
  customerName: string;
  tenantName: string;
  tradeId: number;
  tradeName: string;
  winners: NicRegistryParticipantInfo[];
}
