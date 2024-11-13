// TODO: make styling consistent with rest of the app
// FIXME: replace image & fillers with dynamic data
// FIXME: migrate feather icons to phoshpor
// FIXME: apply gravatar icons as fallback instead of using gather wordmark
// FIXME: mailto deep link not functioning properly
// FIXME: drop shadow error--something related to improper calculations

import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';

import FeatherIcon from 'react-native-vector-icons/Feather';
import EmailAuthProvider from '@/services/auth/email';

export default function Settings() {
  const router = useRouter();
  const emailAuthProvider = EmailAuthProvider();

  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={[styles.section, { paddingTop: 4 }]}>
            <Text style={styles.sectionTitle}>Profile</Text>

            <View style={styles.sectionBody}>
              <TouchableOpacity
                onPress={() => {
                  router.navigate("/(protected)/(modals)/profile");
                }}
                style={styles.profile}>
                <Image source={require("@/assets/icons/main/icon.png")} style={styles.profileAvatar} />
                <View style={styles.profileBody}>
                  <Text style={styles.profileName}>John Doe</Text>

                  <Text style={styles.profileHandle}>john@example.com</Text>
                </View>

                <FeatherIcon
                  color="#bcbcbc"
                  name="chevron-right"
                  size={24} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>

            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <View style={styles.row}>
                  <Text style={styles.rowLabel}>Location</Text>

                  <View style={styles.rowSpacer} />

                  <Text style={styles.rowValue}>Richardson, TX</Text>
                </View>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    router.navigate("/(protected)/(modals)/appearance");
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Appearance</Text>

                  <View style={styles.rowSpacer} />

                  <FeatherIcon
                      color="#bcbcbc"
                      name="chevron-right"
                      size={20} />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    router.navigate("(protected)/(modals)/integrations"); 
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Integrations</Text>

                  <View style={styles.rowSpacer} />

                  <FeatherIcon
                    color="#bcbcbc"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View> 

              <View style={[styles.rowWrapper, styles.rowLast]}>
              <TouchableOpacity
                  onPress={() => {
                    router.navigate("/(protected)/(modals)/notifications");
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Notifications</Text>

                  <View style={styles.rowSpacer} />

                  <FeatherIcon
                      color="#bcbcbc"
                      name="chevron-right"
                      size={20} />
                </TouchableOpacity> 
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Resources</Text>

            <View style={styles.sectionBody}>
              <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                  onPress={() => Linking.openURL('mailto:gather.connect.mobile@gmail.com')}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Contact Us</Text>

                  <View style={styles.rowSpacer} />

                  <FeatherIcon
                    color="#bcbcbc"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Report a Bug</Text>

                  <View style={styles.rowSpacer} />

                  <FeatherIcon
                    color="#bcbcbc"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>

              <View style={styles.rowWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Give Us a Rating</Text>

                  <View style={styles.rowSpacer} />

                  <FeatherIcon
                    color="#bcbcbc"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>

              <View style={[styles.rowWrapper, styles.rowLast]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                  style={styles.row}>
                  <Text style={styles.rowLabel}>Privacy Policy</Text>

                  <View style={styles.rowSpacer} />

                  <FeatherIcon
                    color="#bcbcbc"
                    name="chevron-right"
                    size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionBody}>
              <View
                style={[
                  styles.rowWrapper,
                  styles.rowFirst,
                  styles.rowLast,
                  { alignItems: 'center' },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    emailAuthProvider.handleSignOut();
                  }}
                  style={styles.row}>
                  <Text style={[styles.rowLabel, styles.rowLabelLogout]}>
                    Log Out
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.contentFooter}>Version 0.0.1</Text>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#000',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 16,
  },
  contentFooter: {
    marginTop: 24,
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: '#a69f9f',
  },
  section: {
    paddingVertical: 12,
  },
  sectionTitle: {
    margin: 8,
    marginLeft: 12,
    fontSize: 13,
    letterSpacing: 0.33,
    fontWeight: '500',
    color: '#a69f9f',
    textTransform: 'uppercase',
  },
  sectionBody: {
    borderRadius: 12,
    elevation: 2,
  },
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileBody: {
    marginRight: 'auto',
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  /** Row */
  row: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 12,
  },
  rowWrapper: {
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  rowLabel: {
    fontSize: 16,
    letterSpacing: 0.24,
    color: '#000',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ababab',
    marginRight: 4,
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  rowLabelLogout: {
    width: '100%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#dc2626',
  },
});
