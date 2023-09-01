import CoreClass from '../core/CoreClass';
import { DeleteMethods } from './methods/delete';
import { GetMethods } from './methods/get';
import { PostMethods } from './methods/post';
import { PutMethods } from './methods/put';
import useConsentTypesHook from './hook/useConsentTypesHook';

export default class ConsentTypesClass extends CoreClass {
  override url = 'consentType';
  override cachePath = this.CACHE_PATH.CONSENT_TYPES.CONSENT_TYPES;

  override hook: any = useConsentTypesHook();

  override getMethods = GetMethods;
  override postMethods = PostMethods;
  override putMethods = PutMethods;
  override deleteMethods = DeleteMethods;
}
