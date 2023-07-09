import Abhijeet from './download1.jpg'
import './App.css';

function App() {
  return (
    <div>
    <div className="container">
      <div className="div1">
        <img src={Abhijeet} className='Image'/>
      </div>
      <div className="div2">
        <h1>Faculty Incharge</h1>
        <h3>Prof. Abhijeet Raipurkar</h3>
        <h4>Assistant Professor, Department of Computer Science & Engineering</h4>
        <p>Total Experience in Years - Teaching : 13.0 / Industrial : 3.0 / Research : 0.0    Subject Specialization : Data Warehousing and Mining, Distributed Systems,Distributed Databases, Computer Architecture,System Programming,Software Engineering,Enterprise Resource and Planning. For Course related information:</p>
        <p></p>
      </div>
    </div>
    <div className="container">
    <div className="div2">
        <h1>President</h1>
        <h3>Ayush Shete</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
      </div>
      <div className="div1" style={{paddingLeft:'5rem'}}>
        <img src={Abhijeet} className='Image'/>
      </div>
    </div>
    <div className="container">
      <div className="div1">
        <img src={Abhijeet} className='Image'/>
      </div>
      <div className="div2">
        <h1>Vice-President</h1>
        <h3>Sunishka Malviya</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br/><br/><br/>
      </div>
    </div>

    

    </div>
    
  );
}

export default App;
