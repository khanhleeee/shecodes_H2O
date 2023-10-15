import axiosClient from './axiosClient'

const partnerUpApi = {
	getCompanyDetails: (companyId) => {
		const url = `./companies/${companyId}`
		return axiosClient.get(url, companyId)
	},
	getCompanyList: (params) => {
		const url = '/companies'
		return axiosClient.get(url, params)
	},
	getServices: (params) => {
		const url = '/services'
		return axiosClient.get(url, params)
	},
}

export default partnerUpApi
