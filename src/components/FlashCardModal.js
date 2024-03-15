import { useState } from "react"
import FlashCardDiscoveredModal from "./FlashCardDiscoveredModal"

export default function FlashCardModal({ flashcard,trigger,setTrigger }) {
    const [discover,setDiscover] = useState(true);
    return (
        <>
           
           {trigger && <div>
           <div className="bg-black bg-opacity-80 text-white h-screen flex justify-center z-50 fixed top-0 left-0 w-full h-full">
                <button onClick={()=>{setTrigger(false)}} className="fixed top-3 right-3"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 2.64147L37.3583 0L20 17.3583L2.6417 0L0 2.64147L17.3584 19.9999L0 37.3583L2.6417 39.9998L20 22.6415L37.3583 39.9998L40 37.3583L22.6416 19.9999L40 2.64147Z" fill="#FEFEFE" fill-opacity="0.85" />
                </svg></button>

                <div className="mt-8">
                    <div className="flex justify-center">
                        <img src={require(`../assets/${flashcard.img}`)} alt="IMAGE" className="max-h-[200px] min-w-[200px]"></img>
                    </div>
                    <div className="mt-4 bg-[#8D431A] border border-[#643013] rounded-[24px] border-8">
                        <div className="text-center pb-2 pt-2 text-3xl">{flashcard.title}</div>
                        {/* <div></div>  {flashcard.info}*/}
                        <div className="max-w-3xl whitespace-normal break-words p-6">{flashcard.info}</div>
                    </div>
                </div>
            </div>
            <FlashCardDiscoveredModal discover={discover} setDiscover={setDiscover}/></div>
           }
        </>
    )
}