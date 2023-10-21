// import React from "react";
// import Comments from "./Ques";
// import Sidebar from "./Sidebar";
// import { Container, Col, Row } from "reactstrap";
// import { useSelector } from "react-redux";

// const Activity_pages = () => {
//   // const userID = useSelector((state) => state.user.id);
//   // const userName = useSelector((state) => state.user.name);

//   return (
//     <React.Fragment>
//       <Container>
//         <Row>
//           <Col lg={8} >
//             <Comments
//               commentsUrl="http://localhost:3004/comments"
//               // currentUserId={userID}
//               // userName={userName}
//               userName="sara"
//               currentUserId="1"
//               // sara
//             />
//           </Col>
//           <Col lg={4}>
//             <Sidebar />
//           </Col>
//         </Row>
//       </Container>
//     </React.Fragment>
//   );
// };

// export default Activity_pages;



import React from "react";
import Comments from "./Ques";
import Sidebar from "./Sidebar";
import { Container, Col, Row } from "reactstrap";
import { useSelector } from "react-redux";

const Activity_pages = () => {
  

  const userID = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.user.name);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col lg={8}>
            <Comments
              commentsUrl="http://localhost:3004/comments"
      
          
              currentUserId={userID}
              userName={userName}
              // userName="sara"
              // currentUserId="1"
              // sara
            />
          </Col>
          <Col lg={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Activity_pages;

