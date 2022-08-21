import {defineStore} from 'pinia'
import {login} from "../api/user";

export const userStore = defineStore('user',{
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        test: (state) => {
            return (state.count)
        }
    },
    actions: {
        increment() {
            this.count++
        },
        userLogin(user:{}){
            return new Promise((resolve) => {
                login(user).then(({data}) => {
                    resolve(data)
                }).catch((err) => {
                    resolve([err, undefined])
                })
            })
        }
    },
})