import "./ToDoList.css"
import ViewMoreIcon from "../Icons/ViewMoreIcon"
import MissionCard from "../MissionCard/MissionCard"


export default function ToDoList() {


    
    return (
        <div className="to-do-list">
            <div className="to-do-list-title">
                <h1>내일은 이렇게 도전해 볼까요?</h1>
                <span><ViewMoreIcon/></span>
            </div>
            <div className="to-do-list-contents">
                <div ><MissionCard type="todo" icon="🎧" text="눈 뜨자마자 노래 한 곡 듣기" /></div>
                <div ><MissionCard type="todo" icon="🌿" text="귀가 후, 눈을 감고 심호흡 10분 하기"  /></div>
                <div ><MissionCard type="todo" icon="🐾" text="숏폼 보기 전, 멈멈이와 대화하기"  /></div>
            </div>
        </div>
        
        
    )
}