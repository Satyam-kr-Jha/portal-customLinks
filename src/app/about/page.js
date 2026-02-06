import Project from "@/component/Project"

const About = () => {
    return (
        <div className="w-full font-mono min-h-screen bg-black pt-16 text-white px-2 pb-10">
            <div className="relative mt-[6vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 sm:pt-8 sm:px-8 p-4 sm:pb-2 pb-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-white/10">
                <span className="retro absolute md:-top-6 -top-3 md:left-8 left-5 bg-zinc-200 text-black md:py-2 py-1 sm:px-4 px-2 md:text-[1rem] text-[0.5rem]">
                    What is this?
                </span>
                <p className="md:text-[1.12rem] md:leading-[1.4] text-[0.8rem] text-white">Portal is a personal URL shortening and management system designed specifically for portfolio projects. Instead of sharing long, unmemorable deployment URLs, create clean, branded links that reflect your professional identity.</p>
            </div>
            <div className="relative mb-4 mt-[6vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 sm:pt-8 sm:px-8 p-4 sm:pb-2 pb-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-white/10">
                <span className="retro absolute md:-top-6 -top-3 md:left-8 left-5 bg-zinc-200 text-black md:py-2 py-1 sm:px-4 px-2 md:text-[1rem] text-[0.5rem]">
                    Why build this?
                </span>
                <div className="md:text-[1.12rem] md:leading-[1.4] text-[0.8rem] text-white">Every portfolio project deserves a professional presentation. Generic deployment URLs like <span className="text-xs bg-zinc-400 text-black px-2 py-0.5 -mx-1 rounded">my-awesome-project-abc123.vercel.app</span> don't inspire confidence. <br /> With Portal, I can customize & share <span className="bg-zinc-400 text-black px-2 py-0.5 -mx-1 rounded text-xs">linkHub.dev/ecommerce</span> on my resume, GitHub, and LinkedIn - clean, memorable, and branded. <br />Plus, it demonstrates full-stack development skills: authentication, database design, API development, and responsive UI design.</div>
            </div>
            <div className="relative mt-[6vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 p-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-white/10 md:grid md:grid-cols-2">
                <span className="retro absolute md:-top-6 -top-3 md:left-8 left-5 bg-zinc-200 text-black md:py-2 py-1 sm:px-4 px-2 md:text-[1rem] text-[0.5rem]">
                    Key Features
                </span>
                <div className="relative md:mt-[5.5vh] mb-1 mt-[3vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 sm:pt-5 sm:px-8 p-4 pb-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-black/40">
                    <span className="font-bold absolute md:-top-5 -top-3 md:left-8 left-5 bg-zinc-400 text-black py-1 sm:px-4 px-2 md:text-[1.05rem] text-[0.6rem]">
                        🔗 Custom Short URLs
                    </span>
                    <div className="md:text-[1.12rem] md:leading-[1.4] text-[0.8rem] text-white">Create memorable, custom links for my projects</div>
                </div>
                <div className="relative md:mt-[5.5vh] mb-1 mt-[3vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 sm:pt-5 sm:px-8 p-4 pb-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-black/40">
                    <span className="font-bold absolute md:-top-5 -top-3 md:left-8 left-5 bg-zinc-400 text-black py-1 sm:px-4 px-2 md:text-[1.05rem] text-[0.6rem]">
                        📊 Click Analytics
                    </span>
                    <div className="md:text-[1.12rem] md:leading-[1.4] text-[0.8rem] text-white">Track how many people visit each project</div>
                </div>
                <div className="relative md:mt-[5.5vh] mb-1 mt-[3vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 sm:pt-5 sm:px-8 p-4 pb-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-black/40">
                    <span className="font-bold absolute md:-top-5 -top-3 md:left-8 left-5 bg-zinc-400 text-black py-1 sm:px-4 px-2 md:text-[1.05rem] text-[0.6rem]">
                        🔒 Private Dashboard
                    </span>
                    <div className="md:text-[1.12rem] md:leading-[1.4] text-[0.8rem] text-white">Secure admin panel</div>
                </div>
                <div className="relative md:mt-[5.5vh] mb-1 mt-[3vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 sm:pt-5 sm:px-8 p-4 pb-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-black/40">
                    <span className="font-bold absolute md:-top-5 -top-3 md:left-8 left-5 bg-zinc-400 text-black py-1 sm:px-4 px-2 md:text-[1.05rem] text-[0.6rem]">
                        ⚡ Fast Redirects
                    </span>
                    <div className="md:text-[1.12rem] md:leading-[1.4] text-[0.8rem] text-white">Server-side redirects for instant navigation</div>
                </div>
            </div>

            <div className="relative mt-[6vh] mx-[1vw] border-3 md:border-4 border-white text-white/80 sm:pt-8 sm:px-8 p-4 sm:pb-2 pb-2 md:shadow-[4px_4px_0_#000] shadow-[3px_3px_0_#000] bg-white/10">
                <span className="retro absolute md:-top-6 -top-3 md:left-8 left-5 bg-zinc-200 text-black md:py-2 py-1 sm:px-4 px-2 md:text-[1rem] text-[0.5rem]">
                    Connect to me?
                </span>
                <div className="w-full py-2 flex items-center justify-center">
                    <div className="w-fit flex gap-[3vw] items-center justify-between">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saty.kr.jha@gmail.com&su=Let’s%20Connect&body=Hi%20Satyam..." target="_blank" rel="noopener noreferrer"><div className="bg-white hover:shadow-[0px_0px_5px_2px_#fff] active:shadow-[0px_0px_5px_2px_#fff] hover:scale-[1.1] active:scale-[0.9] transition-all p-2.5 rounded-full w-14"><div className="bg-black p-1.5 rounded-full"><img src="/gmail.svg" alt="gmail" /></div></div></a>
                        <a href="https://github.com/Satyam-kr-Jha" target="_blank" rel="noopener noreferrer"><div className="bg-white hover:shadow-[0px_0px_5px_2px_#fff] active:shadow-[0px_0px_5px_2px_#fff] hover:scale-[1.1] active:scale-[0.9] transition-all p-1 rounded-full w-14"><img src="/github.svg" alt="github" /></div></a>
                        <a href="https://www.linkedin.com/in/saty-kr-jha/" target="_blank" rel="noopener noreferrer"><div className="bg-white hover:shadow-[0px_0px_5px_2px_#fff] active:shadow-[0px_0px_5px_2px_#fff] hover:scale-[1.1] active:scale-[0.9] transition-all p-2.5 rounded-full w-14"><img src="/linkedin.svg" alt="linkedIn" /></div></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About