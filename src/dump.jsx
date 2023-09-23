  //   const [todos, setTodos] = useState([])
  //   // fetch all todos from server
  //   React.useEffect(() => {
  //     fetch("http://localhost:3000/todos").then((response) => {
  //       response.json().then((data) => {
  //         console.log(data);
  //         setTodos(data)
  //       })
  //     })
  //   })

  //   setInterval(() => {
  //     fetch("http://localhost:3000/todos").then((response) => {
  //       response.json().then((data) => {
  //         console.log(data);
  //         setTodos(data)
  //       })
  //     })
  //   }, 1000)

// {/* create todo */}
// <Typography style={{marginLeft : "500px", paddingTop : "10px"}}> <h1>Easy Todo App</h1> </Typography>
// <Card variant="outlined" style={{width: "300px", height: "240px", display:"flex", justifyContent:"center"}}>
//   <div style={{width: "300px", height: "240px", display:"flex"}}>
//     <br />
//     <h2>create todo</h2>
//     title : <input type="text" />
//     <br></br>
//     <br></br>
//     <br></br>
//     description : <input type="text" />
//     <Button variant="outlined">ADD</Button>
//   </div>
// </Card>
// {/* view all todo */}
// <h2>your todos hi these are your todo </h2>
// <Card variant="outlined" display="flex">

//   <div>
//     {
//       todos.map((eachTodo) => {
//         return  <Card variant="outlined"  style={{width: "300px", height: "240px"}}><div>
//           {eachTodo.title}
//           <br></br>
//           {eachTodo.description}
//           <br></br>
//           <Button variant="contained">Delete</Button>
//         </div> </Card>
//       })
//     }
//   </div>
// </Card>
// {/* delete todo  */}

    // const handleDelete = (id) =>{
    //     fetch("http://localhost:3000/todos/${id}",{ 
    //         method : "DELETE"
    //     }).then((response)=>{
    //         if(response.status === 200)
    //         {const updatedTodos =  todos.filter(todo => todo.id !== id);
    //        setTodos(updatedTodos);}
    //     })
    // } 

                                    //   onClick={() =>
                                //      handleDelete(eachTodo.id)
                                //   }