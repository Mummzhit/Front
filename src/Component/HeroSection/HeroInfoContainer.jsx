

import './HeroInfoContainer.css';

const HeroInfoContainer = ({level}) => {
    return(
        <div className="hero-info-container">
            <p>🌱 멈멈 {level} Level</p>
        </div>
    );
}

export default HeroInfoContainer;