import React from 'react';

const Question = () => {
    return (
        <div className='mb-5 p-5'>

            <p className='text-3xl lg:text-6xl font-bold text-center mb-5' >FAQ</p>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What's the difference between a latte and a cappuccino?
                </div>
                <div className="collapse-content">
                    <p>A latte and a cappuccino are both espresso-based drinks, but they differ in their ingredients and proportions. A latte is made with one shot of espresso and is mostly steamed milk with a small amount of milk foam on top. A cappuccino, on the other hand, consists of equal parts espresso, steamed milk, and milk foam. The cappuccino has a stronger coffee flavor and a drier foam, while the latte is creamier due to the higher milk content.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What's the best way to store coffee beans at home?
                </div>
                <div className="collapse-content">
                    <p>To keep your coffee beans fresh, store them in an airtight container in a cool, dark place. Exposure to air, moisture, light, and heat can all degrade the quality of your coffee.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What's the difference between a pour-over and a French press coffee?
                </div>
                <div className="collapse-content">
                    <p>Pour-over and French press are two distinct methods of brewing coffee. In a pour-over, hot water is poured over ground coffee in a filter, allowing it to drip through and into a container. This method produces a clean, bright, and nuanced flavor. In contrast, a French press involves steeping coarsely ground coffee in hot water before pressing down a metal or mesh plunger to separate the grounds.</p>
                </div>
            </div>

        </div>
    );
};

export default Question;