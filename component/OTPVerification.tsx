import React, { useState, useEffect, useCallback } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ToastAndroid,
  Image,
} from 'react-native';
import { OTPWidget } from '@msg91comm/sendotp-react-native';
const { height, width } = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const OTPVerification: () => Node = () => {
  const OTPRetryModes = {
    SMS: '11',
    VOICE: '4',
    EMAIL: '3',
    WHATSAPP: '12',
  };
  const [typeTest, setTypeTest] = useState(0)
  const [reqId, setReqId] = useState('')
  const [showOtp, setShowOtp] = useState(false);
  const [widgetData, setWidgetData] = useState({})
  const [allowedRetry, setAllowedRetry] = useState([])
  const [verified, setVerified] = useState(false)
  const [canResendOtp, setCanResendOtp] = useState < boolean > (false);
  const widgetId = "326b6b6c7330313734343537";
  const tokenAuth = "278060TX9AIhxEpR7H6427de5cP1";
  useEffect(() => {
    OTPWidget.initializeWidget(widgetId, tokenAuth).then(() => {
      getWidgetProcess();
    });
  }, [])
  const getWidgetProcess = async () => {
    const processData = await OTPWidget.getWidgetProcess();
    console.log('processData', JSON.stringify(processData));
    let allowedRetry = [];
    if (processData?.status == 'success') {
      processData?.data?.processes?.forEach((e) => {
        if (e.processVia?.value === '5') {
          Object.entries(OTPRetryModes).forEach(([key, value], index) => {
            if (value == e.channel?.value) {
              allowedRetry.push(key)
            }
          });
        }
      })
      console.log('processDataprocessData', allowedRetry)
      setWidgetData(processData?.data);
      setAllowedRetry(allowedRetry)
    }
  }
  const reset = () => {
    setTypeTest(0)
    setReqId('')
    setShowOtp(false)
    setCanResendOtp(false)
    setVerified(false)
  }
  const Timer = ({ retryLimitTime, onTimerEnd }) => {
    const [timer, setTimer] = useState(retryLimitTime);
    const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
    useEffect(() => {
      timer > 0 && setTimeout(timeOutCallback, 1000);
      if (timer == 0) onTimerEnd();
    }, [timer, timeOutCallback]);
    const resetTimer = function () {
      if (!timer) {
        setTimer(15);
      }
    };
    return (
      <Text>
        Didn't receive the OTP? retry in {timer}s
      </Text>
    )
  }
  const VerfifiedComponent = () => {
    return (
      <View>
        <FastImage
                      style={{ alignSelf: 'center',height:150,width:150  }}
                      source={{
                        uri: 'https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png',
                        priority: FastImage.priority.high,
                      }}
                      onError={()=>{
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
        <Text style={[styles.text,{alignSelf:'center',fontWeight:'bold'}]} >
           Verified
        </Text>
      </View>
    )
  }
  const TypeContent = () => {
    return (
      <View>
        {(widgetData?.processType?.value == 2 || widgetData?.processType?.value == 1) && <TouchableOpacity
          onPress={async () => {
            setTypeTest(1)
          }}
          style={styles.button} >
          <Text style={styles.textWhite} >
            Test with Mobile Number
          </Text>
        </TouchableOpacity>}
        {(widgetData?.processType?.value == 3 || widgetData?.processType?.value == 1) && <TouchableOpacity
          onPress={() => {
            setTypeTest(2)
          }}
          style={styles.button} >
          <Text style={styles.textWhite} >
            Test with Email
          </Text>
        </TouchableOpacity>}
      </View>
    )
  }
  const NumberVerification = () => {
    const [number, setNumber] = useState('')
    const [otp, setOtp] = useState('')
    return (
      <View style={{}} >
        {showOtp ?
          <View>
            <TextInput
              value={otp}
              onChangeText={(text) => {
                setOtp(text)
              }}
              keyboardType='numeric'
              placeholder='Enter OTP'
              style={{ backgroundColor: '#ededed', margin: 10, borderRadius: 8 }}
            />
            <TouchableOpacity
              onPress={async () => {
                const body = {
                  reqId: reqId,
                  otp: otp
                }
                const response = await OTPWidget.verifyOTP(body)
                console.log('response===', response)
                if (response?.type == 'success') {
                  // reset()
                  setVerified(true)
                  ToastAndroid.show('Number verified', ToastAndroid.LONG);
                }else{
                  ToastAndroid.show(response?.message ?? 'Number verified', ToastAndroid.LONG);
                }
              }}
              style={styles.button} >
              <Text style={styles.textWhite} >Verify</Text>
            </TouchableOpacity>
            {canResendOtp ?
              <View>
                {allowedRetry.includes('SMS') &&
                  <TouchableOpacity
                    onPress={async () => {
                      const body = {
                        reqId: reqId,
                        retryChannel: 11
                      }
                      const response = await OTPWidget.retryOTP(body)
                      console.log('response===', response)
                      if (response?.type == 'success') {
                        setReqId(response?.message);
                        ToastAndroid.show('Retry otp sent', ToastAndroid.LONG);
                      }
                    }}
                    style={styles.button} >
                    <Text style={styles.textWhite} >Retry sms</Text>
                  </TouchableOpacity>
                }
                {allowedRetry.includes('WHATSAPP') &&
                  <TouchableOpacity
                    onPress={async () => {
                      const body = {
                        reqId: reqId,
                        retryChannel: 12
                      }
                      const response = await OTPWidget.retryOTP(body)
                      console.log('response===', response)
                      if (response?.type == 'success') {
                        setReqId(response?.message);
                        ToastAndroid.show('Retry OTP sent via Whatsapp', ToastAndroid.LONG);
                      }
                    }}
                    style={styles.button} >
                    <Text style={styles.textWhite} >Retry Whatsapp</Text>
                  </TouchableOpacity>
                }
                {allowedRetry.includes('VOICE') &&
                  <TouchableOpacity
                    onPress={async () => {
                      const body = {
                        reqId: reqId,
                        retryChannel: 4
                      }
                      const response = await OTPWidget.retryOTP(body)
                      console.log('response===', response)
                      if (response?.type == 'success') {
                        setReqId(response?.message);
                        ToastAndroid.show('Retry OTP sent via Call', ToastAndroid.LONG);
                      }
                    }}
                    style={styles.button} >
                    <Text style={styles.textWhite} >Retry via Call</Text>
                  </TouchableOpacity>
                }
              </View>
              :
              <Text style={[styles.text, { marginVertical: 5 }]}>
                <Timer retryLimitTime={widgetData.retryTime} onTimerEnd={() => setCanResendOtp(true)} />
              </Text>
            }
          </View>
          :
          <View>
            <TextInput
              placeholder='Number with Country Code'
              value={number}
              keyboardType='numeric'
              style={{ backgroundColor: '#ededed', margin: 10, borderRadius: 8 }}
              onChangeText={(text) => {
                setNumber(text)
              }}
            />
            <TouchableOpacity
              onPress={async () => {
                const body = {
                  identifier: '918889500190'
                }
                // ToastAndroid.show('Processing', ToastAndroid.LONG)
                try {
                const response = await OTPWidget.sendOTP(body);
                console.log('response---', response)
                if (response?.type == 'success') {
                  if (response?.hasOwnProperty('access-token')) {
                    // reset()
                    setVerified(true)
                    // ToastAndroid.show('Number verified', ToastAndroid.LONG)
                  } else {
                    // ToastAndroid.show('OTP sent', ToastAndroid.SHORT);
                    setReqId(response?.message);
                    setShowOtp(true);
                    setCanResendOtp(false);
                  }
                }
                }
                catch (e) {
                  console.log(e)
                  // ToastAndroid.show('Processing', ToastAndroid.LONG)
                }
              }}
              style={styles.button}>
              <Text style={styles.textWhite} >
                Send OTP
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
  const EmailVerification = () => {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    return (
      <View style={{}} >
        {showOtp ?
          <View>
            <TextInput
              value={otp}
              onChangeText={(text) => {
                setOtp(text)
              }}
              keyboardType='numeric'
              placeholder='Enter OTP'
              style={{ backgroundColor: '#ededed', margin: 10, borderRadius: 8 }}
            />
            <TouchableOpacity
              onPress={async () => {
                try{
                  const body = {
                    reqId: reqId,
                    otp: otp
                  }
                  const response = await OTPWidget.verifyOTP(body)
                  console.log('response===---', response)
                  if (response?.type == 'success') {
                    // reset()
                    setVerified(true)
                    ToastAndroid.show('OTP Verified', ToastAndroid.LONG);
                  } else if (response?.type == 'error') {
                    console.log('afsldfgu')
                    ToastAndroid.show(response?.message ?? 'Failed', ToastAndroid.LONG);
                  }
                }catch(e){
                }
               
              }}
              style={styles.button} >
              <Text style={styles.textWhite} >Verify</Text>
            </TouchableOpacity>
            {canResendOtp ?
              <TouchableOpacity
                onPress={async () => {
                  const body = {
                    reqId: reqId,
                  }
                  const response = await OTPWidget.retryOTP(body)
                  console.log('response===', response)
                  if (response?.type == 'success') {
                    setReqId(response?.message);
                    setCanResendOtp(false);
                    ToastAndroid.show('Retry otp sent', ToastAndroid.LONG);
                  }
                }}
                style={styles.button} >
                <Text style={styles.textWhite} >Retry</Text>
              </TouchableOpacity>
              : <Text style={[styles.text, { marginVertical: 5 }]}>
                <Timer retryLimitTime={widgetData.retryTime} onTimerEnd={() => setCanResendOtp(true)} />
              </Text>
            }
          </View>
          :
          <View>
            <TextInput
              placeholder='Email'
              value={email}
              keyboardType='email-address'
              style={{ backgroundColor: '#ededed', margin: 10, borderRadius: 8 }}
              onChangeText={(text) => {
                setEmail(text)
              }}
            />
            <TouchableOpacity
              onPress={async () => {
                const body = {
                  identifier: email
                }
                ToastAndroid.show('Processing', ToastAndroid.LONG)
                const response = await OTPWidget.sendOTP(body);
                console.log('response---', response)
                if (response?.type == 'success') {
                  ToastAndroid.show('OTP sent', ToastAndroid.SHORT);
                  setReqId(response?.message);
                  setShowOtp(true);
                }
              }}
              style={styles.button}>
              <Text style={styles.textWhite} >
                Send OTP
              </Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
  const DynamicWidget = () => {
    const [wid, setWidgetId] = useState('')
    const [tkn, setToken] = useState('')
    return (
      <View>
        <TextInput
          value={wid}
          onChangeText={(text) => {
            setWidgetId(text)
          }}
          placeholder='Enter Widget Id'
        />
        <TextInput
          value={tkn}
          onChangeText={(text) => {
            setToken(text)
          }}
          placeholder='Enter Token'
        />
        <TouchableOpacity onPress={() => {
          OTPWidget.initializeWidget(wid, tkn).then(() => {
            getWidgetProcess();
          }).then(() => {
            setTypeTest(0);
            ToastAndroid.show('Initializing', ToastAndroid.SHORT);
          });
        }} style={[styles.button]}>
          <Text>Initialize</Text>
        </TouchableOpacity>
      </View>
    )
  }
  console.log('Re-rendered')
  return (
    <SafeAreaView style={styles.container}>
      {
        verified ? (<>
          <VerfifiedComponent />
        </>) : (
          <>
            {typeTest == 0 && <TypeContent />}
            {typeTest == 1 && <NumberVerification />}
            {typeTest == 2 && <EmailVerification />}
            {typeTest == 3 && <DynamicWidget />}
          </>
        )
      }
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', bottom: 10 }} >
        {/* <TouchableOpacity onPress={() => {
          reset()
        }} style={[styles.button]}>
          <Text style={styles.textWhite} >Reset</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    margin: 14
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    borderRadius: 50,
    padding: 15,
    backgroundColor: 'red',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  textWhite: {
    color: '#6C63FF'
  }
});
export default OTPVerification;