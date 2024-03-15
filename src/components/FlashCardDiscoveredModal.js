import { useState, useEffect } from 'react';
export default function FlashCardDiscoveredModal({discover, setDiscover}) {
    const [countdown, setCountdown] = useState(5);
    const circumference = 2 * Math.PI * 17.5;
    const dashOffset = circumference * (1 - (countdown / 5));

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prevCountdown => Math.max(prevCountdown - 0.01, 0));
        }, 10);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            setTimeout(()=>{
                setDiscover(false);
            },1000)
            
        }
    }, [countdown]);

    return (
        <>
            {discover && <div className="bg-black bg-opacity-80 text-white h-screen flex justify-center z-50 fixed top-0 left-0 w-full h-full">
                <div className="fixed top-3 right-3" onClick={()=>{setDiscover(false)}}>
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="19" cy="19" r="17.5" stroke="#900101" strokeWidth="2" />
                        <circle
                            cx="19"
                            cy="19"
                            r="17.5"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2"
                            strokeDasharray={circumference}
                            strokeDashoffset={dashOffset}
                            style={{ transition: 'stroke-dashoffset 1s linear' }}
                        />
                        <path d="M26.657 11.343a1 1 0 010 1.414L20.414 19l6.243 6.243a1 1 0 11-1.414 1.414L19 20.414l-6.243 6.243a1 1 0 01-1.414-1.414L17.586 19l-6.243-6.243a1 1 0 011.414-1.414L19 17.586l6.243-6.243a1 1 0 011.414 0z" fill="#FFF" />
                    </svg>
                </div>

                <div className="bg-[#FFBF00] border border-[#D05F20] rounded-[24px] border-8 max-w-[800px] max-h-[500px] mt-[10vh]">
                    <div className="flex justify-center">
                        <img src={require(`../assets/image.png`)} alt="IMAGE" className="max-h-[100px] max-w-[100px] mt-4"></img>
                    </div>
                    <div className="text-[#900101] text-center text-[100px]">NEW FLASHCARD DISCOVERED!!!</div>
                </div>
            </div>}
        </>
    )
}
