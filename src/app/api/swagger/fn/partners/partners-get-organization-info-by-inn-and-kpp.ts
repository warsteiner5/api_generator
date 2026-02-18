/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPartnerOrganizationDto } from '../../models/api-market-json-result-of-partner-organization-dto';

export interface PartnersGetOrganizationInfoByInnAndKpp$Params {
  inn: string | null;
  kpp?: string | null;
}

export function partnersGetOrganizationInfoByInnAndKpp(http: HttpClient, rootUrl: string, params: PartnersGetOrganizationInfoByInnAndKpp$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPartnerOrganizationDto>> {
  const rb = new RequestBuilder(rootUrl, partnersGetOrganizationInfoByInnAndKpp.PATH, 'get');
  if (params) {
    rb.query('inn', params.inn, {});
    rb.query('kpp', params.kpp, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPartnerOrganizationDto>;
    })
  );
}

partnersGetOrganizationInfoByInnAndKpp.PATH = '/bla-bla-vla/organization/partners/info';
