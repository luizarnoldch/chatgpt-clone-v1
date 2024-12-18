import DesktopSidebarChat from "./DesktopSidebarChat";

type Props = {};

const DesktopSidebarChats = (props: Props) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {Array.from({ length: 10 }, (_, index) => (
        <DesktopSidebarChat
          name={index.toString()}
          path={`/chat/${index}`}
          key={index}
        />
      ))}
    </div>
  );
};

export default DesktopSidebarChats;
