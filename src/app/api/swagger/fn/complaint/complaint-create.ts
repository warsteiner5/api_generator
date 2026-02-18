/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiComplaintDto } from '../../models/api-complaint-dto';
import { ApiParticipantOfferComplaintCreateRequestAltDto } from '../../models/api-participant-offer-complaint-create-request';

export interface ComplaintCreate$Params {
      body?: ApiParticipantOfferComplaintCreateRequestAltDto | null
}

export function complaintCreate(http: HttpClient, rootUrl: string, params?: ComplaintCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiComplaintDto>> {
  const rb = new RequestBuilder(rootUrl, complaintCreate.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiComplaintDto>;
    })
  );
}

complaintCreate.PATH = '/bla-bla-vla/complaint/create';
