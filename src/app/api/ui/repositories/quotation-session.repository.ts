import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfQuotationSessionItemAdapter } from '../adapters/models/market-pagination-result-of-list-of-quotation-session-item.adapter';
import { Observable } from 'rxjs';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';
import { publishApplicationResultAltAdapter } from '../adapters/models/publish-application-result-alt.adapter';
import { QuotationSessionAlt } from '../models/quotation-session-alt.interface';
import { quotationSessionAltAdapter } from '../adapters/models/quotation-session-alt.adapter';
import { QuotationSessionApiService } from '../../swagger/services/quotation-session-api.service';
import { QuotationSessionApplicationDetails } from '../models/quotation-session-application-details.interface';
import { quotationSessionApplicationDetailsAdapter } from '../adapters/models/quotation-session-application-details.adapter';
import { QuotationSessionApplicationShort } from '../models/quotation-session-application-short.interface';
import { quotationSessionApplicationShortAdapter } from '../adapters/models/quotation-session-application-short.adapter';
import { QuotationSessionCancelParams, quotationSessionCancelAdapter } from './params/quotation-session-cancel.params';
import { QuotationSessionCopyParams, quotationSessionCopyAdapter } from './params/quotation-session-copy.params';
import { QuotationSessionCreateParams, quotationSessionCreateAdapter } from './params/quotation-session-create.params';
import { QuotationSessionEditParams, quotationSessionEditAdapter } from './params/quotation-session-edit.params';
import { QuotationSessionGetApplicationDetailsParams, quotationSessionGetApplicationDetailsAdapter } from './params/quotation-session-get-application-details.params';
import { QuotationSessionGetApplicationsParams, quotationSessionGetApplicationsAdapter } from './params/quotation-session-get-applications.params';
import { QuotationSessionGetImportTemplateGuidByTenantParams, quotationSessionGetImportTemplateGuidByTenantAdapter } from './params/quotation-session-get-import-template-guid-by-tenant.params';
import { QuotationSessionGetItemsParams, quotationSessionGetItemsAdapter } from './params/quotation-session-get-items.params';
import { QuotationSessionGetParams, quotationSessionGetAdapter } from './params/quotation-session-get.params';
import { QuotationSessionImportDetailsParams, quotationSessionImportDetailsAdapter } from './params/quotation-session-import-details.params';
import { QuotationSessionImportDetailsResponseAlt } from '../models/quotation-session-import-details-response-alt.interface';
import { quotationSessionImportDetailsResponseAltAdapter } from '../adapters/models/quotation-session-import-details-response-alt.adapter';
import { QuotationSessionInitParams, quotationSessionInitAdapter } from './params/quotation-session-init.params';
import { QuotationSessionItem } from '../models/quotation-session-item.interface';
import { QuotationSessionJoinParams, quotationSessionJoinAdapter } from './params/quotation-session-join.params';
import { QuotationSessionSaveAsDraftParams, quotationSessionSaveAsDraftAdapter } from './params/quotation-session-save-as-draft.params';
import { QuotationSessionSpeedUpParams, quotationSessionSpeedUpAdapter } from './params/quotation-session-speed-up.params';
import { QuotationSessionView } from '../models/quotation-session-view.interface';
import { quotationSessionViewAdapter } from '../adapters/models/quotation-session-view.adapter';

@Injectable({ providedIn: 'root' })
export class QuotationSessionRepository {
  private readonly _api = inject(QuotationSessionApiService);

  quotationSessionCancel(params?: QuotationSessionCancelParams): Observable<void> {
    return this._api.quotationSessionCancel(quotationSessionCancelAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  quotationSessionCopy(params: QuotationSessionCopyParams): Observable<number> {
    return this._api.quotationSessionCopy(quotationSessionCopyAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  quotationSessionCreate(params?: QuotationSessionCreateParams): Observable<number> {
    return this._api.quotationSessionCreate(quotationSessionCreateAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  quotationSessionEdit(params: QuotationSessionEditParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionEdit(quotationSessionEditAdapter(params)).pipe(
      map((res) => quotationSessionAltAdapter(res?.data))
    );
  }

  quotationSessionGet(params: QuotationSessionGetParams): Observable<QuotationSessionView> {
    return this._api.quotationSessionGet(quotationSessionGetAdapter(params)).pipe(
      map((res) => quotationSessionViewAdapter(res?.data))
    );
  }

  quotationSessionGetApplicationDetails(params: QuotationSessionGetApplicationDetailsParams): Observable<QuotationSessionApplicationDetails> {
    return this._api.quotationSessionGetApplicationDetails(quotationSessionGetApplicationDetailsAdapter(params)).pipe(
      map((res) => quotationSessionApplicationDetailsAdapter(res?.data))
    );
  }

  quotationSessionGetApplications(params: QuotationSessionGetApplicationsParams): Observable<QuotationSessionApplicationShort[]> {
    return this._api.quotationSessionGetApplications(quotationSessionGetApplicationsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => quotationSessionApplicationShortAdapter(item)))
    );
  }

  quotationSessionGetImportTemplateGuidByTenant(params?: QuotationSessionGetImportTemplateGuidByTenantParams): Observable<string> {
    return this._api.quotationSessionGetImportTemplateGuidByTenant(quotationSessionGetImportTemplateGuidByTenantAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  quotationSessionGetItems(params: QuotationSessionGetItemsParams): Observable<MarketPaginationResult<QuotationSessionItem[]>> {
    return this._api.quotationSessionGetItems(quotationSessionGetItemsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfQuotationSessionItemAdapter(res?.data))
    );
  }

  quotationSessionImportDetails(params?: QuotationSessionImportDetailsParams): Observable<QuotationSessionImportDetailsResponseAlt> {
    return this._api.quotationSessionImportDetails(quotationSessionImportDetailsAdapter(params)).pipe(
      map((res) => quotationSessionImportDetailsResponseAltAdapter(res?.data))
    );
  }

  quotationSessionInit(params?: QuotationSessionInitParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionInit(quotationSessionInitAdapter(params)).pipe(
      map((res) => quotationSessionAltAdapter(res?.data))
    );
  }

  quotationSessionJoin(params?: QuotationSessionJoinParams): Observable<PublishApplicationResultAlt> {
    return this._api.quotationSessionJoin(quotationSessionJoinAdapter(params)).pipe(
      map((res) => publishApplicationResultAltAdapter(res?.data))
    );
  }

  quotationSessionSaveAsDraft(params?: QuotationSessionSaveAsDraftParams): Observable<number> {
    return this._api.quotationSessionSaveAsDraft(quotationSessionSaveAsDraftAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  quotationSessionSpeedUp(params: QuotationSessionSpeedUpParams): Observable<void> {
    return this._api.quotationSessionSpeedUp(quotationSessionSpeedUpAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
