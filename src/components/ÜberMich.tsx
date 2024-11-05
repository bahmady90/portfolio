
import { forwardRef } from 'react';

const ÜberMich = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="w-[90%] h-fit flex flex-col xl:grid xl:grid-cols-[40%_60%] ml-[5%] xl:ml-0">
      <h2 className=" text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold text-white lg:justify-self-center lg:self-start">
        Über mich
      </h2>
      <div className="flex flex-col gap-y-5 justify-self-center self-start mt-5">
        <p className="text-white text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]">
          Ich bin ein angehender Anwendungsentwickler mit einem Hochschulabschluss in den Naturwissenschaften.
          Seit geraumer Zeit habe ich meine Leidenschaften für die Erstellung von{' '}
          <span className="bg-gradient-to-r from-sky-100 to-cyan-500 bg-clip-text text-transparent font-semibold italic">
            Full-Stack
          </span>
          -Anwendungen entdeckt.
        </p>
        <p className="text-white text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]">
          Neben der Erstellung von Anwendungen und der Erweiterung meines Tech-Stacks beschäftige ich mich auch mit
          Algorithmen und Datenstrukturen.
        </p>
        <a
          className="w-fit text-white leading-normal text-sm lg:text-lg underline underline-offset-4 decoration-cyan-400 hover:bg-gray-900 hover:font-bold hover:tracking-wide cursor-pointer rounded-lg px-3 lg:px-4 py-1 lg:py-2 ml-8"
          href="https://memorygame-jet-seven.vercel.app"
        >
          Mein Leetcode-Profil &rarr;
        </a>
      </div>
    </div>
  );
});

export default ÜberMich;

