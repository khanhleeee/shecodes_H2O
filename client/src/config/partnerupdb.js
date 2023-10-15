import axiosClient from './axiosClient'

const partnerUpApi = {
  getCompanyList: (params) => {
    const url = "/companies";
    return axiosClient.get(url, params);
  },

  getCompanyDetails: (companyId) => {
    const url = `./companies/${companyId}`;
    return axiosClient.get(url, companyId);
  },
};

export default partnerUpApi
