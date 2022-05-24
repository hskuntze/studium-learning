import { OfferType } from 'types/OfferType';
import './styles.css';

type Props = {
    offer : OfferType;
}

const ContentCard = ({offer}:Props) => {
    return (
        <div className="content-container">
            <div className="base-card content-card">
                <img src={offer.course.imgUri} alt={offer.course.title} />
                <h3>{offer.course.title}</h3>
                <p>{offer.course.description}</p>
            </div>
        </div>
    );
}

export default ContentCard;