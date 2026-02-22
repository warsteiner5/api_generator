import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';
import { publishApplicationResultAltAdapter } from '../adapters/models/publish-application-result-alt.adapter';
import { QuotationSessionAlt } from '../models/quotation-session-alt.interface';
import { quotationSessionAltAdapter } from '../adapters/models/quotation-session-alt.adapter';
import { QuotationSessionImportDetailsResponseAlt } from '../models/quotation-session-import-details-response-alt.interface';
import { quotationSessionImportDetailsResponseAltAdapter } from '../adapters/models/quotation-session-import-details-response-alt.adapter';
import { QuotationSessionItem } from '../models/quotation-session-item.interface';
import { quotationSessionItemAdapter } from '../adapters/models/quotation-session-item.adapter';
import { QuotationSessionNewApiService } from '../../swagger/services/quotation-session-new-api.service';
import { QuotationSessionNewCancelParams, quotationSessionNewCancelAdapter } from './params/quotation-session-new-cancel.params';
import { QuotationSessionNewCreateParams, quotationSessionNewCreateAdapter } from './params/quotation-session-new-create.params';
import { QuotationSessionNewEditParams, quotationSessionNewEditAdapter } from './params/quotation-session-new-edit.params';
import { QuotationSessionNewGetImportTemplateGuidByTenantParams, quotationSessionNewGetImportTemplateGuidByTenantAdapter } from './params/quotation-session-new-get-import-template-guid-by-tenant.params';
import { QuotationSessionNewGetItemsParams, quotationSessionNewGetItemsAdapter } from './params/quotation-session-new-get-items.params';
import { QuotationSessionNewGetParams, quotationSessionNewGetAdapter } from './params/quotation-session-new-get.params';
import { QuotationSessionNewImportDetailsParams, quotationSessionNewImportDetailsAdapter } from './params/quotation-session-new-import-details.params';
import { QuotationSessionNewInitParams, quotationSessionNewInitAdapter } from './params/quotation-session-new-init.params';
import { QuotationSessionNewJoinParams, quotationSessionNewJoinAdapter } from './params/quotation-session-new-join.params';
import { QuotationSessionNewSaveAsDraftParams, quotationSessionNewSaveAsDraftAdapter } from './params/quotation-session-new-save-as-draft.params';
import { QuotationSessionView } from '../models/quotation-session-view.interface';
import { quotationSessionViewAdapter } from '../adapters/models/quotation-session-view.adapter';

@Injectable({ providedIn: 'root' })
export class QuotationSessionNewRepository {
  private readonly _api = inject(QuotationSessionNewApiService);

  quotationSessionNewCancel(params?: QuotationSessionNewCancelParams): Observable<void> {
    return this._api.quotationSessionNewCancel(quotationSessionNewCancelAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  quotationSessionNewCreate(params?: QuotationSessionNewCreateParams): Observable<string> {
    return this._api.quotationSessionNewCreate(quotationSessionNewCreateAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  quotationSessionNewEdit(params: QuotationSessionNewEditParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionNewEdit(quotationSessionNewEditAdapter(params)).pipe(
      map((res) => quotationSessionAltAdapter(res?.data))
    );
  }

  quotationSessionNewGet(params: QuotationSessionNewGetParams): Observable<QuotationSessionView> {
    return this._api.quotationSessionNewGet(quotationSessionNewGetAdapter(params)).pipe(
      map((res) => quotationSessionViewAdapter(res?.data))
    );
  }

  quotationSessionNewGetImportTemplateGuidByTenant(params?: QuotationSessionNewGetImportTemplateGuidByTenantParams): Observable<string> {
    return this._api.quotationSessionNewGetImportTemplateGuidByTenant(quotationSessionNewGetImportTemplateGuidByTenantAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  quotationSessionNewGetItems(params: QuotationSessionNewGetItemsParams): Observable<QuotationSessionItem[]> {
    return this._api.quotationSessionNewGetItems(quotationSessionNewGetItemsAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => quotationSessionItemAdapter(item)))
    );
  }

  quotationSessionNewImportDetails(params?: QuotationSessionNewImportDetailsParams): Observable<QuotationSessionImportDetailsResponseAlt> {
    return this._api.quotationSessionNewImportDetails(quotationSessionNewImportDetailsAdapter(params)).pipe(
      map((res) => quotationSessionImportDetailsResponseAltAdapter(res?.data))
    );
  }

  quotationSessionNewInit(params?: QuotationSessionNewInitParams): Observable<QuotationSessionAlt> {
    return this._api.quotationSessionNewInit(quotationSessionNewInitAdapter(params)).pipe(
      map((res) => quotationSessionAltAdapter(res?.data))
    );
  }

  quotationSessionNewJoin(params?: QuotationSessionNewJoinParams): Observable<PublishApplicationResultAlt> {
    return this._api.quotationSessionNewJoin(quotationSessionNewJoinAdapter(params)).pipe(
      map((res) => publishApplicationResultAltAdapter(res?.data))
    );
  }

  quotationSessionNewSaveAsDraft(params?: QuotationSessionNewSaveAsDraftParams): Observable<string> {
    return this._api.quotationSessionNewSaveAsDraft(quotationSessionNewSaveAsDraftAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
