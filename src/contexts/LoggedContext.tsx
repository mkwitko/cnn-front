/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Classes from '@/classes';
import AuthClass from '@/classes/auth/AuthClass';
import ConsentClass from '@/classes/consent/ConsentClass';
import ConsentTypesClass from '@/classes/consentTypes/ConsentTypesClass';
import CountriesClass from '@/classes/countries/UsersClass';
import StatesClass from '@/classes/states/StatesClass';
import UsersClass from '@/classes/users/UsersClass';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

interface LoggedContextProps {
  consent: ConsentClass;
  consentTypes: ConsentTypesClass;
  countries: CountriesClass;
  states: StatesClass;
  users: UsersClass;
  auth: AuthClass;
}

export const LoggedContext = React.createContext({} as LoggedContextProps);

export function LoggedContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes: LoggedContextProps = Classes();
  const { consent, consentTypes, countries, states, users, auth } = classes;

  //   const { email } = auth.hook.data;

  useEffect(() => {
    consent
      .setClass(true, '', {
        userId: +Cookies.get('auth')!,
      })
      .then((res) => {
        consent.hook.setData(res.data);
      });
    consentTypes.setClass(true).then((res) => {
      consentTypes.hook.setData(res.data);
    });
    countries.setClass(true).then((res) => {
      countries.hook.setData(res.data);
    });
    states.setClass(true).then((res) => {
      states.hook.setData(res.data);
    });
    users.setClass(true).then((res) => {
      users.hook.setData(res.data);
    });
  }, []);

  return (
    <LoggedContext.Provider
      value={{
        consent,
        consentTypes,
        countries,
        states,
        users,
        auth,
      }}
    >
      {children}
    </LoggedContext.Provider>
  );
}
