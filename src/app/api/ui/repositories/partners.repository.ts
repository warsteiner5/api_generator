import { adaptPartnerOrganizationToUI } from '../adapters/toUI/partner-organization.adapter';
import { adaptPartnerRequestToUI } from '../adapters/toUI/partner-request.adapter';
import { adaptPartnerToUI } from '../adapters/toUI/partner.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Partner } from '../models/partner.interface';
import { PartnerOrganization } from '../models/partner-organization.interface';
import { PartnerRequest } from '../models/partner-request.interface';
import { PartnersAcceptParams, partnersAcceptParamsAdapter } from './params/partners-accept.params';
import { PartnersAddParams, partnersAddParamsAdapter } from './params/partners-add.params';
import { PartnersApiService } from '../../swagger/services/partners-api.service';
import { PartnersDeleteParams, partnersDeleteParamsAdapter } from './params/partners-delete.params';
import { PartnersGetActiveRequestsCountParams, partnersGetActiveRequestsCountParamsAdapter } from './params/partners-get-active-requests-count.params';
import { PartnersGetActiveRequestsParams, partnersGetActiveRequestsParamsAdapter } from './params/partners-get-active-requests.params';
import { PartnersGetOrganizationInfoByInnAndKppParams, partnersGetOrganizationInfoByInnAndKppParamsAdapter } from './params/partners-get-organization-info-by-inn-and-kpp.params';
import { PartnersRefuseParams, partnersRefuseParamsAdapter } from './params/partners-refuse.params';
import { PartnersSearchParams, partnersSearchParamsAdapter } from './params/partners-search.params';
import { PartnersSendRequestParams, partnersSendRequestParamsAdapter } from './params/partners-send-request.params';

@Injectable({ providedIn: 'root' })
export class PartnersRepository {
  private readonly _api = inject(PartnersApiService);

  partnersAccept(params: PartnersAcceptParams): Observable<void> {
    return this._api.partnersAccept(partnersAcceptParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersAdd(params: PartnersAddParams): Observable<void> {
    return this._api.partnersAdd(partnersAddParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersDelete(params: PartnersDeleteParams): Observable<void> {
    return this._api.partnersDelete(partnersDeleteParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersGetActiveRequests(params?: PartnersGetActiveRequestsParams): Observable<PartnerRequest[]> {
    return this._api.partnersGetActiveRequests(partnersGetActiveRequestsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptPartnerRequestToUI(item)))
    );
  }

  partnersGetActiveRequestsCount(params?: PartnersGetActiveRequestsCountParams): Observable<number> {
    return this._api.partnersGetActiveRequestsCount(partnersGetActiveRequestsCountParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  partnersGetOrganizationInfoByInnAndKpp(params: PartnersGetOrganizationInfoByInnAndKppParams): Observable<PartnerOrganization> {
    return this._api.partnersGetOrganizationInfoByInnAndKpp(partnersGetOrganizationInfoByInnAndKppParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPartnerOrganizationToUI(res?.data))
    );
  }

  partnersRefuse(params: PartnersRefuseParams): Observable<void> {
    return this._api.partnersRefuse(partnersRefuseParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  partnersSearch(params?: PartnersSearchParams): Observable<Partner[]> {
    return this._api.partnersSearch(partnersSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptPartnerToUI(item)))
    );
  }

  partnersSendRequest(params: PartnersSendRequestParams): Observable<void> {
    return this._api.partnersSendRequest(partnersSendRequestParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
