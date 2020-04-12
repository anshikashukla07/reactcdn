'use strict'

const e = React.createElement;

class HelloWorld extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
				arrayOfUsers: [
					{
						name:'Bob',
						age: 20,
						username: "Bob20"
					},
					{
						name:'Alice',
						age: 23,
						username: "Alice23"
					},
					{
						name:'Frank',
						age: 30,
						username: "Frank30"
					},
					{
						name:'Sheldon',
						age: 30,
						username: "Sheldon30"
					},
					{
						name:'Bob',
						age: 20,
						username: "Bob20"
					},
					{
						name:'Howard',
						age: 27,
						username: "Howard27"
					},
					{
						name:'Bella',
						age: 18,
						username: "Bella18"
					},
					{
						name:'Raj',
						age: 25,
						username: "Raj25"
					},
					{
						name:'Abhijeet',
						age: 27,
						username: "Abhijeet27"
					}

			]
		}
	}

	render() {
	    const mystyle = {
	      color: "white",
	      backgroundColor: "DodgerBlue",
	      padding: "10px",
	      fontFamily: "Arial",
	      margin: "20px",
	      width: "200px",
	      float: "left"
    	};
		const users = this.state.arrayOfUsers.map((user,idx)=> {
			console.log(user)
			return (
				<div className="userInfo"  style={mystyle}>
		 			<b>Name</b>: {user.name} 
		 			<br/>
				 	<b>Age</b>: {user.age} 
		 			<br/>
				 	<b>Username</b>: {user.username}
				</div>
			)
		})
		return (
			<div>
				{users}
			</div>
		)
	}
}

const launch = document.getElementById("app");

ReactDOM.render(<HelloWorld/>, launch);