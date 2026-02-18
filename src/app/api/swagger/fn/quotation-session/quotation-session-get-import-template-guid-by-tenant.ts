/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfGuid } from '../../models/api-market-json-result-of-guid';

export interface QuotationSessionGetImportTemplateGuidByTenant$Params {
}

export function quotationSessionGetImportTemplateGuidByTenant(http: HttpClient, rootUrl: string, params?: QuotationSessionGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuid>> {
  const rb = new RequestBuilder(rootUrl, quotationSessionGetImportTemplateGuidByTenant.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfGuid>;
    })
  );
}

quotationSessionGetImportTemplateGuidByTenant.PATH = '/bla-bla-vla/quotation-session/import-template-guid';
