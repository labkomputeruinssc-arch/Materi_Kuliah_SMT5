// Langkah 1 Import Core Components dan Library
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaViewBase,
  StyleSheet,
  Platform
} from 'react-native';

const PROFILE = {
  name: 'Mohamad Firdaus',
  title: 'Full-Stack Mobile Developer',
  email: 'mohamadfirdaus@uinssc.ac.id',
  phone: '0821-7073-5116',
  location: 'Cirebon, West Java',
  bio: 'Pengembang aplikasi mobile berpengalaman 4 tahun yang berfokus di React Native dan Flutter',
  avatar: 'https://lh5.googleusercontent.com/-mwBhriW4lBQ/AAAAAAAAAAI/AAAAAAAAAAA/Phl4QV1LsdY/s64-c-mo/photo.jpg',
  avatarOffline: 'assets/foto.png'
};

const SKILLSS = [
  { id: '1', name: 'React Native', level: 90, color: '#61DAFB' },
  { id: '2', name: 'Flutter', level: 75, color: '#02569C' },
  { id: '3', name: 'Javascript', level: 88, color: '#F7DF1E' },
  { id: '4', name: 'Typescript', level: 80, color: '#3178C6' },
  { id: '5', name: 'Node JS', level: 70, color: '#339933' },
  { id: '6', name: 'Firebase', level: 82, color: '#FFCA28' },
  { id: '7', name: 'Tailwind CSS', level: 95, color: '#06B6D4' },
];

const SECTIONS = [
  {
    title: '💼 Pengalaman Kerja',
    data: [
      {
        id: 'e1',
        role: 'Senior Mobile Developer',
        company: 'PT. Tech Solutions',
        period: 'Januari 2022-Sekarang',
        desc: 'Mengembangkan dan memelihara aplikasi mobile menggunakan React Native dan Flutter'
      },
      {
        id: 'e2',
        role: 'Mobile Developer',
        company: 'PT. Inovasi Digital',
        period: 'Januari 2022-Sekarang',
        desc: 'Mengembangkan dan memelihara aplikasi mobile menggunakan React Native dan Flutter'
      },
    ],
  },
  {
    title: "🎓 Pendidikan",
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024-2029',
        desc: 'IPK 3.75 / 4.00 | Skripsi: Implementasi Machine Learning pada Applikasi Mobile'
      }
    ]
  }
];

const SOCIAL = [
  { id: 's1', label: 'Github', icon: '🎖️', url: 'https://github.com/labkomputeruinssc-arch' },
  { id: 's2', label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/mohamadfirdaus-/' },
  { id: 's3', label: 'Youtube', icon: '📹', url: 'https://www.youtube.com/@amohfi' },
]


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama Lengkap: Mohamad Firdaus</Text>
      <Text>Tempat Tanggal Lahir: Tangerang, 04 April 2005</Text>
      <Text>Cita-Cita: Menjadi Digital Marketer yang sukses</Text>
      <Text>Nama Lengkap: Mohamad Firdaus</Text>
      <Text>Tempat Tanggal Lahir: Tangerang, 04 April 2005</Text>
      <Text>Cita-Cita: Menjadi Digital Marketer yang sukses</Text>
      <Text>Nama Lengkap: Mohamad Firdaus</Text>
      <Text>Tempat Tanggal Lahir: Tangerang, 04 April 2005</Text>
      <Text>Cita-Cita: Menjadi Digital Marketer yang sukses</Text>
      <Text>Nama Lengkap: Mohamad Firdaus</Text>
      <Text>Tempat Tanggal Lahir: Tangerang, 04 April 2005</Text>
      <Text>Cita-Cita: Menjadi Digital Marketer yang sukses</Text>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
