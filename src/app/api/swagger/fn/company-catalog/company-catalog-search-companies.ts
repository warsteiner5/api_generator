/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto } from '../../models/api-market-json-result-of-market-pagination-result-of-list-of-company-catalog-organization-dto';
import { ApiSearchObjectAltDto } from '../../models/api-search-object';

export interface CompanyCatalogSearchCompanies$Params {
      body?: ApiSearchObjectAltDto | null
}

export function companyCatalogSearchCompanies(http: HttpClient, rootUrl: string, params?: CompanyCatalogSearchCompanies$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto>> {
  const rb = new RequestBuilder(rootUrl, companyCatalogSearchCompanies.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto>;
    })
  );
}

companyCatalogSearchCompanies.PATH = '/market/api/v1/companies/search';
