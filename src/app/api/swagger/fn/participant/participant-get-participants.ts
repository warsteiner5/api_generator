/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiOrganizationTypeEnum } from '../../models/api-organization-type-enum';

export interface ParticipantGetParticipants$Params {
  Id?: number;
  Name?: string | null;
  Inn?: string | null;
  Address?: string | null;
  Type?: ApiOrganizationTypeEnum | null;
  TradeId?: number;
  Regions?: Array<number> | null;
  ParticipantActualApplicationCountMax?: number | null;
  ParticipantActualApplicationCountMin?: number | null;
  ParticipantActualApplicationAndMeetRequirementsCountMax?: number | null;
  ParticipantActualApplicationAndMeetRequirementsCountMin?: number | null;
  ConcludedDealCountMax?: number | null;
  ConcludedDealCountMin?: number | null;
  ConcludedDealSummMax?: number | null;
  ConcludedDealSummMin?: number | null;
  Page?: number;
  ItemsPerPage?: number;
  SortField?: string | null;
  SortDirection?: string | null;
}

export function participantGetParticipants(http: HttpClient, rootUrl: string, params?: ParticipantGetParticipants$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, participantGetParticipants.PATH, 'get');
  if (params) {
    rb.query('Id', params.Id, {});
    rb.query('Name', params.Name, {});
    rb.query('Inn', params.Inn, {});
    rb.query('Address', params.Address, {});
    rb.query('Type', params.Type, {});
    rb.query('TradeId', params.TradeId, {});
    rb.query('Regions', params.Regions, {"style":"form","explode":true});
    rb.query('ParticipantActualApplicationCountMax', params.ParticipantActualApplicationCountMax, {});
    rb.query('ParticipantActualApplicationCountMin', params.ParticipantActualApplicationCountMin, {});
    rb.query('ParticipantActualApplicationAndMeetRequirementsCountMax', params.ParticipantActualApplicationAndMeetRequirementsCountMax, {});
    rb.query('ParticipantActualApplicationAndMeetRequirementsCountMin', params.ParticipantActualApplicationAndMeetRequirementsCountMin, {});
    rb.query('ConcludedDealCountMax', params.ConcludedDealCountMax, {});
    rb.query('ConcludedDealCountMin', params.ConcludedDealCountMin, {});
    rb.query('ConcludedDealSummMax', params.ConcludedDealSummMax, {});
    rb.query('ConcludedDealSummMin', params.ConcludedDealSummMin, {});
    rb.query('Page', params.Page, {});
    rb.query('ItemsPerPage', params.ItemsPerPage, {});
    rb.query('SortField', params.SortField, {});
    rb.query('SortDirection', params.SortDirection, {});
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

participantGetParticipants.PATH = '/bla-bla-vla/Participants';
