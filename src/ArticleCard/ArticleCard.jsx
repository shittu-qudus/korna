import { HiChat, HiDotsCircleHorizontal, HiFolderAdd, HiHand, HiStar } from "react-icons/hi";
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-content">
        <div className="article-meta">
          <span className="author">{article.author}</span>
        </div>
        <h2 className='article-title'>{article.title}</h2>
        <p className='article-subtitle'>{article.subtitle}</p>
        <div className='article-footer'>
          <div className="footer-left">
            <span className="date"><HiStar size={16} className="icon" color="gold" /> {article.date}</span>
            <span className="divider">·</span>
            <span className="engagement">
              <HiHand size={16} className="icon" /> {article.engagement.likes}
            </span>
            <span className="engagement">
              <HiChat size={16} className="icon" /> {article.engagement.comments}
            </span>
          </div>
          <div className="footer-right">
            <HiFolderAdd size={16} className="icon action-icon" />
            <HiDotsCircleHorizontal size={16} className="icon action-icon" />
          </div>
        </div>
      </div>
      <div className="article-image">
        <img src={article.image} alt="Article" />
      </div>
    </div>
  );
};

export default ArticleCard;