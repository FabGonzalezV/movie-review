// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// const Login = (props) => {
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");

//   const onChangeName = (e) => {
//     const name = e.target.value;
//     setName(name);
//   };
//   const onChangeId = (e) => {
//     const id = e.target.value;
//     setId(id);
//   };
//   const login = (e) => {
//     e.preventDefault();
//     props.login({ name: name, id: id });
//     props.history.push("/");
//   };
//   return (
//     <div>
//       <Form>
//         <Form.Group>
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter username"
//             value={name}
//             onChange={onChangeName}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>ID</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter id"
//             value={id}
//             onChange={onChangeId}
//           />
//         </Form.Group>
//         <Button
//           variant="primary"
//           onClick={(e) => {
//             login(e);
//           }}
//         >
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };
// export default Login;
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = ({ login, navigate }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ name, id });
    navigate("/");
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={name}
            onChange={handleChange}
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter id"
            value={id}
            onChange={handleChange}
            name="id"
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
