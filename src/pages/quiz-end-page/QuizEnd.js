import Flashcard from "../../components/Flashcard";
import {Link} from "react-router-dom"

export default function QuizEnd({quiz}) {

    return (
        <>
            <div>
                <div className="text-center text-[#2B7B0F] text-[50px] border-b shadow-lg">SCIENCE QUIZ 1</div>
                <div>
                    <div className="border rounded-[50px] border-black p-8 border-[6px] m-4">
                        <div className="flex justify-between text-4xl mt-[-20px]">
                            <div className="text-[#643013]">Quiz has finished!</div>
                            <div className="flex border border-black rounded-[30px] p-2 text-[#F5B54C] border-[3px]">+50 <svg width="45" height="32" viewBox="0 0 45 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.0377 14.0004H30.0377C30.3331 13.9985 30.6245 13.9311 30.8907 13.8031C31.157 13.6752 31.3916 13.4898 31.5777 13.2604C31.7732 13.0355 31.916 12.7697 31.9956 12.4825C32.0752 12.1953 32.0896 11.8939 32.0377 11.6004L30.0377 1.60041C29.9442 1.14186 29.6929 0.730612 29.3274 0.438263C28.962 0.145913 28.5056 -0.00902898 28.0377 0.000406878H16.0377C15.5698 -0.00902898 15.1135 0.145913 14.748 0.438263C14.3826 0.730612 14.1312 1.14186 14.0377 1.60041L12.0377 11.6004C11.9805 11.8909 11.9885 12.1906 12.0611 12.4776C12.1337 12.7647 12.2692 13.0321 12.4577 13.2604C12.6481 13.4951 12.8891 13.6836 13.1628 13.8118C13.4364 13.9399 13.7356 14.0044 14.0377 14.0004ZM17.6777 4.00041H26.3977L27.5977 10.0004H16.4777L17.6777 4.00041ZM42.0377 19.6004C41.9442 19.1419 41.6929 18.7306 41.3274 18.4383C40.962 18.1459 40.5056 17.991 40.0377 18.0004H28.0377C27.5698 17.991 27.1135 18.1459 26.748 18.4383C26.3826 18.7306 26.1312 19.1419 26.0377 19.6004L24.0377 29.6004C23.9805 29.8909 23.9885 30.1906 24.0611 30.4776C24.1337 30.7647 24.2692 31.0321 24.4577 31.2604C24.6481 31.4951 24.8891 31.6836 25.1628 31.8118C25.4364 31.9399 25.7356 32.0044 26.0377 32.0004H42.0377C42.3331 31.9985 42.6245 31.9311 42.8907 31.8031C43.157 31.6752 43.3916 31.4898 43.5777 31.2604C43.7732 31.0355 43.916 30.7697 43.9956 30.4825C44.0752 30.1953 44.0896 29.8939 44.0377 29.6004L42.0377 19.6004ZM28.4777 28.0004L29.6777 22.0004H38.3977L39.5977 28.0004H28.4777ZM16.0377 18.0004H4.03773C3.56984 17.991 3.11345 18.1459 2.74802 18.4383C2.38258 18.7306 2.13123 19.1419 2.03773 19.6004L0.0377315 29.6004C-0.0195162 29.8909 -0.0115356 30.1906 0.0610969 30.4776C0.13373 30.7647 0.269202 31.0321 0.457732 31.2604C0.648078 31.4951 0.889132 31.6836 1.16279 31.8118C1.43644 31.9399 1.73558 32.0044 2.03773 32.0004H18.0377C18.3331 31.9985 18.6245 31.9311 18.8907 31.8031C19.157 31.6752 19.3916 31.4898 19.5777 31.2604C19.7732 31.0355 19.916 30.7697 19.9956 30.4825C20.0752 30.1953 20.0896 29.8939 20.0377 29.6004L18.0377 19.6004C17.9442 19.1419 17.6929 18.7306 17.3274 18.4383C16.962 18.1459 16.5056 17.991 16.0377 18.0004ZM4.47773 28.0004L5.67773 22.0004H14.3977L15.5977 28.0004H4.47773Z" fill="#FFBF00" />
                            </svg>
                            </div>
                        </div>
                        <div className="text-center text-[#A9A9A9] text-3xl">
                            You correctly answered 7 out of 10 questions.
                        </div>
                        <div className="text-center text-[#A9A9A9] text-3xl">
                            you are among the top 85% of students who attempted this quiz.
                        </div>
                        <div className="flex justify-between mb-[40px]">
                            <div>
                                
                                <button className="bg-[#F5B54C] border border-black rounded-2xl px-2 text-xl">Quiz Review</button>
                                
                                </div>
                            <div>
                            <Link to={"/dashboard/explore"}>
                                <button className="bg-[#F5B54C] border border-black rounded-2xl px-2 text-xl">return to dashboard</button>
                            </Link>
                            </div>
                            
                        </div>
                        <div className="text-center text-4xl text-[#643013]">
                            similar quizzes
                        </div>
                        <div className="flex justify-between mt-2">
                            <div className= "bg-[#900101] border border-black text-white px-2 rounded-2xl text-xl">GK Quiz 1</div>
                            <div className= "bg-[#900101] border border-black text-white px-2 rounded-2xl text-xl">GK Quiz 1</div>
                            <div className= "bg-[#900101] border border-black text-white px-2 rounded-2xl text-xl">GK Quiz 1</div>
                            {/*quiz && quiz.sim &&
                                quiz.sim.map(el=>{
                                    return <Flashcard name={el.name} media={el.media} text={el.text}/>
                                })*/
                            }
                        </div>
                        <div className="text-center text-4xl text-[#643013] mt-4">
                            Discovered Flashcards
                        </div>
                        <div>
                            <Flashcard name="Operating systems" media="sad" text="asdfsadfasdfasdfasdfasfsadfa"/>
                            <Flashcard name="Operating systems" media="sad" text="asdfsadfasdfasdfasdfasfsadfa"/>
                            <Flashcard name="Operating systems" media="sad" text="asdfsadfasdfasdfasdfasfsadfa"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}