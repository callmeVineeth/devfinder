import React, { Component } from "react";
import { ImLocation2 } from 'react-icons/im';
import { SiLinkedin } from 'react-icons/si';
import { BsLink45Deg,BsTwitter} from 'react-icons/bs';
// import darkImg from './Images/dark-theme.jpg';
//import lightImg from './Images/beige-paintbrush-stroke-textured-background.jpg'

export class Devfinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  onSearch(searchText) {
    const { onSearch } = this.props;
    onSearch(searchText);
  }

  render() {
    const {
      imgUrl,
      DevName,
      joined,
      repoLink,
      backgroundColor,
      username,
      followers,
      following,
      repos,profile,
      location,
      twitter,
    } = this.props;
    return (
      <div className="w-full h-screen  flex items-center flex-col font-semibold " >

                                      {/* body section  below */}


        <div className={` bg- z-10 w-11/12 h-auto ${backgroundColor} border-2 shadow-xl rounded-2xl flex flex-col md:w-8/12 `} >
          <div className=" h-72 m-1 flex flex-col items-center justify-around  md:flex-row  md:h-32">
           
              <div className=" flex items-center justify-center rounded-full h-40 w-40  bg-slate-400  md:h-32 md:w-32">
                <img src={imgUrl}  alt='bio_image' ></img>
                 </div>
                 <div>
                  <h1 className=" font-extrabold text-2xl tracking-widest">{DevName}</h1><br/>
                  <span className=" text-opacity-20">Username: <b> {username} </b> </span> <br/>
                  <span className=" text-opacity-20"> Joining Data: <b> {joined} </b> </span>
                 </div>
              </div>     

          <div className=" h-20 m-1  z-10 flex justify-center items-center">
            <p>
            {profile}
            </p>
            </div>   
          <div className=" mt-20 md:mt-0 bg-slate-200  text-black border-2  rounded-2xl h-24 ml-6 mr-6 flex flex-row justify-evenly">
            <span className=" flex flex-col justify-center items-center"> <span>   </span> <br/>Repos <span className=" text-4xl">{repos}           </span> </span>
            <span className=" flex flex-col justify-center items-center"> <span>  </span> <br/> Followers<span className=" text-4xl"> {followers}    </span> </span>
            <span className=" flex flex-col justify-center items-center"> <span>  </span> <br/> Followings <span className=" text-4xl"> {following}    </span>  </span>
          </div>

  <div className=" h-42 m-1 flex flex-col items-start p-4 md:flex-row md:justify-around">
    <div className="flex flex-col items-start">
        <p>
          <ImLocation2 className="inline-block"/> &nbsp;&nbsp; {location}
          </p>
        <p>
          <BsTwitter className="inline-block"/> &nbsp;&nbsp; {twitter}
        </p>
    </div>   
    <div className="flex flex-col items-start"> 
        <p>
          <BsLink45Deg className="inline-block"/> &nbsp;&nbsp; {repoLink}
        </p>
        <p>
          <SiLinkedin className="inline-block"/> &nbsp;&nbsp; not available
        </p>
    </div>
</div>

        </div>


      </div>
    );
  }
}

export default Devfinder;
