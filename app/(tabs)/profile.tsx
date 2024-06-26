// expo
import {Link} from 'expo-router';

// components
import {ThemedView} from '@/components/ThemedView';
import {ThemedText} from '@/components/ThemedText';
import Modal from "@/components/Modal";
import {useState} from "react";
import {Pressable} from "react-native";

const ProfileHome = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ThemedText>PROFILE HOME</ThemedText>

            {/*DEPENDING IF NEEDED - ThemedLink*/}
            <Pressable onPress={() => setIsOpen(true)}><ThemedText>Open</ThemedText></Pressable>
            <Modal isOpen={isOpen}>
                <ThemedView>
                    <Pressable onPress={() => setIsOpen(false)}><ThemedText>Close</ThemedText></Pressable>
                </ThemedView>
            </Modal>
        </ThemedView>
    );
}

export default ProfileHome