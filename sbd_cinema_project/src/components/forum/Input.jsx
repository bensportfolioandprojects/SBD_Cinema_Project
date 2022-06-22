const Input = ({setter}) => {
    return (
        <form>
            <input id="forumInput" type ="text"></input>
            <button id="forumSubmit" type = "button" value="Submit" onClick={()=>setter(document.getElementById('forumInput').value)}>Submit</button>
        </form>
    );
}
export default Input;