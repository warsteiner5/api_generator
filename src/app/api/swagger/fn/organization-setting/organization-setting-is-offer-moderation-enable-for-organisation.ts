/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface OrganizationSettingIsOfferModerationEnableForOrganisation$Params {
  organizationId: number;
}

export function organizationSettingIsOfferModerationEnableForOrganisation(http: HttpClient, rootUrl: string, params: OrganizationSettingIsOfferModerationEnableForOrganisation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, organizationSettingIsOfferModerationEnableForOrganisation.PATH, 'get');
  if (params) {
    rb.query('organizationId', params.organizationId, {});
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

organizationSettingIsOfferModerationEnableForOrganisation.PATH = '/market/api/v1/organization-settings/is-offer-moderation-enabled';
