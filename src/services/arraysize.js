import API from './api';

const ArraySizeService = {
    bogosort: (n) => API.get(`/metrics?n=${n}`)
}

export default ArraySizeService