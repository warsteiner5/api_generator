import { adaptPublishApplicationResultAltToUI } from '../adapters/toUI/publish-application-result-alt.adapter';
import { adaptQuotationSessionAltToUI } from '../adapters/toUI/quotation-session-alt.adapter';
import { adaptQuotationSessionImportDetailsResponseAltToUI } from '../adapters/toUI/quotation-session-import-details-response-alt.adapter';
import { adaptQuotationSessionItemToUI } from '../adapters/toUI/quotation-session-item.adapter';
import { adaptQuotationSessionViewToUI } from '../adapters/toUI/quotation-session-view.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';
import { QuotationSessionAlt } from '../models/quotation-session-alt.interface';
import { QuotationSessionImportDetailsResponseAlt } from '../models/quotation-session-import-details-response-alt.interface';
import { QuotationSessionItem } from '../models/quotation-session-item.interface';
import { QuotationSessionNewApiService } from '../../swagger/services/quotation-session-new-api.service';
import { QuotationSessionNewCancelParams, quotationSessionNewCancelParamsAdapter } from './params/quotation-session-new-cancel.params';
import { QuotationSessionNewCreateParams, quotationSessionNewCreateParamsAdapter } from './params/quotation-session-new-create.params';
import { QuotationSessionNewEditParams, quotationSessionNewEditParamsAdapter } from './params/quotation-session-new-edit.params';
import { QuotationSessionNewGetImportTemplateGuidByTenantParams, quotationSessionNewGetImportTemplateGuidByTenantParamsAdapter } from './params/quotation-session-new-get-import-template-guid-by-tenant.params';
import { QuotationSessionNewGetItemsParams, quotationSessionNewGetItemsParamsAdapter } from './params/quotation-session-new-get-items.params';
import { QuotationSessionNewGetParams, quotationSessionNewGetParamsAdapter } from './params/quotation-session-new-get.params';
import { QuotationSessionNewImportDetailsParams, quotationSessionNewImportDetailsParamsAdapter } from './params/quotation-session-new-import-details.params';
import { QuotationSessionNewInitParams, quotationSessionNewInitParamsAdapter } from './params/quotation-session-new-init.params';
import { QuotationSessionNewJoinParams, quotationSessionNewJoinParamsAdapter } from './params/quotation-session-new-join.params';
import { QuotationSessionNewSaveAsDraftParams, quotationSessionNewSaveAsDraftParamsAdapter } from './params/quotation-session-new-save-as-draft.params';
import { QuotationSessionView } from '../models/quotation-session-view.interface';

@Injectable({ providedIn: 'root' })
export class QuotationSessionNewRepository {
  private readonly _api = inject(QuotationSessionNewApiService);

  quotationSessionNewCancel(params?: QuotationSessionNewCancelParams): Observable<void> {
    return this._api.quotationSessionNewCancel(quotationSessionNewCancelParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  quotationSessionNewCreate(params?: QuotationSessionNewCreateParams): Observable<string> {
    return this._api.quotationSessionNewCreate(quotationSessionNewCreateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  quotationSessionNewEdit(params: QuotationSessionNewEditParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionNewEdit(quotationSessionNewEditParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionAltToUI(res?.data))
    );
  }

  quotationSessionNewGet(params: QuotationSessionNewGetParams): Observable<QuotationSessionView> {
    return this._api.quotationSessionNewGet(quotationSessionNewGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionViewToUI(res?.data))
    );
  }

  quotationSessionNewGetImportTemplateGuidByTenant(params?: QuotationSessionNewGetImportTemplateGuidByTenantParams): Observable<string> {
    return this._api.quotationSessionNewGetImportTemplateGuidByTenant(quotationSessionNewGetImportTemplateGuidByTenantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  quotationSessionNewGetItems(params: QuotationSessionNewGetItemsParams): Observable<QuotationSessionItem[]> {
    return this._api.quotationSessionNewGetItems(quotationSessionNewGetItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptQuotationSessionItemToUI(item)))
    );
  }

  quotationSessionNewImportDetails(params?: QuotationSessionNewImportDetailsParams): Observable<QuotationSessionImportDetailsResponseAlt> {
    return this._api.quotationSessionNewImportDetails(quotationSessionNewImportDetailsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionImportDetailsResponseAltToUI(res?.data))
    );
  }

  quotationSessionNewInit(params?: QuotationSessionNewInitParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionNewInit(quotationSessionNewInitParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionAltToUI(res?.data))
    );
  }

  quotationSessionNewJoin(params?: QuotationSessionNewJoinParams): Observable<PublishApplicationResultAlt> {
    return this._api.quotationSessionNewJoin(quotationSessionNewJoinParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPublishApplicationResultAltToUI(res?.data))
    );
  }

  quotationSessionNewSaveAsDraft(params?: QuotationSessionNewSaveAsDraftParams): Observable<string> {
    return this._api.quotationSessionNewSaveAsDraft(quotationSessionNewSaveAsDraftParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
