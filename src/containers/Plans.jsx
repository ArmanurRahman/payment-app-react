import Card from "../components/card";

import { subscriptions } from "../config/constants.js";
const Plans = () => {
    const subscribeHandler = (name) => {
        console.log(name);
    };
    return (
        <div className='plans'>
            <Card
                name={subscriptions.pro.name}
                price={subscriptions.pro.price}
                prons={subscriptions.pro.prons}
                cons={subscriptions.pro.cons}
                buttonName={"Subscribe"}
                subscriptionClickHandler={() => subscribeHandler("pro")}
            />
            <Card
                name={subscriptions.basic.name}
                price={subscriptions.basic.price}
                prons={subscriptions.basic.prons}
                cons={subscriptions.basic.cons}
                buttonName={"Subscribe"}
                subscriptionClickHandler={() => subscribeHandler("basic")}
            />
        </div>
    );
};

export default Plans;
