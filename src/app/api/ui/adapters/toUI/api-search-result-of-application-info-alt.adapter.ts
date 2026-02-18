import { ApiApiSearchResultOfApplicationInfoAltDto } from '../../../swagger/models/api-api-search-result-of-application-info';
import { ApiSearchResultOfApplicationInfoAlt } from '../../models/api-search-result-of-application-info-alt.interface';
import { adaptApplicationInfoAltToUI } from './application-info-alt.adapter';

export function adaptApiSearchResultOfApplicationInfoAltToUI(source?: ApiApiSearchResultOfApplicationInfoAltDto | null): ApiSearchResultOfApplicationInfoAlt {
  return {
    currpage: source?.currpage ?? 0,
    invdata: (source?.invdata ?? []).map((item) => adaptApplicationInfoAltToUI(item)),
    showTotal: source?.showTotal ?? false,
    totalpages: source?.totalpages ?? 0,
    totalrecords: source?.totalrecords ?? 0,
  };
}
