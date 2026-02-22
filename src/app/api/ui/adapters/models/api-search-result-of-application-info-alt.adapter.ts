import { ApiApiSearchResultOfApplicationInfoAltDto } from '../../../swagger/models/api-api-search-result-of-application-info';
import { ApiSearchResultOfApplicationInfoAlt } from '../../models/api-search-result-of-application-info-alt.interface';
import { applicationInfoAltAdapter } from './application-info-alt.adapter';

export const apiSearchResultOfApplicationInfoAltAdapter = (source?: ApiApiSearchResultOfApplicationInfoAltDto | null): ApiSearchResultOfApplicationInfoAlt => {
  return {
    currpage: source?.currpage,
    invdata: source?.invdata?.map((item) => applicationInfoAltAdapter(item)),
    showTotal: source?.showTotal,
    totalpages: source?.totalpages,
    totalrecords: source?.totalrecords,
  };
}
