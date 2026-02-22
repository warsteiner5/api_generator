import { ApiEditDealWorkGroupsModelAltDto } from '../../../swagger/models/api-edit-deal-work-groups-model';
import { EditDealWorkGroupsModelAlt } from '../../models/edit-deal-work-groups-model-alt.interface';

export const editDealWorkGroupsModelAltAdapter = (source?: ApiEditDealWorkGroupsModelAltDto | null): EditDealWorkGroupsModelAlt => {
  return {
    dealId: source?.DealId,
    tradeId: source?.TradeId,
    workGroupIds: source?.WorkGroupIds,
  };
}
