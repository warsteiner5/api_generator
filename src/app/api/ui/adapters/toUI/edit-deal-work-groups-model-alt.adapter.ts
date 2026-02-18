import { ApiEditDealWorkGroupsModelAltDto } from '../../../swagger/models/api-edit-deal-work-groups-model';
import { EditDealWorkGroupsModelAlt } from '../../models/edit-deal-work-groups-model-alt.interface';

export function adaptEditDealWorkGroupsModelAltToUI(source?: ApiEditDealWorkGroupsModelAltDto | null): EditDealWorkGroupsModelAlt {
  return {
    dealId: source?.DealId ?? 0,
    tradeId: source?.TradeId ?? 0,
    workGroupIds: source?.WorkGroupIds ?? [],
  };
}
