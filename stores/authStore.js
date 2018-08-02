import { observable, action } from 'mobx';

export class AuthStore {
    @observable
    isAuthenticated = true;
}

export default new AuthStore();
