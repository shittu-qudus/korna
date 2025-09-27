import './TopicsSection.css';

const TopicsSection = ({ topics }) => {
  return (
    <div className="topics-section">
      <h4>Recommended topics</h4>
      <div className="topics-grid">
        {topics.map((topic) => (
          <span key={topic.id} className='topic-tag'>{topic.name}</span>
        ))}
      </div>
      <div className='see-more'>See more topics</div>
    </div>
  );
};

export default TopicsSection;