import { ApiApiSearchResultOfDealInfoAltDto } from '../../../swagger/models/api-api-search-result-of-deal-info';
import { ApiSearchResultOfDealInfoAlt } from '../../models/api-search-result-of-deal-info-alt.interface';
import { adaptDealInfoAltToUI } from './deal-info-alt.adapter';

export function adaptApiSearchResultOfDealInfoAltToUI(source?: ApiApiSearchResultOfDealInfoAltDto | null): ApiSearchResultOfDealInfoAlt {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptDealInfoAltToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}
