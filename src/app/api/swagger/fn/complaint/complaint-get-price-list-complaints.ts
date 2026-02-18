/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiComplaintInfoDto } from '../../models/api-complaint-info-dto';

export interface ComplaintGetPriceListComplaints$Params {
  id: number;
}

export function complaintGetPriceListComplaints(http: HttpClient, rootUrl: string, params: ComplaintGetPriceListComplaints$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiComplaintInfoDto>>> {
  const rb = new RequestBuilder(rootUrl, complaintGetPriceListComplaints.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ApiComplaintInfoDto>>;
    })
  );
}

complaintGetPriceListComplaints.PATH = '/bla-bla-vla/complaint/price-list/{id}';
