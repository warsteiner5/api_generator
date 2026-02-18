import { adaptQuotationSessionFinalProposalAltToUI } from '../adapters/toUI/quotation-session-final-proposal-alt.adapter';
import { FinalProposalNewApiService } from '../../swagger/services/final-proposal-new-api.service';
import { FinalProposalNewGetFinalProposalParams, finalProposalNewGetFinalProposalParamsAdapter } from './params/final-proposal-new-get-final-proposal.params';
import { FinalProposalNewSaveFinalProposalParams, finalProposalNewSaveFinalProposalParamsAdapter } from './params/final-proposal-new-save-final-proposal.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuotationSessionFinalProposalAlt } from '../models/quotation-session-final-proposal-alt.interface';

@Injectable({ providedIn: 'root' })
export class FinalProposalNewRepository {
  private readonly _api = inject(FinalProposalNewApiService);

  finalProposalNewGetFinalProposal(params: FinalProposalNewGetFinalProposalParams): Observable<QuotationSessionFinalProposalAlt> {
    return this._api.finalProposalNewGetFinalProposal(finalProposalNewGetFinalProposalParamsAdapter.adapt(params)).pipe(
      map((res) => adaptQuotationSessionFinalProposalAltToUI(res?.data))
    );
  }

  finalProposalNewSaveFinalProposal(params?: FinalProposalNewSaveFinalProposalParams): Observable<number> {
    return this._api.finalProposalNewSaveFinalProposal(finalProposalNewSaveFinalProposalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
