import { DealsEditWorkGroups$Params } from '../../../swagger/fn/deals/deals-edit-work-groups';
import { EditDealWorkGroupsModelAlt } from '../../models/edit-deal-work-groups-model-alt.interface';
import { apiEditDealWorkGroupsModelAltDtoAdapter } from '../../adapters/models/api-edit-deal-work-groups-model.adapter';

// @ts-ignore
export interface DealsEditWorkGroupsParams {
  body?: EditDealWorkGroupsModelAlt;
}

export function dealsEditWorkGroupsAdapter(params?: DealsEditWorkGroupsParams): DealsEditWorkGroups$Params {
  if (!params) {
    return {} as DealsEditWorkGroups$Params;
  }
  return {
      body: apiEditDealWorkGroupsModelAltDtoAdapter(params.body),
  };
}
