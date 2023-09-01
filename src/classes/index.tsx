import AuthClass from './auth/AuthClass';
import ConsentClass from './consent/ConsentClass';
import ConsentTypesClass from './consentTypes/ConsentTypesClass';
import CountriesClass from './countries/UsersClass';
import StatesClass from './states/StatesClass';
import UsersClass from './users/UsersClass';

export default function Classes() {
  const consent = new ConsentClass();
  const consentTypes = new ConsentTypesClass();
  const countries = new CountriesClass();
  const states = new StatesClass();
  const users = new UsersClass();
  const auth = new AuthClass();
  return {
    consent,
    consentTypes,
    countries,
    states,
    users,
    auth,
  };
}
