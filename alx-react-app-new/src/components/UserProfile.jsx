const UserProfile = (props) => {
    return (
        <div style = {
            {fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            width: "100px",
            height: "100px",
            color: "#e3dcf0",
            backgroundColor: "#340dc2",
            padding: "50px",
            clipPath: "circle(50%)",
            marginLeft: "500px",}
            }>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
