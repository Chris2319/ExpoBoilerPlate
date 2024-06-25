// components
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// react
import { KeyboardAvoidingView, Modal as RNModal, ModalProps, Platform, StyleSheet } from 'react-native';
import React from 'react';

type tModal = ModalProps & {
  isOpen: boolean;
  hasKeyboard?: boolean;
};

const Modal = ({ isOpen = false, hasKeyboard = false, children, ...props }: tModal) => {
  let content = <ThemedView style={styles.centeredView}>{children}</ThemedView>;
  if (hasKeyboard)
    content = (
      <KeyboardAvoidingView style={styles.centeredView} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {children}
      </KeyboardAvoidingView>
    );

  return (
    <RNModal
      visible={isOpen}
      //transparent={true}
      animationType={'slide'}
      statusBarTranslucent={true}
      style={styles.centeredView}
    >
      {content}
    </RNModal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

export default Modal;
