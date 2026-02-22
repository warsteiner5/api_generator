import { AccreditationApiService } from '../../swagger/services/accreditation-api.service';
import { AccreditationCreateAccreditationBlankGetParams, accreditationCreateAccreditationBlankGetAdapter } from './params/accreditation-create-accreditation-blank-get.params';
import { AccreditationCreateAccreditationBlankPostParams, accreditationCreateAccreditationBlankPostAdapter } from './params/accreditation-create-accreditation-blank-post.params';
import { AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentParams, accreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentAdapter } from './params/accreditation-get-existing-authorization-payment-print-form-pdf-document.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccreditationRepository {
  private readonly _api = inject(AccreditationApiService);

  accreditationCreateAccreditationBlankGet(params: AccreditationCreateAccreditationBlankGetParams): Observable<string> {
    return this._api.accreditationCreateAccreditationBlankGet(accreditationCreateAccreditationBlankGetAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  accreditationCreateAccreditationBlankPost(params?: AccreditationCreateAccreditationBlankPostParams): Observable<string> {
    return this._api.accreditationCreateAccreditationBlankPost(accreditationCreateAccreditationBlankPostAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument(params?: AccreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentParams): Observable<string> {
    return this._api.accreditationGetExistingAuthorizationPaymentPrintFormPdfDocument(accreditationGetExistingAuthorizationPaymentPrintFormPdfDocumentAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

}
