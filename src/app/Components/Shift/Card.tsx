import OrdersThisMonthCard from './OrdersThisMonthCard';
import { useIntl } from 'react-intl'

const mydata = [
    {
        price: 8014,
        title: 'CASH_TURNOVER',
        progressBarTitle: '1500.3 to Goal',
        badgeValue: '5.5',
        progressBarValue: '80',
        progressBarWidth: '80',
    },
    {
        price: 3000,
        title: 'Cash Turnover',
        progressBarTitle: '1500.3 to Goal',
        badgeValue: '5.5',
        progressBarValue: '40',
        progressBarWidth: '40',
    },
    {
        price: 3000,
        title: 'Cash Turnover',
        progressBarTitle: '1500.3 to Goal',
        badgeValue: '5.5',
        progressBarValue: '50',
        progressBarWidth: '50',
    },
    {
        price: 600,
        title: 'Cash total',
        progressBarTitle: '1500.3 to xc',
        badgeValue: '6',
        progressBarValue: '100',
        progressBarWidth: '100',
    }, 
    
];

const Card = () => {
    const intl = useIntl()
    return (
        <div className='d-flex flex-nowrap gap-10'>
            {mydata.map((data, index) => (
                <OrdersThisMonthCard
                    key={index}
                    price={data.price}
                    title={intl.formatMessage({ id: 'USER.MANAGEMENT' })} //{data.title}
                    progressBarTitle={data.progressBarTitle}
                    badgeValue={data.badgeValue}
                    progressBarValue={data.progressBarValue}
                    progressBarWidth={data.progressBarWidth}
                />
            ))}
        </div>
    );
};

export default Card;