import { ApiSearchResultOfDealInfoAlt } from '../../models/api-search-result-of-deal-info-alt.interface';
import { ApiApiSearchResultOfDealInfoAltDto } from '../../../swagger/models/api-api-search-result-of-deal-info';
import { adaptApiDealInfoAltDto } from './api-deal-info.adapter';

export function adaptApiApiSearchResultOfDealInfoAltDto(source?: ApiSearchResultOfDealInfoAlt | null): ApiApiSearchResultOfDealInfoAltDto {
  return {
    currpage: source?.currpage,
    invdata: (source?.invdata ?? []).map((item) => adaptApiDealInfoAltDto(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}
