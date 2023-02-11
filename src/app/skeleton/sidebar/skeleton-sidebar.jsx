import React from 'react';

import SkeletonSidebarBlock from './skeleton-block';
import SkeletonPersonal from './skeleton-personal';

const SkeletonSidebar = ({className}) => (
  <div className={className}>
    <SkeletonPersonal/>
    <SkeletonSidebarBlock/>
  </div>
)
  
export default SkeletonSidebar
