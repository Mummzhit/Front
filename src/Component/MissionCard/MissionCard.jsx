import './MissionCard.css'

const MissionCard = ({ type, icon, text, onClick }) => {
    return (
        <div
            className={`mission-card ${type}`}
            onClick={type === 'todo' ? onClick : undefined} // todo면 클릭 가능
        >
            <div className='mission-card-left-contents'>
                <span className="icon">{icon}</span>
                <span className="text">{text}</span>
            </div>
            
            {type === 'todo' && (
                <div className="action-button">＋</div>
            )}
        </div>
    );
};

export default MissionCard;
