/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrganizationSettingSetOfferModerationForOrganisation$Params {
  organizationId: number;
  isEnabled: boolean;
}

export function organizationSettingSetOfferModerationForOrganisation(http: HttpClient, rootUrl: string, params: OrganizationSettingSetOfferModerationForOrganisation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationSettingSetOfferModerationForOrganisation.PATH, 'post');
  if (params) {
    rb.query('organizationId', params.organizationId, {});
    rb.query('isEnabled', params.isEnabled, {});
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

organizationSettingSetOfferModerationForOrganisation.PATH = '/bla-bla-vla/organization-settings/set-offer-moderation';
