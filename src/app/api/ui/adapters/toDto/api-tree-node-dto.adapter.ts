import { TreeNode } from '../../models/tree-node.interface';
import { ApiTreeNodeDto } from '../../../swagger/models/api-tree-node-dto';

export function adaptApiTreeNodeDto(source?: TreeNode | null): ApiTreeNodeDto {
  return (source ?? {}) as ApiTreeNodeDto;
}
