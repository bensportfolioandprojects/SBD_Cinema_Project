const Message = ({data}) => {
    return (
        <div className="forummessage">
        <p className="forummessagetitle">
        {data.movie}
        </p>
        <p className="forumcontent">
            {data.username}: {data.message}
        </p>
        </div>
    );
}
 
export default Message;