import React from 'react'
const cardsData = [
    {
        icon: <i class="bi bi-truck"></i>,
        title: 'Free Delivery',
        description: 'Worldwide',
    },
    {
        icon: <i class="bi bi-cash-coin"></i>,
        title: 'Money Returns',
        description: '30 Days money return',
    },
    {
        icon: <i class="bi bi-headset"></i>,
        title: '27/4 Online Support',
        description: 'Customer Support',
    },
    {
        icon: <i class="bi bi-lock"></i>,
        title: 'Payment Security',
        description: 'Safe Payment',
    },

];
const CardSection = ({ cards }) => {
    return (
        <div class="container">
            <div class="row row-border-custom">

                {cards.map((card, index) => (
                    <div key={index} className="Custom_Card col-lg-3">

                        <div><h2 class="card-icon-c">{card.icon}</h2></div>
                        <div><h2 class="card-title">{card.title}</h2>
                            <p>{card.description}</p></div>

                    </div>
                ))}
            </div>
        </div>


    );
};
function Card() {
  return (
    <div class="card-section">
         
            <CardSection cards={cardsData} />
        </div>
  )
}

export default Card;
