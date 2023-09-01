import SingleElement from './SingleElement';
import Accordion from '@/components/nonInteractiveComponents/Accordion';
import { MdOutlinePolicy } from 'react-icons/md';

export default function SideBar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  const Menus = [
    {
      title: 'User Consent',
      src: <MdOutlinePolicy className="h-6 w-6" />,
      childs: [
        {
          title: 'Consent Giving',
          path: '/home',
        },
        {
          title: 'Consultation',
          path: '/consult',
        },
      ],
    },
  ];

  return (
    <div
      className={` ${
        open ? 'w-[16rem] p-6' : 'w-0 sm:w-16 sm:py-6'
      } fixed z-50 h-screen  bg-black text-white duration-300 ease-in`}
    >
      <div className="flex items-center justify-between gap-6"></div>
      <ul>
        {Menus.map((each, index) => {
          return open && each.childs ? (
            <Accordion
              key={index}
              header={
                <SingleElement
                  Menu={each}
                  index={index}
                  open={open}
                  MenuIcon={each.src}
                />
              }
            >
              <div className="ml-6">
                {each.childs.map((e, i) => {
                  return (
                    <SingleElement
                      key={i}
                      Menu={e}
                      index={i}
                      open={open}
                      setOpen={setOpen}
                    />
                  );
                })}
              </div>
            </Accordion>
          ) : (
            <SingleElement
              key={index}
              Menu={each}
              index={index}
              open={open}
              setOpen={setOpen}
              MenuIcon={each.src}
            />
          );
        })}
      </ul>
    </div>
  );
}
