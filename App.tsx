import { CustomBiometrics } from 'biometric-module';
import React from 'react';
 import {
 
  StyleSheet,
  Text,
  TouchableOpacity,
   View,
} from 'react-native';
import OTPVerification from './component/OTPVerification';

 
// import ReactNativeBiometrics from 'react-native-biometrics'

// const rnBiometrics = new ReactNativeBiometrics()
 

function App(): React.JSX.Element {
 

  return (
    // <View style={styles.container}>
    //   <View style={styles.content}>
    //     <Text style={styles.title}>Sensor Available</Text>
    //     <TouchableOpacity
    //       activeOpacity={0.7}
    //       style={[styles.button, { margin: 10 }]}
    //       onPress={async() => {
    //         CustomBiometrics.isSensorAvailable()
    //           .then(response => console.log('this is iiiiiii', response))
    //           .catch(error => console.error(error))
            
    //       }}
    //     >
    //       <Text style={styles.buttonText}>Check</Text>
    //     </TouchableOpacity>
    //     <Text style={styles.title}>Prompt</Text>
    //     <TouchableOpacity
    //       activeOpacity={0.7}
    //       style={[styles.button, { margin: 10 }]}
    //       onPress={() => {
    //         CustomBiometrics.simplePrompt({
    //           promptMessage: 'Verify your fingerprints',
    //           allowDeviceCredentials: true,
    //           fallbackPromptMessage: 'Use device passcode',
    //           cancelButtonText: 'Cancel'
    //         }).then(response => console.log(response)).catch(error => console.log(error));

    //       }}
    //     >
    //       <Text style={styles.buttonText}>Check</Text>
    //     </TouchableOpacity>
    //     <Text style={styles.title}>Direct Auth</Text>
    //     <TouchableOpacity
    //       activeOpacity={0.7}
    //       style={[styles.button, { margin: 10 }]}
    //       onPress={() => {
    //         CustomBiometrics.authenticate()
    //           .then(response => {
    //             console.log('Authentication Res:', response)
    //             if (response?.success == false) {
    //               // CustomBiometrics.cancelAuthentication();
    //             }
    //           })
    //           .catch(error => {
    //             console.error('Authentication Failed:', error)
    //           })
    //       }}
    //     >
    //       <Text style={styles.buttonText}>Check</Text>
    //     </TouchableOpacity>
    //     <Text style={styles.title}>Biometric Type</Text>
    //     <TouchableOpacity
    //       activeOpacity={0.7}
    //       style={[styles.button, { margin: 10 }]}
    //       onPress={() => {
    //         CustomBiometrics.getBiometricType()
    //           .then(type => {
    //             console.log('Biometric Type:', type)
    //           })
    //           .catch(error => {
    //             console.error('Error:', error)
    //           })
    //       }}
    //     >
    //       <Text style={styles.buttonText}>Check</Text>
    //     </TouchableOpacity>
       
    //   </View>
    // </View>
    <View style={{flex:1}}>
      <OTPVerification />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    marginVertical: 20
  },
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;