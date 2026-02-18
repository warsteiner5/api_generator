import { AccreditationApiService } from '../../swagger/services/accreditation-api.service';
import { AccreditationCreateAccreditationBlankGetParams, accreditationCreateAccreditationBlankGetParamsAdapter } from './params/accreditation-create-accreditation-blank-get.params';
import { AccreditationCreateAccreditationBlankPostParams, accreditationCreateAccreditationBlankPostParamsAdapter } from './params/accreditation-create-accreditation-blank-post.params';
import { AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentParams, accreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentParamsAdapter } from './params/accreditation-get-existing-authorization-payment-print-form-pdf-document.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccreditationRepository {
  private readonly _api = inject(AccreditationApiService);

  accreditationCreateAccreditationBlankGet(params: AccreditationCreateAccreditationBlankGetParams): Observable<string> {
    return this._api.accreditationCreateAccreditationBlankGet(accreditationCreateAccreditationBlankGetParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  accreditationCreateAccreditationBlankPost(params?: AccreditationCreateAccreditationBlankPostParams): Observable<string> {
    return this._api.accreditationCreateAccreditationBlankPost(accreditationCreateAccreditationBlankPostParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument(params?: AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentParams): Observable<string> {
    return this._api.accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument(accreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
