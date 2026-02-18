/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfListOfCategoryTenantReportResultDto } from '../../models/api-market-json-result-of-list-of-category-tenant-report-result-dto';

export interface ReportsCategoryTenant$Params {
}

export function reportsCategoryTenant(http: HttpClient, rootUrl: string, params?: ReportsCategoryTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryTenantReportResultDto>> {
  const rb = new RequestBuilder(rootUrl, reportsCategoryTenant.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryTenantReportResultDto>;
    })
  );
}

reportsCategoryTenant.PATH = '/bla-bla-vla/reports/statistic/priceLists';
