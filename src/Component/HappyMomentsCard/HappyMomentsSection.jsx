import HappyMomentsCard from "./HappyMomentsCard";
import ViewMoreIcon from "../Icons/ViewMoreIcon";
import './HappyMomentsSection.css'

export default function HappyMomentsSection ({data}){
    return (
        <div className="happy-moments">
            <div className="title">
                <h1>행복하게 멈칫한 순간을 모아봤어요!</h1>
                <span><ViewMoreIcon/></span>
            </div>
            

            <div className="card-scroll-container">
                {data.map((item,index)=>(
                    <HappyMomentsCard key={index} {...item}/>
                ))}
            </div>
        </div>
    )
}