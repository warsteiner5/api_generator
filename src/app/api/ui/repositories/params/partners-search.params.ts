import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';
import { PartnersSearch$Params } from '../../../swagger/fn/partners/partners-search';
import { apiPartnersFilterAltDtoAdapter } from '../../adapters/models/api-partners-filter.adapter';

// @ts-ignore
export interface PartnersSearchParams {
  body?: PartnersFilterAlt;
}

export function partnersSearchAdapter(params?: PartnersSearchParams): PartnersSearch$Params {
  if (!params) {
    return {} as PartnersSearch$Params;
  }
  return {
      body: apiPartnersFilterAltDtoAdapter(params.body),
  };
}
