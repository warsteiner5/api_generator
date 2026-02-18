/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface CustomerGetCustomers$Params {
  Name?: string | null;
  Inn?: string | null;
  Address?: string | null;
  Regions?: Array<number> | null;
  OwnCustomersOnly?: boolean;
  AnnouncedTradesCountMin?: number | null;
  AnnouncedTradesCountMax?: number | null;
  TradesWithoutApplicationsCountMin?: number | null;
  TradesWithoutApplicationsCountMax?: number | null;
  ConcludedDealCountMin?: number | null;
  ConcludedDealCountMax?: number | null;
  ConcludedDealSummMin?: number | null;
  ConcludedDealSummMax?: number | null;
  ConcludedDealOutsideEShopCountMin?: number | null;
  ConcludedDealOutsideEShopCountMax?: number | null;
  ConcludedDealOutsideEShopSummMin?: number | null;
  ConcludedDealOutsideEShopSummMax?: number | null;
  Page?: number;
  ItemsPerPage?: number;
  SortField?: string | null;
  SortDirection?: string | null;
}

export function customerGetCustomers(http: HttpClient, rootUrl: string, params?: CustomerGetCustomers$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
  const rb = new RequestBuilder(rootUrl, customerGetCustomers.PATH, 'get');
  if (params) {
    rb.query('Name', params.Name, {});
    rb.query('Inn', params.Inn, {});
    rb.query('Address', params.Address, {});
    rb.query('Regions', params.Regions, {"style":"form","explode":true});
    rb.query('OwnCustomersOnly', params.OwnCustomersOnly, {});
    rb.query('AnnouncedTradesCountMin', params.AnnouncedTradesCountMin, {});
    rb.query('AnnouncedTradesCountMax', params.AnnouncedTradesCountMax, {});
    rb.query('TradesWithoutApplicationsCountMin', params.TradesWithoutApplicationsCountMin, {});
    rb.query('TradesWithoutApplicationsCountMax', params.TradesWithoutApplicationsCountMax, {});
    rb.query('ConcludedDealCountMin', params.ConcludedDealCountMin, {});
    rb.query('ConcludedDealCountMax', params.ConcludedDealCountMax, {});
    rb.query('ConcludedDealSummMin', params.ConcludedDealSummMin, {});
    rb.query('ConcludedDealSummMax', params.ConcludedDealSummMax, {});
    rb.query('ConcludedDealOutsideEShopCountMin', params.ConcludedDealOutsideEShopCountMin, {});
    rb.query('ConcludedDealOutsideEShopCountMax', params.ConcludedDealOutsideEShopCountMax, {});
    rb.query('ConcludedDealOutsideEShopSummMin', params.ConcludedDealOutsideEShopSummMin, {});
    rb.query('ConcludedDealOutsideEShopSummMax', params.ConcludedDealOutsideEShopSummMax, {});
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

customerGetCustomers.PATH = '/bla-bla-vla/Customers';
