import { adaptQuotationSessionFinalProposalAltToUI } from '../adapters/toUI/quotation-session-final-proposal-alt.adapter';
import { FinalProposalApiService } from '../../swagger/services/final-proposal-api.service';
import { FinalProposalGetFinalProposalParams, finalProposalGetFinalProposalParamsAdapter } from './params/final-proposal-get-final-proposal.params';
import { FinalProposalSaveFinalProposalParams, finalProposalSaveFinalProposalParamsAdapter } from './params/final-proposal-save-final-proposal.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuotationSessionFinalProposalAlt } from '../models/quotation-session-final-proposal-alt.interface';

@Injectable({ providedIn: 'root' })
export class FinalProposalRepository {
  private readonly _api = inject(FinalProposalApiService);

  finalProposalGetFinalProposal(params: FinalProposalGetFinalProposalParams): Observable<QuotationSessionFinalProposalAlt> {
    return this._api.finalProposalGetFinalProposal(finalProposalGetFinalProposalParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionFinalProposalAltToUI(res?.data))
    );
  }

  finalProposalSaveFinalProposal(params?: FinalProposalSaveFinalProposalParams): Observable<number> {
    return this._api.finalProposalSaveFinalProposal(finalProposalSaveFinalProposalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
