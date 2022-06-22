import Message from "./Message";

const MessageHistory = ({data}) => {
    // let message = getAllMessages.function
    // let printOut = () => {
    //     for(const m of message){
    //         return (<Message data={m}/>)
    //     }
    // }
    return (
        <>
        <Message data={data}/>
        {/* {printOut()} */}
        {/* createMessage.function */}
        </>
    );
}
 
export default MessageHistory;