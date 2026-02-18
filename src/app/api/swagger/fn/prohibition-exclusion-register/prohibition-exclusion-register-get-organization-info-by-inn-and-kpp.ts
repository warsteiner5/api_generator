/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrganizationNameDto } from '../../models/api-organization-name-dto';

export interface ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params {
  inn: string | null;
  kpp: string | null;
}

export function prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp(http: HttpClient, rootUrl: string, params: ProhibitionExclusionRegisterGetOrganizationInfoByInnAndKpp$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiOrganizationNameDto>> {
  const rb = new RequestBuilder(rootUrl, prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp.PATH, 'get');
  if (params) {
    rb.query('inn', params.inn, {});
    rb.query('kpp', params.kpp, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiOrganizationNameDto>;
    })
  );
}

prohibitionExclusionRegisterGetOrganizationInfoByInnAndKpp.PATH = '/bla-bla-vla/ProhibitionExclusionRegister/GetOrgInfoByInnKpp';
