const ServicesTasks = {

    async getTask() {

        let url = "http://www.mocky.io/v2/5eb08c4b3300005c00c68f18"
        const res = await fetch(url)
        var data = await res.json()
        return data;
    },

}


export default ServicesTasks