import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfPartnerAdapter } from '../adapters/models/market-pagination-result-of-list-of-partner.adapter';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner.interface';
import { PartnerOrganization } from '../models/partner-organization.interface';
import { partnerOrganizationAdapter } from '../adapters/models/partner-organization.adapter';
import { PartnerRequest } from '../models/partner-request.interface';
import { partnerRequestAdapter } from '../adapters/models/partner-request.adapter';
import { PartnersAcceptParams, partnersAcceptAdapter } from './params/partners-accept.params';
import { PartnersAddParams, partnersAddAdapter } from './params/partners-add.params';
import { PartnersApiService } from '../../swagger/services/partners-api.service';
import { PartnersDeleteParams, partnersDeleteAdapter } from './params/partners-delete.params';
import { PartnersGetActiveRequestsCountParams, partnersGetActiveRequestsCountAdapter } from './params/partners-get-active-requests-count.params';
import { PartnersGetActiveRequestsParams, partnersGetActiveRequestsAdapter } from './params/partners-get-active-requests.params';
import { PartnersGetOrganizationInfoByInnAndKppParams, partnersGetOrganizationInfoByInnAndKppAdapter } from './params/partners-get-organization-info-by-inn-and-kpp.params';
import { PartnersRefuseParams, partnersRefuseAdapter } from './params/partners-refuse.params';
import { PartnersSearchParams, partnersSearchAdapter } from './params/partners-search.params';
import { PartnersSendRequestParams, partnersSendRequestAdapter } from './params/partners-send-request.params';

@Injectable({ providedIn: 'root' })
export class PartnersRepository {
  private readonly _api = inject(PartnersApiService);

  partnersAccept(params: PartnersAcceptParams): Observable<void> {
    return this._api.partnersAccept(partnersAcceptAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersAdd(params: PartnersAddParams): Observable<void> {
    return this._api.partnersAdd(partnersAddAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersDelete(params: PartnersDeleteParams): Observable<void> {
    return this._api.partnersDelete(partnersDeleteAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersGetActiveRequests(params?: PartnersGetActiveRequestsParams): Observable<PartnerRequest[]> {
    return this._api.partnersGetActiveRequests(partnersGetActiveRequestsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => partnerRequestAdapter(item)))
    );
  }

  partnersGetActiveRequestsCount(params?: PartnersGetActiveRequestsCountParams): Observable<number> {
    return this._api.partnersGetActiveRequestsCount(partnersGetActiveRequestsCountAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  partnersGetOrganizationInfoByInnAndKpp(params: PartnersGetOrganizationInfoByInnAndKppParams): Observable<PartnerOrganization> {
    return this._api.partnersGetOrganizationInfoByInnAndKpp(partnersGetOrganizationInfoByInnAndKppAdapter(params)).pipe(
      map((res) => partnerOrganizationAdapter(res?.data))
    );
  }

  partnersRefuse(params: PartnersRefuseParams): Observable<void> {
    return this._api.partnersRefuse(partnersRefuseAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersSearch(params?: PartnersSearchParams): Observable<MarketPaginationResult<Partner[]>> {
    return this._api.partnersSearch(partnersSearchAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfPartnerAdapter(res?.data))
    );
  }

  partnersSendRequest(params: PartnersSendRequestParams): Observable<void> {
    return this._api.partnersSendRequest(partnersSendRequestAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
