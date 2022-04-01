import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Button from "./button";

const Card = ({ name, price, prons = [], cons = [], buttonName }) => {
    return (
        <div className='card'>
            <p className='card_name'>{name}</p>
            <p className='card_price'>
                <span>$</span>
                {price}
            </p>
            <div>
                {prons.length > 0 && (
                    <ul className='card_list'>
                        {prons.map((item) => (
                            <li className='card_list_item'>
                                {" "}
                                <AiOutlineCheck
                                    color='#7ed56f'
                                    size={24}
                                />{" "}
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                )}
                {cons.length > 0 && (
                    <ul className='card_list'>
                        {cons.map((item) => (
                            <li className='card_list_item'>
                                {" "}
                                <AiOutlineClose
                                    color='#7ed56f'
                                    size={24}
                                />{" "}
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <Button label={buttonName} className={"btn-primary"} />
        </div>
    );
};

export default Card;
