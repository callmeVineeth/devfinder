import React, { Component } from 'react'
import Devfinder from './Dev';
import cat from './Images/blackCat.png'
import { MdLightMode, MdDarkMode } from "react-icons/md";

export class Sample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {},
            searchValue: '',
            imgUrl: './Images/blackCat.png',
            mode: 'Light',
            modeImg:<MdLightMode/>,
            themeClass :'bg-gradient-to-br from-blue-400 to-purple-200',
            bodyTheme: ' bg-gradient-to-tr from-blue-300 to-white',
            textMode:'text-black'
        }
    }

    fetchData = async () => {
        const { searchValue } = this.state;
         const url = `https://api.github.com/users/${searchValue}`;
        console.log(url);

        try {
            const response = await fetch(url);
            if (response.ok) {
                const userData = await response.json();
                this.setState({ userData,
                    imgUrl: userData.avatar_url, });
                console.log(userData);
            } else {
                console.error('An error occurred while fetching data');
            }
        } catch (error) {
            console.error('An error occurred while fetching data', error);
        }
    }

    handleSearch = (e) => {
        this.setState({ searchValue: e.target.value });
        console.log('search entered' + e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.fetchData();
        console.log(this.state.searchValue);
    }
    clearSearch = () => {
      this.setState({
          searchValue: '',  // Clear the search input
          userData: {},
          imgUrl:''   // Set userData to null to clear it
      });
      console.log('clearSearch called')
  }
  
  changeMode=()=>{
    const newMode= this.state.mode==='Light'? 'Dark': 'Light'
    const newModeImg= this.state.mode==='Light'? <MdDarkMode/>: <MdLightMode/>;
    const newThemeClass = this.state.mode === 'Dark' ? 'bg-gradient-to-br from-blue-400 to-purple-200' : 'bg-gradient-to-br from-blue-900 to-emerald-600';
    const newbodyTheme = this.state.mode === 'Dark' ? ' bg-gradient-to-tr from-blue-300 to-white' : ' bg-gradient-to-tr from-sky-900 to-blue-600';
    const newTextMode = this.state.mode === 'Dark' ? 'text-black' : 'text-white';
console.log('mode clicked')
this.setState({
    mode: newMode,
    modeImg: newModeImg,
    themeClass: newThemeClass,
    textMode: newTextMode,
    bodyTheme: newbodyTheme
})
  }
    
    render() {
        const { userData, searchValue } = this.state;
       

        return (
            <div className={`${this.state.themeClass} ${this.state.textMode} flex transition duration-2000 justify-center items-center flex-col w-full `}>
<nav className=' w-10/12 flex flex-col gap-10'>
    <span className=' tracking-wider font-extrabold  text-4xl h-10 m-2  bg-gradient-to-br from-red-500 to-purple-600 text-transparent bg-clip-text '>devfinder.com</span>
   <span className=' pr-4 flex flex-row md:pr-40 justify-end '>
    <span className=' font-bold tracking-widest flex justify-end p-2 '> {this.state.mode}  </span>
    <span className=' text-3xl' onClick={this.changeMode}>{this.state.modeImg} </span>
   </span>
</nav>

            
                <form onSubmit={this.handleSubmit} className={` w-11/12 ${this.state.bodyTheme} border-2 shadow-lg  rounded-lg m-2 md:w-8/12 p-1`} >
                    <input className=' bg-orange-50 rounded-xl h-10 w-8/12 md:h-14  md:w-3/4 
                      placeholder:pl-10 text-black' type='text' placeholder='Search here' value={searchValue} onChange={this.handleSearch}></input>
                    <button className='p-2  bg-gradient-to-br from-purple-900 to-red-300  m-1 lg:p-4 rounded-xl' type='submit'>Search</button>
                    <button className='p-2  bg-gradient-to-br from-purple-600 to-red-300  m-1 lg:p-4 rounded-xl' onClick={this.clearSearch}>Clear</button>
                </form>
                <Devfinder
    backgroundColor={this.state.bodyTheme}
    username={userData.login || 'Username not available'}
    DevName={userData.name || 'Name not available'}
    joined={userData.created_at || 'Joining date not available'}
    profile={userData.bio || 'Bio not available'}
    repos={userData.public_repos || '0'}
    followers={userData.followers || '0'}
    following={userData.following || '0'}
    location={userData.location || 'Location not available'}
    imgUrl={userData.avatar_url || require('./Images/blackCat.png')}
    repoLink={userData.html_url || 'Loading...'}
    twitter={userData.twitter_username || 'Twitter not available'}
  /> 
            </div>
        )
    }
}

export default Sample;
