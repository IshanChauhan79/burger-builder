import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('Auth reducer',()=>{
    it('should return the initial state',()=>{
        expect(reducer(undefined,{})).toEqual({
                token:null,
                userId:null,
                error:null,
                loading:false,
                authRedirectPath:'/'
        })
    })

    it('should store the token uoon Login',()=>{
        expect(reducer({
            token:null,
            userId:null,
            error:null,
            loading:false,
            authRedirectPath:'/'
        },{
            type:actionTypes.AUTH_SUCCESS,
            userId:'Some ID',
            idToken: 'some-token'
        })).toEqual({
            userId:'Some ID',
            token: 'some-token',
            error:null,
            loading:false,
            authRedirectPath:'/'

        })
    })
})