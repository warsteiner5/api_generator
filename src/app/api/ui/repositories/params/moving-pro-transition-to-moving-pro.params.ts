import { MovingProTransitionToMovingPro$Params } from '../../../swagger/fn/moving-pro/moving-pro-transition-to-moving-pro';

// @ts-ignore
export interface MovingProTransitionToMovingProParams {
  entityId?: number;
  sourceKladrCode?: string;
  destinationKladrCode?: string;
  operationId?: number;
  userId?: number;
  organizationId?: number;
}

export function movingProTransitionToMovingProAdapter(params?: MovingProTransitionToMovingProParams): MovingProTransitionToMovingPro$Params {
  if (!params) {
    return {} as MovingProTransitionToMovingPro$Params;
  }
  return {
      EntityId: params.entityId,
      SourceKladrCode: params.sourceKladrCode,
      DestinationKladrCode: params.destinationKladrCode,
      OperationId: params.operationId,
      UserId: params.userId,
      OrganizationId: params.organizationId,
  };
}
