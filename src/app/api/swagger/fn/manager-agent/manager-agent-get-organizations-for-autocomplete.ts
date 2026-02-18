/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto } from '../../models/api-market-json-result-of-pagination-result-of-organization-for-autocomplete-dto';
import { ApiOrganizationForAutocompleteFilterAltDto } from '../../models/api-organization-for-autocomplete-filter';

export interface ManagerAgentGetOrganizationsForAutocomplete$Params {
      body?: ApiOrganizationForAutocompleteFilterAltDto | null
}

export function managerAgentGetOrganizationsForAutocomplete(http: HttpClient, rootUrl: string, params?: ManagerAgentGetOrganizationsForAutocomplete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>> {
  const rb = new RequestBuilder(rootUrl, managerAgentGetOrganizationsForAutocomplete.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>;
    })
  );
}

managerAgentGetOrganizationsForAutocomplete.PATH = '/bla-bla-vla/managerAgent/possible-organizations/autocomplete';
