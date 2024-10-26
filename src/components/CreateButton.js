import React, { useState, useEffect } from "react";

const CreateButton = ({ from, content }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (from && content) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [from, content]);

  const handleSubmit = () => {
    if (!isDisabled) {
      // 롤링페이퍼 생성 로직 및 페이지 이동
      const id = Math.random().toString(36).substr(2, 9); // 임시 id 생성
      window.location.href = `/post/${id}`;
    }
  };

  return (
    <button onClick={handleSubmit} disabled={isDisabled}>
      생성하기
    </button>
  );
};

export default CreateButton;
