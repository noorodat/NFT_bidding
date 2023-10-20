import React from 'react';
import Comments from './Ques';
import { useSelector } from 'react-redux';



const Activity_pages = () => {
  const userID = useSelector((state) => state.user.id);
  const userName = useSelector((state) => state.user.name);

  

  return (
    <div>
      
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId={userID}
        userName={userName}
        
      />
    </div>
  );
};

export default Activity_pages;
