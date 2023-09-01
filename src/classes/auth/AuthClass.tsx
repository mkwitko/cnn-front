import CoreClass from '../core/CoreClass';
import useAuthHook from './hook/useAuthHook';
import { DeleteMethods } from './methods/delete';
import { GetMethods } from './methods/get';
import { PostMethods } from './methods/post';
import { PutMethods } from './methods/put';

export default class AuthClass extends CoreClass {
  override url = 'auth';
  override cachePath = this.CACHE_PATH.AUTH.AUTH;

  override hook: any = useAuthHook();

  override getMethods = GetMethods;
  override postMethods = PostMethods;
  override putMethods = PutMethods;
  override deleteMethods = DeleteMethods;
}
