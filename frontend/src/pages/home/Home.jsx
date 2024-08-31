import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/message/MessageContainer"
const Home = () => {
  return (
    <div className="flex sm:-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  border-2 border-red-200 ">
      <Sidebar/>
      <MessageContainer />
    </div>
  )
}

export default Home