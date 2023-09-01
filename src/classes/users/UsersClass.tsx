import CoreClass from '../core/CoreClass';
import { DeleteMethods } from './methods/delete';
import { GetMethods } from './methods/get';
import { PostMethods } from './methods/post';
import { PutMethods } from './methods/put';
import useUsersHook from './hook/useUsersHook';

export default class UsersClass extends CoreClass {
  override url = 'users';
  override cachePath = this.CACHE_PATH.USER.USER_INFO;

  override hook: any = useUsersHook();

  override getMethods = GetMethods;
  override postMethods = PostMethods;
  override putMethods = PutMethods;
  override deleteMethods = DeleteMethods;
}
