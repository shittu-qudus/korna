import './StaffPicks.css';

const StaffPicks = ({ staffs }) => {
  return (
    <div className="staff-picks">
      <h3>Staff Picks</h3>
      {staffs.map((staff) => (
        <div key={staff.id} className='staff-card'>
          <h4 className='staff-name'>👤{staff.name}</h4>
          <p className='staff-message'>{staff.message}</p>
          <span className='staff-date'>{staff.date}</span>
        </div>
      ))}
      <div className='see-more'>See the full list</div>
    </div>
  );
};

export default StaffPicks;