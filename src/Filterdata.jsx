import { swiggy } from "./constant";

function filterdata(srcstr, filterapi) {
    // const datas=apiList.filter((apiList)=>apiList.info.name.includes(srcstr));
    const datas = filterapi.filter((apiList) => apiList.info.name.toLowerCase().includes(srcstr.toLowerCase()));
    return datas;
}

export default filterdata;