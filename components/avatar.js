//destructure props anf get the value of url
function Avatar({url}){
    return (
        <img 
         loading = "lazy"
         src={url}>
         
        </img>
    );
}

export default Avatar;