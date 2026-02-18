import { ApplicationStateEnum2 } from '../enums/application-state-enum-2.enum';
import { LotStateEnum } from '../enums/lot-state.enum';

export interface ApplicationInfoAlt {
  applicationSource: string;
  currentTenantHost: string;
  incomingNumber: number;
  publishDate: string;
  revokeDate: string;
  state: ApplicationStateEnum2;
  stateName: string;
  tenantHost: string;
  tradeLotNumber: number;
  tradeLotState: LotStateEnum;
  tradeName: string;
  tradeNumber: number;
  tradeStateName: string;
}
