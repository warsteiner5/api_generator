import { PartnersFilterAlt } from '../../models/partners-filter-alt.interface';
import { PartnersSearch$Params } from '../../../swagger/fn/partners/partners-search';
import { adaptApiPartnersFilterAltDto } from '../../adapters/toDto/api-partners-filter.adapter';

export interface PartnersSearchParams {
  body?: PartnersFilterAlt;
}

export const partnersSearchParamsAdapter = {
  adapt(params?: PartnersSearchParams): PartnersSearch$Params {
    if (!params) {
      return {} as PartnersSearch$Params;
    }
    return {
      body: adaptApiPartnersFilterAltDto(params.body),
    };
  }
};
