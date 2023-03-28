import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import { FilesRowProps } from './types';
import IssueIcon from '../../icons/issue.svg';
import Actioncon from '../../icons/actions.svg';
import NoteIcon from '../../icons/note.svg';

export const FilesRow: React.FC<FilesRowProps> = ({
  issueCount,
  actionsCount,
  notesCount,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.rowItem}>
        <IssueIcon />
        <Text>Issues ({issueCount ? issueCount : '0'})</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowItem}>
        <Actioncon />
        <Text>Actions ({actionsCount ? actionsCount : '0'})</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rowItem}>
        <NoteIcon />
        <Text>Notes ({notesCount ? notesCount : '0'})</Text>
      </TouchableOpacity>
    </View>
  );
};
