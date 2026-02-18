/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto } from '../../models/api-market-json-result-of-check-for-available-generate-report-result-dto';
import { ApiReportTypeEnum } from '../../models/api-report-type-enum';

export interface ReportsCanGenerateNew$Params {
  reportType: ApiReportTypeEnum;
}

export function reportsCanGenerateNew(http: HttpClient, rootUrl: string, params: ReportsCanGenerateNew$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto>> {
  const rb = new RequestBuilder(rootUrl, reportsCanGenerateNew.PATH, 'get');
  if (params) {
    rb.path('reportType', params.reportType, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCheckForAvailableGenerateReportResultDto>;
    })
  );
}

reportsCanGenerateNew.PATH = '/bla-bla-vla/reports/canGenerateNew/{reportType}';
