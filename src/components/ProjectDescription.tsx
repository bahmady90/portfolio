import { ReactNode } from "react";

type ProjectDescriptionProps = {
    title: string;
    descriptionOne: ReactNode;
    descriptionTwo: string;
    href: string;

}

export default function ProjectDescription({title, descriptionOne, descriptionTwo, href} : ProjectDescriptionProps) {
  return (
    <div className="hidden relative sm:flex flex-col md:my-6 w-full md:w-96 self-center">
        <div className="mx-3 mb-4 border-b border-slate-200 pt-3 pb-2 px-1 flex justify-center items-center">
            <span className="text-[1.5rem] md:text-[2rem] text-cyan-400 font-medium ">
            {title}
            </span>
        </div>
        
        <ul className="p-4 list-disc list-inside">
            <li className="mb-2 text-white text-xl">
                {descriptionOne}
            </li>
            <li className="mb-2 text-white text-xl">
                {descriptionTwo}
            </li>
            <li>
                <a 
                    className=" text-white leading-normal text-lg  underline underline-offset-4 decoration-cyan-400  hover:bg-gray-900 hover:font-bold hover:tracking-wide cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2 "
                    href={href}>
                    <span className="">Hier zur Guthub-Repo &rarr;</span>
                </a>
            </li>
        </ul>
    </div>
  )
}
