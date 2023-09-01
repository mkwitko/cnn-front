import CoreClass from '../core/CoreClass';
import { DeleteMethods } from './methods/delete';
import { GetMethods } from './methods/get';
import { PostMethods } from './methods/post';
import { PutMethods } from './methods/put';
import useCountriesHook from './hook/useCountriesHook';

export default class CountriesClass extends CoreClass {
  override url = 'countries';
  override cachePath = this.CACHE_PATH.COUNTRIES.COUNTRIES;

  override hook: any = useCountriesHook();

  override getMethods = GetMethods;
  override postMethods = PostMethods;
  override putMethods = PutMethods;
  override deleteMethods = DeleteMethods;
}
