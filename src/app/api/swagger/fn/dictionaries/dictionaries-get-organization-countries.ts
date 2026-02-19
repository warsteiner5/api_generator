/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfOrganizationCountryDtoOf } from '../../models/api-market-json-result-of-organization-country-dto-of';

export interface DictionariesGetOrganizationCountries$Params {
}

export function dictionariesGetOrganizationCountries(http: HttpClient, rootUrl: string, params?: DictionariesGetOrganizationCountries$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationCountryDtoOf>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetOrganizationCountries.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfOrganizationCountryDtoOf>;
    })
  );
}

dictionariesGetOrganizationCountries.PATH = '/market/api/v1/dictionaries/countries';
