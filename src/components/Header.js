import logo from './logo.png'

const Header = () => {
    return (  
        <div className="row bg-warning"> 
            <div className = "col-sm-4">
                <img className = "img-thumbnail w-25" src = "logo.png" alt ="Logo here" /> </div>
            <div className = "col-sm-8 mt-4"> 
                <h2> making world a better place..Houses to Homes</h2> 
            </div>
            
        </div>
    );
}
 
export default Header;