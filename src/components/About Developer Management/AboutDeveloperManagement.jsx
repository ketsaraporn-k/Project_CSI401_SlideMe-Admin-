import "./AboutDeveloperManagement.css"
import dev1 from "../../imgs/nopparat.png"
import dev2 from "../../imgs/ketsaraporn.png"
import dev3 from "../../imgs/thanabordee.png"
import dev4 from "../../imgs/thanapoom.jpg"



function AboutDeveloperManagement() {
    return (
        <div className="AboutDeveloperManagement-container">
      <h1>Introduce Myself</h1>

      <div className="dev-content-container">
        <div className="img-container">
          <div>
          <img src={dev1} alt="Developer 1" className="developer-img"/>
          <p>Name: Nopparat Suwanna </p>
          <p>Major: Computer Science</p>
          <p>ID : 66068773</p>
          </div>
          <div>
          <img src={dev2} alt="Developer 2" className="developer-img"/>
          <p>Name: Ketsaraporn Yaibua </p>
          <p>Major: Computer Science</p>
          <p>ID : 67183473 </p>
          </div>
          <div>
          <img src={dev3} alt="Developer 3" className="developer-img"/>
          <p>Name: Thanabodee Homneuy </p>
          <p>Major: Computer Science</p>
          <p>ID : 66071703</p>
          </div>
          <div>
          <img src={dev4} alt="Developer 4" className="developer-img"/>
          <p>Name: Thanaphum Witthanakornkul </p>
          <p>Major: Computer Science</p>
          <p>ID : 66068660</p>
          </div>
          <div>
          <img  alt="" className="developer-img"/>
          <p>Name: Phiraphat Phimtha </p>
          <p>Major: Computer Science</p>
          <p>ID : 66059914</p>
          </div>
        </div>
      </div>
    </div>
      );
}

export default AboutDeveloperManagement;