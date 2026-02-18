/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface RequirementRequestsApproveRequirementRequestCharacteristic$Params {
  characteristicId: number;
}

export function requirementRequestsApproveRequirementRequestCharacteristic(http: HttpClient, rootUrl: string, params: RequirementRequestsApproveRequirementRequestCharacteristic$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, requirementRequestsApproveRequirementRequestCharacteristic.PATH, 'get');
  if (params) {
    rb.path('characteristicId', params.characteristicId, {});
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

requirementRequestsApproveRequirementRequestCharacteristic.PATH = '/bla-bla-vla/RequirementRequests/approve_requirement_request_characteristic/{characteristicId}';
