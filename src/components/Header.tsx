import AnimatedButton from "./AnimatedButton";

type HeaderProps = {
  onHandleScrollToProjects: () => void;
  onHandleScrollToAbout: () => void;
  onHandleScrollToContact: () => void;
}


export default function Header({onHandleScrollToProjects, onHandleScrollToAbout, onHandleScrollToContact} : HeaderProps) {
  return (
    <header className="flex gap-x-[30%] xl:gap-x-[50%] items-center mt-4 sm:mb-10">
        <h1 className='sm:ml-[5%] text-white font-bold sm:text-[2rem] text-[1rem] ml-4'>Belal Ahmady</h1>
        <div className="block sm:hidden mt-4">
            <AnimatedButton
              onClick={onHandleScrollToProjects} 
              padding="py-[1.5rem] px-[2.5rem] text-[1rem]">Menu
            </AnimatedButton>
        </div>
        <div className="hidden sm:flex justify-self-end self-center lg:gap-x-6 ml-auto">
            <AnimatedButton
              onClick={onHandleScrollToProjects} 
              padding="py-[2rem] px-[5rem]">Projekte</AnimatedButton>
            <AnimatedButton
              onClick={onHandleScrollToAbout} 
              padding="py-[2rem] px-[72px]">About</AnimatedButton>
            <AnimatedButton
              onClick={onHandleScrollToContact} 
              padding="py-[2rem] px-[72px]">Kontakt</AnimatedButton>
        </div>
    
    </header>
  )
}
