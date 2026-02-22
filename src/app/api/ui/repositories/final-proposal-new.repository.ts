import { FinalProposalNewApiService } from '../../swagger/services/final-proposal-new-api.service';
import { FinalProposalNewGetFinalProposalParams, finalProposalNewGetFinalProposalAdapter } from './params/final-proposal-new-get-final-proposal.params';
import { FinalProposalNewSaveFinalProposalParams, finalProposalNewSaveFinalProposalAdapter } from './params/final-proposal-new-save-final-proposal.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { QuotationSessionFinalProposalAlt } from '../models/quotation-session-final-proposal-alt.interface';
import { quotationSessionFinalProposalAltAdapter } from '../adapters/models/quotation-session-final-proposal-alt.adapter';

@Injectable({ providedIn: 'root' })
export class FinalProposalNewRepository {
  private readonly _api = inject(FinalProposalNewApiService);

  finalProposalNewGetFinalProposal(params: FinalProposalNewGetFinalProposalParams): Observable<QuotationSessionFinalProposalAlt> {
    return this._api.finalProposalNewGetFinalProposal(finalProposalNewGetFinalProposalAdapter(params)).pipe(
      map((res) => quotationSessionFinalProposalAltAdapter(res?.data))
    );
  }

  finalProposalNewSaveFinalProposal(params?: FinalProposalNewSaveFinalProposalParams): Observable<number> {
    return this._api.finalProposalNewSaveFinalProposal(finalProposalNewSaveFinalProposalAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
