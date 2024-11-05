import AnimatedButton from "./AnimatedButton"

type TechStackProps = {
  stackSelected: string,
  handleSetStackSelected: (stack: string) => void
}

export default function Techstack({stackSelected, handleSetStackSelected}: TechStackProps) {
  return (
    <>
    <div className="grid w-fit self-center mt-8 sm:mt-12 lg:mt-16 xl:mt-20 gap-x-12 grid-cols-2  mb-[2rem] lg:mb-[5rem]" >
      <AnimatedButton
        padding="py-6 sm:py-8 px-[3rem] sm:px-[5rem]" 
        layoutProp="frontend" 
        stackSelected={stackSelected} 
        onClick={() => handleSetStackSelected("frontend")}>Frontend</AnimatedButton>
      <AnimatedButton
        padding="py-6 sm:py-8 px-[3rem] sm:px-[5rem]" 
        layoutProp="backend" 
        stackSelected={stackSelected} 
        onClick={() => handleSetStackSelected("backend")}>Backend</AnimatedButton>
    </div>
      <div className="relative w-[85%] sm:w-[70%] h-fit grid self-center justify-self-center transform transition-all duration-500 ease-in-out mb-[3rem] sm:mb-[5rem] lg:mb-[8rem]">
          <div
            className={`absolute inset-0 grid grid-cols-5 gap-x-8 sm:gap-x-0 transition-opacity transform duration-500 ease-in-out ${
              stackSelected === "frontend" ? "opacity-100 " : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Frontend Images */}
            <img src="css.svg" alt="css-logo" />
            <img src="html.svg" alt="html-logo" />
            <img src="tailwind.svg" alt="tailwind-logo" />
            <img src="react.svg" alt="react-logo" />
            <img src="typescript.svg" alt="typescript-logo" />
          </div>

          <div
            className={`absolute inset-0 grid grid-cols-5 gap-x-8 sm:gap-x-0 transition-opacity transform duration-500 ease-in-out ${
              stackSelected === "backend" ? "opacity-100 " : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Backend Images */}
            <img src="node.svg" alt="node-logo" />
            <img src="express.svg" alt="express-logo" width={80} height={80} />
            <img src="dotnet.svg" alt="dotnet-logo" />
            <img src="mongo.svg" alt="mongo-logo" />
            <img src="postsql.svg" alt="postgresql-logo" />
          </div>
      </div>
    
    </>
  )
}
