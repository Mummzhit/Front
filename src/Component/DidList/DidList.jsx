import "./DidList.css"
import ViewMoreIcon from "../Icons/ViewMoreIcon"
import MissionCard from "../MissionCard/MissionCard"


export default function DidList() {

    // const handleClick = (id) => {
    //     setActiveTab(id);
    //     if (onTabChange) {
    //         onTabChange(id);
    //     };
    // }
    
    return (
        <div className="did-list">
            <div className="did-list-title">
                <h1>오늘도 해냈어요</h1>
                <span><ViewMoreIcon/></span>
            </div>
            <div className="did-list-contents">
                <MissionCard type="done" icon="⏰" text="릴스 시청을 어제보다 9분 줄였어요" />
                <MissionCard type="done" icon="🐶" text="멈멈이와 산책을 다녀왔어요" />
                <MissionCard type="done" icon="☁️" text="‘릴스 보기 전에 이유 생각하기’ 미션을 실천했어요" />
            </div>
        </div>
        
        // <button
        //     onClick={() => handleClick(id)}></button>
    )
}