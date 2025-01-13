import { NavLink } from "react-router-dom";
import IMAGES from "../img/images";

export function HelloPage() {
    return (
        <div className="hello__block">
            <img src={`${IMAGES.witnes}`} alt="witnes" />
            <p><i>Каждая кнопка это три разных задач. Класть каждый в отдельный репозитори слишком легко :). А так тоже легко, но с изюминкой.</i></p>
            <div className='btns'>
                <NavLink to='/task1' className='task__btn t1'>Задача номер один</NavLink>
                <NavLink to='/task2' className='task__btn t2'>Задача номер два</NavLink>
                <NavLink to='/task3' className='task__btn t3'>Задача номер три</NavLink>
            </div>
        </div>
    )
}