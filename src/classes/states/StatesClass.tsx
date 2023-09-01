import CoreClass from '../core/CoreClass';
import useStatesHook from './hook/useStatesHook';
import { DeleteMethods } from './methods/delete';
import { GetMethods } from './methods/get';
import { PostMethods } from './methods/post';
import { PutMethods } from './methods/put';

export default class StatesClass extends CoreClass {
  override url = 'states';
  override cachePath = this.CACHE_PATH.STATES.STATES;

  override hook: any = useStatesHook();

  override getMethods = GetMethods;
  override postMethods = PostMethods;
  override putMethods = PutMethods;
  override deleteMethods = DeleteMethods;
}
