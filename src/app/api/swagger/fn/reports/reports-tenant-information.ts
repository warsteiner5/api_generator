/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfTenantInformationReportResultDto } from '../../models/api-market-json-result-of-list-of-tenant-information-report-result-dto';

export interface ReportsTenantInformation$Params {
}

export function reportsTenantInformation(http: HttpClient, rootUrl: string, params?: ReportsTenantInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfTenantInformationReportResultDto>> {
  const rb = new RequestBuilder(rootUrl, reportsTenantInformation.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfTenantInformationReportResultDto>;
    })
  );
}

reportsTenantInformation.PATH = '/market/api/v1/reports/statistic/deals';
