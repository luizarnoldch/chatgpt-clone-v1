import ConversationList from './ConversationList'
import DesktopSidebar from './DesktopSidebar'
import MobileSidebar from './MobileSidebar'
import ToggleBar from './ToggleBar'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <header className='w-auto min-h-screen'>
      <DesktopSidebar>
        <ConversationList />
      </DesktopSidebar>

      {/* <div className='md:hidden'>
        <MobileSidebar />
      </div> */}

    </header>
  )
}

export default Sidebar