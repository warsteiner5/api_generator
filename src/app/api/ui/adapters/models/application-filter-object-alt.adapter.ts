import { ApiApplicationFilterObjectAltDto } from '../../../swagger/models/api-application-filter-object';
import { ApplicationFilterObjectAlt } from '../../models/application-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { filterApplicationStateAltEnumAdapter } from '../enums/filter-application-state-alt-enum.adapter';
import { sortingParamAltAdapter } from './sorting-param-alt.adapter';

export const applicationFilterObjectAltAdapter = (source?: ApiApplicationFilterObjectAltDto | null): ApplicationFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    incomingNumber: source?.IncomingNumber,
    tradeNumber: source?.TradeNumber,
    tradeName: source?.TradeName,
    publishDateFrom: source?.PublishDateFrom,
    publishDateTo: source?.PublishDateTo,
    revokeDateFrom: source?.RevokeDateFrom,
    revokeDateTo: source?.RevokeDateTo,
    state: source?.State === null ? undefined : filterApplicationStateAltEnumAdapter(source?.State),
    sortingParams: source?.SortingParams?.map((item) => sortingParamAltAdapter(item)),
  };
}
