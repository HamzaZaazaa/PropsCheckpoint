import Picture from "./Picture"
const Profile=({fullName, Bio, profession}) => {
    function HandleName(props) {
        alert(`Hello from ${fullName}`) }
    return ( 
    <>
        <Picture />
        <h1 >{fullName}</h1>
        <h2>{Bio}</h2>
        <h3>{profession}</h3>
        <button onClick={HandleName} className="bttn">Click</button>

    </>
    )

}
export default Profile