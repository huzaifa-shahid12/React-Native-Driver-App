// import React, { useState } from "react";
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Image,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from "react-native";
// import { driverSignup } from "../config/fireBase";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// export default function SignUp({ navigation }) {
//   const [name, setName] = useState("");
//   // const [userType, setUserType] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const navigator = navigation.navigate;

//   const signUp = async () => {
//     if (!name || !email || !password || !confirmPassword) {
//       return alert("Fill all Please");
//     } else if (password != confirmPassword) {
//       return alert("Password dosn't match");
//     } else {
//       await driverSignup({ name, email, password }, navigator);
//     }
//   };

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
//       <View style={styles.container}>
//         <KeyboardAwareScrollView>
//           <View style={styles.header}>
//             <Text style={styles.title}>
//               Sign in to <Text style={{ color: "#075eec" }}>MyApp</Text>
//             </Text>

//             <Text style={styles.subtitle}>
//               Get access to your portfolio and more
//             </Text>
//           </View>

//           <View style={styles.form}>
//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>Your Name</Text>

//               <TextInput
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 keyboardType="email-address"
//                 // onChangeText={(email) => setForm({ ...form, email })}
//                 placeholder="john"
//                 placeholderTextColor="#6b7280"
//                 style={styles.inputControl}
//                 // value={form.email}
//                 onChangeText={(text) => setName(text)}
//                 value={name}
//               />
//             </View>

//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>Email address</Text>
//               <TextInput
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 keyboardType="email-address"
//                 // onChangeText={(email) => setForm({ ...form, email })}
//                 placeholder="john@example.com"
//                 placeholderTextColor="#6b7280"
//                 style={styles.inputControl}
//                 // value={form.email}
//                 onChangeText={(text) => setEmail(text)}
//                 value={email}
//               />
//             </View>

//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>Password</Text>

//               <TextInput
//                 autoCorrect={false}
//                 onChangeText={(text) => setPassword(text)}
//                 value={password}
//                 // onChangeText={(password) => setForm({ ...form, password })}
//                 placeholder="********"
//                 placeholderTextColor="#6b7280"
//                 style={styles.inputControl}
//                 secureTextEntry={true}
//               />
//             </View>

//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>Confirm Password</Text>

//               <TextInput
//                 autoCorrect={false}
//                 onChangeText={(text) => setConfirmPassword(text)}
//                 value={confirmPassword}
//                 // onChangeText={(password) => setForm({ ...form, password })}
//                 placeholder="********"
//                 placeholderTextColor="#6b7280"
//                 style={styles.inputControl}
//                 secureTextEntry={true}
//               />
//             </View>

//             <View style={styles.formAction}>
//               <TouchableOpacity
//                 onPress={() => {
//                   // handle onPress
//                 }}
//               >
//                 <View style={styles.btn}>
//                   <Text
//                     style={styles.btnText}
//                     onPress={() => navigator("Login")}
//                   >
//                     Sign in
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>

//             <Text style={styles.formLink}>Forgot password?</Text>
//           </View>
//         </KeyboardAwareScrollView>

//         <TouchableOpacity
//           onPress={() => {
//             // handle link
//           }}
//           style={{ marginTop: "auto" }}
//         >
//           <Text style={styles.formFooter} onPress={signUp}>
//             Don't have an account?{" "}
//             <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 24,
//     paddingHorizontal: 0,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   title: {
//     fontSize: 31,
//     fontWeight: "700",
//     color: "#1D2A32",
//     marginBottom: 6,
//   },
//   subtitle: {
//     fontSize: 15,
//     fontWeight: "500",
//     color: "#929292",
//   },
//   /** Header */
//   header: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginVertical: 36,
//   },
//   headerImg: {
//     width: 80,
//     height: 80,
//     alignSelf: "center",
//     marginBottom: 36,
//   },
//   /** Form */
//   form: {
//     marginBottom: 24,
//     paddingHorizontal: 24,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   formAction: {
//     marginTop: 4,
//     marginBottom: 16,
//   },
//   formLink: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#075eec",
//     textAlign: "center",
//   },
//   formFooter: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: "#222",
//     textAlign: "center",
//     letterSpacing: 0.15,
//   },
//   /** Input */
//   input: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 17,
//     fontWeight: "600",
//     color: "#222",
//     marginBottom: 8,
//   },
//   inputControl: {
//     height: 50,
//     backgroundColor: "#fff",
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     fontSize: 15,
//     fontWeight: "500",
//     color: "#222",
//     borderWidth: 1,
//     borderColor: "#C9D3DB",
//     borderStyle: "solid",
//   },
//   /** Button */
//   btn: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 30,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     backgroundColor: "#075eec",
//     borderColor: "#075eec",
//   },
//   btnText: {
//     fontSize: 18,
//     lineHeight: 26,
//     fontWeight: "600",
//     color: "#fff",
//   },
// });
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { driverSignup } from "../config/fireBase";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigator = navigation.navigate;

  const signUp = async () => {
    if (!name || !userType || !email || !password || !confirmPassword) {
      return alert("Fill all Please");
    } else if (password != confirmPassword) {
      return alert("Password dosn't match");
    } else {
      await driverSignup({ name, userType, email, password }, navigator);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Driver/Passenger"
        onChangeText={(text) => setUserType(text)}
        value={userType}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.signupButton} onPress={signUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginText}
        onPress={() => navigator("Login")}
      >
        <Text>Already have an account Click here...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signupButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 20,
  },
});

export default SignUp;
