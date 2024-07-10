import { instance } from "./instance";
const foodUrl = "/admin/food";
const listFood = () => {
    return instance.get(`${foodUrl}/get-all-foods`);
}
export { listFood };
