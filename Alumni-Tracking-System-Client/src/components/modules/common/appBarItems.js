import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import { commonListItems } from './appBarCommonListItems'; 
import { studentListItems } from './appBarStudentListItems';
import { facultyListItems } from './appBarFacultyListItems';
import { isUserFaculty, isUserStudent } from '../../../utils/roleUtils';


const AppBarItems = () => {

  return (
    <List component="nav">
      {commonListItems}
      <Divider sx={{ my: 1 }} />
      {
        isUserStudent() && studentListItems
      }
      {
        isUserFaculty() && facultyListItems
      }
    </List>
  );
}

export default AppBarItems;