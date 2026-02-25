import { ApplicationFilterObjectAlt } from '../../models/application-filter-object-alt.interface';
import { ApiApplicationFilterObjectAltDto } from '../../../swagger/models/api-application-filter-object';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiFilterApplicationStateAltEnumAdapter } from '../enums/api-filter-application-state.adapter';
import { apiSortingParamAltDtoAdapter } from './api-sorting-param.adapter';

export const apiApplicationFilterObjectAltDtoAdapter = (source?: ApplicationFilterObjectAlt | null): ApiApplicationFilterObjectAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    IncomingNumber: source?.incomingNumber,
    TradeNumber: source?.tradeNumber,
    TradeName: source?.tradeName,
    PublishDateFrom: source?.publishDateFrom,
    PublishDateTo: source?.publishDateTo,
    RevokeDateFrom: source?.revokeDateFrom,
    RevokeDateTo: source?.revokeDateTo,
    State: source?.state === null ? undefined : apiFilterApplicationStateAltEnumAdapter(source?.state),
    SortingParams: source?.sortingParams?.map((item) => apiSortingParamAltDtoAdapter(item)),
  };
}
