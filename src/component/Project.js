import GenerateQrCode from "./QrCode"
const Project = (props) => {
  const {
    name = "Project Name",
    description = "Short description goes here... Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque numquam porro aperiam cupiditate vel autem vitae? Beatae, illum. Ad, Lorem ipsum dolor, recusandae.",
    link = 'https://example.com', 
    QR=false} = props
  return (
    <div className="relative mt-[6vh] mx-[1vw] border-3 md:border-4 border-black text-white/80 sm:pt-8 lg:px-8 p-4 sm:pb-2 pb-2 md:shadow-[5px_5px_0_#000] shadow-[4px_4px_0_#000] bg-black/40">
      <span className="retro absolute md:-top-6 -top-3 md:left-8 left-5 bg-zinc-200 text-black md:py-2 py-1 sm:px-4 px-2 md:text-[1rem] text-[0.5rem]">
        {name}
      </span>
      <div className="flex h-full gap-5">
        <div className="w-1/2 flex flex-col justify-between">
          <p className="font-mono text-justify leading-5 text-[1.1rem]">{description}</p>
          <div className="font-mono sm:block hidden">
            <a className="text-zinc-400 hover:text-zinc-100 transition-all duration-200 ease-in-out" href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            <img className="w-6 inline opacity-[0.7] hover:opacity-[0.9] active:opacity-[1] active:scale-[0.9] transition-all duration-200" src="/copy.svg" alt="" />
          </div>
        </div>
        <div className="font-mono h-full w-1/2 flex flex-col items-center lg:justify-between justify-center text-center gap-4 lg:-mt-5 lg:pb-2 pb-4 text-lg leading-none tracking-tight font-bold">
          <h2>Scan to open in Mobile</h2>
          <div className="w-[80%] md:w-[50%]">
        {QR?
            <GenerateQrCode originalUrl={link} />:<div className="w-32 h-32 bg-zinc-600">

            </div>
          }
          </div>
        </div>
      </div>
        <div className="mt-4 font-mono w-full sm:hidden flex justify-center">
            <a className="text-zinc-400 hover:text-zinc-100 transition-all duration-200 ease-in-out" href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            <img className="w-6 inline opacity-[0.7] hover:opacity-[0.9] active:opacity-[1] active:scale-[0.9] transition-all duration-200" src="/copy.svg" alt="" />
          </div>
    </div>
  )
}

export default Project