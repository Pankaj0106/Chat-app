

const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind css chat"
                    src={"https://api.dicebear.com/9.x/adventurer/svg?seed=Trouble"}
                />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-500"> 
            Hi! What is upp?
        </div>
        <div className="chat-footer opacity-50 text-s gap-1 items-center">12.52</div>
    </div>
  )
}

export default Message