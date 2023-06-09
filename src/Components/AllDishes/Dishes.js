import { dataDishes } from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/dishesSlice";

const Dishes = () => {
    const selectCategory = useSelector(getSelectedCategory)

    return(
        <div>
            {dataDishes
            .filter(dish => {
                if (selectCategory === 'ALL') return true;
                return selectCategory === dish.category;
            })
            .map((item, index) => <Dish dish={item} key={index}/>)}
        </div>
    )
}

export default Dishes;