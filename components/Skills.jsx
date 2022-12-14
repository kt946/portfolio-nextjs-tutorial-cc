import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      image: 'html.png',
    },
    {
      name: 'CSS',
      image: 'css.png',
    },
    {
      name: 'JavaScript',
      image: 'javascript.png',
    },
    {
      name: 'React',
      image: 'react.png',
    },
    {
      name: 'Tailwind',
      image: 'tailwind.png',
    },
    {
      name: 'NextJs',
      image: 'nextjs.png',
    },
    {
      name: 'Github',
      image: 'github1.png',
    },
    {
      name: 'MongoDB',
      image: 'mongo.png',
    },
  ];

  return (
    <div
      id='skills'
      className='w-full lg:h-screen p-2 scroll-margin-lg'
    >
      <div className='max-w-[1240px] mx-auto py-16 flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
            >
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image
                    src={`/assets/skills/${skill.image}`}
                    width={64}
                    height={64}
                    alt=''
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
