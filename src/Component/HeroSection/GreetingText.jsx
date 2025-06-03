import './GreetingText.css';
const GreetingText = ({ username }) => {
    return (
        <div className="greeting-text">
           
                <div className="greeting-text-username"> <span className='username'>{username}</span> 님, </div>
                <div className="greeting-text-message">다시 만나서 기뻐요!</div>
        </div>
        
    )}

export default GreetingText;
