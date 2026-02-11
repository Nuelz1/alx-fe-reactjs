function Header() {
    return (
        <header style = {
            {marginLeft: "500px",
            fontSize: "6px",
            width: "100px", 
            height: "100px",
            backgroundColor: "#391dd6", 
            padding: "50px", 
            textAlign: "center",
            clipPath: "circle(50%)",}}>
            <h1 style = {
                {color: "#06f572", 
                fontSize: "20px", 
                fontWeight: "revert",
                fontFamily: "Arial, sans-serif",}}
            >My Favorite Cities</h1>
        </header>
    );
}

export default Header;
