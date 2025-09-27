import './FollowSection.css';

const FollowSection = ({ follows }) => {
  return (
    <div className="follow-section">
      <h4>Who to follow</h4>
      {follows.map((follow) => (
        <div key={follow.id} className='follow-card'>
          <div className="follow-info">
            <h5 className='follow-name'>👤{follow.name}</h5>
            <p className='follow-caption'>{follow.caption}</p>
          </div>
          <button className='follow-btn'>Follow</button>
        </div>
      ))}
      <div className="see-more">See more suggestions</div>
    </div>
  );
};

export default FollowSection;