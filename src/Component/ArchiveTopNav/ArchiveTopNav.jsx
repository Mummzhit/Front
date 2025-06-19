import React from 'react';

// 1. 필요한 아이콘들을 react-icons 라이브러리에서 import 합니다.
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// 2. 이 컴포넌트에서 사용할 CSS를 위해 import 할 수 있습니다. (선택 사항)
// import './ArchiveTopNav.css'; 

// 3. 컴포넌트를 정의하고 export 합니다.
export default function ArchiveTopNav() {
  return (
    <header className="archive-top-nav">
      {/* 아이콘 컴포넌트를 직접 사용합니다. */}
      <HiOutlineMenu size="24" className="nav-icon" />
      <IoClose size="24" className="nav-icon" />
    </header>
  );
}