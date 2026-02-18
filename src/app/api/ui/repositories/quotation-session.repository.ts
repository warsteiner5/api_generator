import { adaptPublishApplicationResultAltToUI } from '../adapters/toUI/publish-application-result-alt.adapter';
import { adaptQuotationSessionAltToUI } from '../adapters/toUI/quotation-session-alt.adapter';
import { adaptQuotationSessionApplicationDetailsToUI } from '../adapters/toUI/quotation-session-application-details.adapter';
import { adaptQuotationSessionApplicationShortToUI } from '../adapters/toUI/quotation-session-application-short.adapter';
import { adaptQuotationSessionImportDetailsResponseAltToUI } from '../adapters/toUI/quotation-session-import-details-response-alt.adapter';
import { adaptQuotationSessionItemToUI } from '../adapters/toUI/quotation-session-item.adapter';
import { adaptQuotationSessionViewToUI } from '../adapters/toUI/quotation-session-view.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';
import { QuotationSessionAlt } from '../models/quotation-session-alt.interface';
import { QuotationSessionApiService } from '../../swagger/services/quotation-session-api.service';
import { QuotationSessionApplicationDetails } from '../models/quotation-session-application-details.interface';
import { QuotationSessionApplicationShort } from '../models/quotation-session-application-short.interface';
import { QuotationSessionCancelParams, quotationSessionCancelParamsAdapter } from './params/quotation-session-cancel.params';
import { QuotationSessionCopyParams, quotationSessionCopyParamsAdapter } from './params/quotation-session-copy.params';
import { QuotationSessionCreateParams, quotationSessionCreateParamsAdapter } from './params/quotation-session-create.params';
import { QuotationSessionEditParams, quotationSessionEditParamsAdapter } from './params/quotation-session-edit.params';
import { QuotationSessionGetApplicationDetailsParams, quotationSessionGetApplicationDetailsParamsAdapter } from './params/quotation-session-get-application-details.params';
import { QuotationSessionGetApplicationsParams, quotationSessionGetApplicationsParamsAdapter } from './params/quotation-session-get-applications.params';
import { QuotationSessionGetImportTemplateGuidByTenantParams, quotationSessionGetImportTemplateGuidByTenantParamsAdapter } from './params/quotation-session-get-import-template-guid-by-tenant.params';
import { QuotationSessionGetItemsParams, quotationSessionGetItemsParamsAdapter } from './params/quotation-session-get-items.params';
import { QuotationSessionGetParams, quotationSessionGetParamsAdapter } from './params/quotation-session-get.params';
import { QuotationSessionImportDetailsParams, quotationSessionImportDetailsParamsAdapter } from './params/quotation-session-import-details.params';
import { QuotationSessionImportDetailsResponseAlt } from '../models/quotation-session-import-details-response-alt.interface';
import { QuotationSessionInitParams, quotationSessionInitParamsAdapter } from './params/quotation-session-init.params';
import { QuotationSessionItem } from '../models/quotation-session-item.interface';
import { QuotationSessionJoinParams, quotationSessionJoinParamsAdapter } from './params/quotation-session-join.params';
import { QuotationSessionSaveAsDraftParams, quotationSessionSaveAsDraftParamsAdapter } from './params/quotation-session-save-as-draft.params';
import { QuotationSessionSpeedUpParams, quotationSessionSpeedUpParamsAdapter } from './params/quotation-session-speed-up.params';
import { QuotationSessionView } from '../models/quotation-session-view.interface';

@Injectable({ providedIn: 'root' })
export class QuotationSessionRepository {
  private readonly _api = inject(QuotationSessionApiService);

  quotationSessionCancel(params?: QuotationSessionCancelParams): Observable<void> {
    return this._api.quotationSessionCancel(quotationSessionCancelParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  quotationSessionCopy(params: QuotationSessionCopyParams): Observable<number> {
    return this._api.quotationSessionCopy(quotationSessionCopyParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  quotationSessionCreate(params?: QuotationSessionCreateParams): Observable<number> {
    return this._api.quotationSessionCreate(quotationSessionCreateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  quotationSessionEdit(params: QuotationSessionEditParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionEdit(quotationSessionEditParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionAltToUI(res?.data))
    );
  }

  quotationSessionGet(params: QuotationSessionGetParams): Observable<QuotationSessionView> {
    return this._api.quotationSessionGet(quotationSessionGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionViewToUI(res?.data))
    );
  }

  quotationSessionGetApplicationDetails(params: QuotationSessionGetApplicationDetailsParams): Observable<QuotationSessionApplicationDetails> {
    return this._api.quotationSessionGetApplicationDetails(quotationSessionGetApplicationDetailsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionApplicationDetailsToUI(res?.data))
    );
  }

  quotationSessionGetApplications(params: QuotationSessionGetApplicationsParams): Observable<QuotationSessionApplicationShort[]> {
    return this._api.quotationSessionGetApplications(quotationSessionGetApplicationsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptQuotationSessionApplicationShortToUI(item)))
    );
  }

  quotationSessionGetImportTemplateGuidByTenant(params?: QuotationSessionGetImportTemplateGuidByTenantParams): Observable<string> {
    return this._api.quotationSessionGetImportTemplateGuidByTenant(quotationSessionGetImportTemplateGuidByTenantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  quotationSessionGetItems(params: QuotationSessionGetItemsParams): Observable<QuotationSessionItem[]> {
    return this._api.quotationSessionGetItems(quotationSessionGetItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptQuotationSessionItemToUI(item)))
    );
  }

  quotationSessionImportDetails(params?: QuotationSessionImportDetailsParams): Observable<QuotationSessionImportDetailsResponseAlt> {
    return this._api.quotationSessionImportDetails(quotationSessionImportDetailsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionImportDetailsResponseAltToUI(res?.data))
    );
  }

  quotationSessionInit(params?: QuotationSessionInitParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionInit(quotationSessionInitParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionAltToUI(res?.data))
    );
  }

  quotationSessionJoin(params?: QuotationSessionJoinParams): Observable<PublishApplicationResultAlt> {
    return this._api.quotationSessionJoin(quotationSessionJoinParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPublishApplicationResultAltToUI(res?.data))
    );
  }

  quotationSessionSaveAsDraft(params?: QuotationSessionSaveAsDraftParams): Observable<number> {
    return this._api.quotationSessionSaveAsDraft(quotationSessionSaveAsDraftParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  quotationSessionSpeedUp(params: QuotationSessionSpeedUpParams): Observable<void> {
    return this._api.quotationSessionSpeedUp(quotationSessionSpeedUpParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
