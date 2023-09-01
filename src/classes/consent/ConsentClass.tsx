import CoreClass from '../core/CoreClass';
import { DeleteMethods } from './methods/delete';
import { GetMethods } from './methods/get';
import { PostMethods } from './methods/post';
import { PutMethods } from './methods/put';
import useConsentHook from './hook/useConsentHook';

export default class ConsentClass extends CoreClass {
  override url = 'consent';
  override cachePath = this.CACHE_PATH.CONSENT.CONSENT;

  override hook: any = useConsentHook();

  override getMethods = GetMethods;
  override postMethods = PostMethods;
  override putMethods = PutMethods;
  override deleteMethods = DeleteMethods;

  statesThatCanChoose = ['CA', 'CO', 'CT', 'VA'];
}
