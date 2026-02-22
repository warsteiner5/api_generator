import { EditDealWorkGroupsModelAlt } from '../../models/edit-deal-work-groups-model-alt.interface';
import { ApiEditDealWorkGroupsModelAltDto } from '../../../swagger/models/api-edit-deal-work-groups-model';

export const apiEditDealWorkGroupsModelAltDtoAdapter = (source?: EditDealWorkGroupsModelAlt | null): ApiEditDealWorkGroupsModelAltDto => {
  return {
    DealId: source?.dealId,
    TradeId: source?.tradeId,
    WorkGroupIds: source?.workGroupIds,
  };
}
