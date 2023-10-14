import axiosClient from './axiosClient'

const partnerUpApi = {
	getCompanyList: (params) => {
		const url = '/companies'
		return axiosClient.get(url, params)
	},
}

export default partnerUpApi
