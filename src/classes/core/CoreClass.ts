'use client';

import { AxiosRequestConfig } from 'axios';
import { CACHE_PATH } from '@/infra/cache';
import useCoreHook from './hook/useCoreHook';
import { getCache, setCache } from '@/services/cache';
import { CnnApi } from '@/services/cnnApi';

export default class CoreClass {
  url = '';
  cachePath = '';

  getMethods: any;
  postMethods: any;
  putMethods: any;
  deleteMethods: any;

  CACHE_PATH = CACHE_PATH;

  hook: any = useCoreHook();

  async getCache(key?: string) {
    const cached = getCache(key || this.cachePath);
    return cached;
  }

  async setCache(value: any, shouldUpdate = true, key?: string) {
    const cache = await this.getCache(key || this.cachePath);
    if (shouldUpdate || !cache || !this.hasObject(cache))
      setCache(key || this.cachePath, value);
  }

  async getHttp<T>(method: typeof this.getMethods, url?: string) {
    return CnnApi.get<T>(this.makeUrl(method, url || undefined))
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        console.log('err - ', err);
        return err;
      });
  }

  async postHttp(
    method: typeof this.postMethods,
    value: any,
    url?: string,
    configs: AxiosRequestConfig = {}
  ) {
    return CnnApi.post(this.makeUrl(method, url || undefined), value, configs)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  async putHttp(
    method: typeof this.putMethods,
    value: any,
    url?: string,
    config?: any
  ) {
    return CnnApi.put(this.makeUrl(method, url || undefined), value, config)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  async setClass<T>(
    shouldUpdate = true,
    method?: typeof this.getMethods,
    custom: {
      url?: string;
      cachePath?: string;
    } | null = null
  ) {
    const cache = await this.getCache();
    const request = this.isCustomRequest(custom);
    if (!cache || !this.hasObject(cache) || shouldUpdate) {
      // TODO - remover any
      const response: any = await this.getHttp<T>(method || '', request.url);
      await this.setCache(response.data, shouldUpdate, request.cachePath);
      return response;
    } else {
      return cache;
    }
  }

  private makeUrl(method: string, url?: string) {
    const baseUrl = url || this.url;
    const _url = method !== '' ? baseUrl + '/' + method : baseUrl;
    return _url;
  }

  private isCustomRequest(custom: any) {
    if (custom) {
      return {
        url: custom.url || this.url,
        cachePath: custom.cachePath || this.cachePath,
      };
    }
    return {
      url: this.url,
      cachePath: this.cachePath,
    };
  }

  private hasObject(data: any) {
    return Object.keys(data).length > 0;
  }
}
