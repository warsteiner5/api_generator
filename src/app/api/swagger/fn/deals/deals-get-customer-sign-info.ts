/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiDealObjectEnum } from '../../models/api-deal-object-enum';
import { ApiMarketJsonResultOfCertificateViewModelDto } from '../../models/api-market-json-result-of-certificate-view-model-dto';

export interface DealsGetCustomerSignInfo$Params {
  DealId?: number;
  FileGuid?: string;
  DealObject?: ApiDealObjectEnum;
}

export function dealsGetCustomerSignInfo(http: HttpClient, rootUrl: string, params?: DealsGetCustomerSignInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>> {
  const rb = new RequestBuilder(rootUrl, dealsGetCustomerSignInfo.PATH, 'get');
  if (params) {
    rb.query('DealId', params.DealId, {});
    rb.query('FileGuid', params.FileGuid, {});
    rb.query('DealObject', params.DealObject, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>;
    })
  );
}

dealsGetCustomerSignInfo.PATH = '/bla-bla-vla/deals/customer_sign_info';
