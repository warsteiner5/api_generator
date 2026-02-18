/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface TariffGetLicenseReward$Params {
  tradeLotId: number;
  price: number;
  publicationDate: string | null;
}

export function tariffGetLicenseReward(http: HttpClient, rootUrl: string, params: TariffGetLicenseReward$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, tariffGetLicenseReward.PATH, 'get');
  if (params) {
    rb.path('tradeLotId', params.tradeLotId, {});
    rb.path('price', params.price, {});
    rb.path('publicationDate', params.publicationDate, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: 'application/octet-stream', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Blob>;
    })
  );
}

tariffGetLicenseReward.PATH = '/bla-bla-vla/Tariff/GetLicenseReward/{tradeLotId}/{price}/{publicationDate}';
