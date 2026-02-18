import { adaptApiSearchResultOfApplicationInfoAltToUI } from '../adapters/toUI/api-search-result-of-application-info-alt.adapter';
import { adaptApplicationToUI } from '../adapters/toUI/application.adapter';
import { ApiSearchResultOfApplicationInfoAlt } from '../models/api-search-result-of-application-info-alt.interface';
import { Application } from '../models/application.interface';
import { ApplicationApiService } from '../../swagger/services/application-api.service';
import { ApplicationGetApplicationInfoParams, applicationGetApplicationInfoParamsAdapter } from './params/application-get-application-info.params';
import { ApplicationGetApplicationsByTradeIdParams, applicationGetApplicationsByTradeIdParamsAdapter } from './params/application-get-applications-by-trade-id.params';
import { ApplicationGetCreateApplicationInfoParams, applicationGetCreateApplicationInfoParamsAdapter } from './params/application-get-create-application-info.params';
import { ApplicationGetOrganizationAccountsParams, applicationGetOrganizationAccountsParamsAdapter } from './params/application-get-organization-accounts.params';
import { ApplicationParticipantApplicationsParams, applicationParticipantApplicationsParamsAdapter } from './params/application-participant-applications.params';
import { ApplicationPublishParams, applicationPublishParamsAdapter } from './params/application-publish.params';
import { ApplicationRemoveDraftParams, applicationRemoveDraftParamsAdapter } from './params/application-remove-draft.params';
import { ApplicationRevokeParams, applicationRevokeParamsAdapter } from './params/application-revoke.params';
import { ApplicationSaveUpdateApplicationParams, applicationSaveUpdateApplicationParamsAdapter } from './params/application-save-update-application.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicationRepository {
  private readonly _api = inject(ApplicationApiService);

  applicationGetApplicationInfo(params: ApplicationGetApplicationInfoParams): Observable<Application> {
    return this._api.applicationGetApplicationInfo(applicationGetApplicationInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationToUI(res))
    );
  }

  applicationGetApplicationsByTradeId(params: ApplicationGetApplicationsByTradeIdParams): Observable<Application[]> {
    return this._api.applicationGetApplicationsByTradeId(applicationGetApplicationsByTradeIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptApplicationToUI(item)))
    );
  }

  applicationGetCreateApplicationInfo(params: ApplicationGetCreateApplicationInfoParams): Observable<Application> {
    return this._api.applicationGetCreateApplicationInfo(applicationGetCreateApplicationInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationToUI(res))
    );
  }

  applicationGetOrganizationAccounts(params?: ApplicationGetOrganizationAccountsParams): Observable<Blob> {
    return this._api.applicationGetOrganizationAccounts(applicationGetOrganizationAccountsParamsAdapter.adapt(params));
  }

  applicationParticipantApplications(params?: ApplicationParticipantApplicationsParams): Observable<ApiSearchResultOfApplicationInfoAlt> {
    return this._api.applicationParticipantApplications(applicationParticipantApplicationsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApiSearchResultOfApplicationInfoAltToUI(res))
    );
  }

  applicationPublish(params?: ApplicationPublishParams): Observable<number> {
    return this._api.applicationPublish(applicationPublishParamsAdapter.adapt(params));
  }

  applicationRemoveDraft(params: ApplicationRemoveDraftParams): Observable<boolean> {
    return this._api.applicationRemoveDraft(applicationRemoveDraftParamsAdapter.adapt(params));
  }

  applicationRevoke(params: ApplicationRevokeParams): Observable<boolean> {
    return this._api.applicationRevoke(applicationRevokeParamsAdapter.adapt(params));
  }

  applicationSaveUpdateApplication(params?: ApplicationSaveUpdateApplicationParams): Observable<number> {
    return this._api.applicationSaveUpdateApplication(applicationSaveUpdateApplicationParamsAdapter.adapt(params));
  }

}
