const UserProfile = (props) => {
    return (
        <div style = {
            {fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            width: "100px",
            border: '10px solid gray',  
            margin: '10px',
            height: "100px",
            color: "white",
            backgroundColor: "#360bf1",
            padding: "100px",
            clipPath: "circle(50%)",
            marginLeft: "500px",}
            }>
            <h2 style = {{fontSize: "12px", color: "blue"}}>{props.name}</h2>
            <p>Age: <span style={{fontSize: "10px"}}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;
