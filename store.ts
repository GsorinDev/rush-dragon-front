import {defineStore} from "pinia";

export const rushStore = defineStore('rushStore',{
    state: () => ({
        rushes: [],
        rushesDetails : [],
        offset : 0
    }),
    actions: {
        async loadRushes() {
            await fetch(`${process.env.VUE_APP_API_URL}/parties/limit/${this.offset}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                method: 'GET'
            })
                .then((response) =>  response.json())
                .then((rushes) => {
                    this.offset += 10
                    this.rushes = [...this.rushes,  ...rushes.lesParties]
                })
        },
        async loadRush(id) {
                await fetch(`${process.env.VUE_APP_API_URL}/parties/details/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    method: 'GET'
                }).then(
                    async(response) => this.rushesDetails.push(await response.json())
                )
        },
    }
})