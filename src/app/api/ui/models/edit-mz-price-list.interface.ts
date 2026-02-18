import { DeliveryRegionInfo } from './delivery-region-info.interface';
import { PriceListStateEnum } from '../enums/price-list-state.enum';

export interface EditMzPriceList {
  autoUpdateScheduleState: number;
  belongedToTenantId: number;
  company: string;
  createdUserId: number;
  cronExpr: string;
  deliveryRegionInfos: DeliveryRegionInfo[];
  expirationDateTime: string;
  externalId: string;
  id: number;
  isAutoUpdated: boolean;
  isExportProduct: boolean;
  isHidden: boolean;
  name: string;
  organizationId: number;
  state: PriceListStateEnum;
  url: string;
}
