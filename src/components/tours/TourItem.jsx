import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating'; // استيراد Rating من الملف المناسب
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate بدلاً من useHistory

const TourItem = ({ item }) => {
  const navigate = useNavigate(); // استخدام useNavigate بدلاً من useHistory

  const handleClick = () => {
    navigate(`/tour/${item.id}`);
    window.scrollTo(0, 0); // التمرير إلى الأعلى من الصفحة عند النقر
  };

  return (
    <div className="tour-item">
      <img src={item.image} alt={item.title} className="tour-item-img" />
      <span className="tour-item-label">ADVENTURE</span>
      <div className="tour-item-body">
        <div className="tour-item-title">{item.title}</div>
        <div className="tour-item-duration">
          <span>{item.duration}</span> <i className="bi bi-dot"></i>
          Pickup available
        </div>
        <Rating rating={item.rating} reviews={item.reviews} />
        <div className="tour-item-price">
          <strong>From ${item.priceFrom}</strong> per person
        </div>
        {/* رابط "See More" مع onClick لتشغيل السكرول */}
        <Link to={`/tour/${item.id}`} className="tour-item-link" onClick={handleClick}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default TourItem;
