// expo
import { Link } from 'expo-router';

// components
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import Modal from '@/components/Modal';

// react
import { useState } from 'react';

// redux
import { Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import { SIsAuthenticated, SToken } from '@/store/slices/authSlice';

const ProfileHome = () => {
  // States
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Selectors
  const token = useSelector(SToken);

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedText>PROFILE HOME</ThemedText>
      <ThemedText>token: {token}</ThemedText>

      {/*DEPENDING IF NEEDED - ThemedLink*/}
      <Pressable onPress={() => setIsOpen(true)}><ThemedText>Open modal</ThemedText></Pressable>
      <Modal isOpen={isOpen}>
        <ThemedView>
          <Pressable onPress={() => setIsOpen(false)}><ThemedText>Close</ThemedText></Pressable>
        </ThemedView>
      </Modal>
    </ThemedView>
  );
};

export default ProfileHome;