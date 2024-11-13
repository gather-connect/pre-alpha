// TODO: email OTP verification
// TODO: phone auth w sinch sms
// TODO: configure SMTP w pocketbase & onesignal
// TODO: add authenticated flow (render routes if authToken is valid)
// TEST: if username, password auth is valid
// FIXME: replace action button on toast with custom styling
// FIXME: email handling with pocketbase & stmp configuration
// FIXME: add error handling for error: "Failed to create record"
// FIXME: automatic db sanitization for storage & testing purposes
// FIXME: unhandled promise during user registration--issue with writing alias to db
// FIXME: ensure user account is not created until after completion of onboarding process

import pb from "@/pb.config";
import { useRouter } from "expo-router";
import { toast } from 'sonner-native';

import useAuth from '@/hooks/useAuth';
import { userRegistrationData } from "@/types/auth";

const EmailAuthProvider = () => {
  const router = useRouter();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  async function isValidUsername(username: string) {
    const collection = "users";
    const filter = `name="${username}"`;

    const records = await pb.collection(collection).getList(1, 1, { filter });

    return records.totalItems === 0;
  }

  function isValidEmail(email: string) {
    if (emailRegex.test(email) === true) {
      return true;
    }

    toast.error("Your email's invalid. Try again!", {
      onAutoClose: () => console.log('Auto-closed!'),
      onDismiss: () => console.log('Manually dismissed!'),
    });
    console.log(email);

    return false;
  }

  function isValidPassword(password: string, passwordConfirm: string) {
    if (password !== passwordConfirm) {
      toast.error("Passwords don't match", {
        onAutoClose: () => console.log('Auto-closed!'),
        onDismiss: () => console.log('Manually dismissed!'),
      });
      return false;
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters", {
        onAutoClose: () => console.log('Auto-closed!'),
        onDismiss: () => console.log('Manually dismissed!'),
      });

      return false;
    }

    console.log(password, passwordConfirm);

    return true;
  }

  async function handleSignUp(userData: userRegistrationData): Promise<void> {
    // const match = nameRegex.exec(email);
    if (isValidEmail(userData.email) && isValidPassword(userData.password, userData.passwordConfirm)) {
      try {
        await pb.collection("users").create(userData);
        router.navigate("/(auth)/forms/");
      } catch (error: any) {
        toast.error(error.message.toString(), { 
          onAutoClose: () => console.log('Auto-closed!'),
          onDismiss: () => console.log('Manually dismissed!'),
        });
      }
    }

    console.log(data);
  }

  async function handleSignIn(input: string, password: string) {
    try {
      let authData;

      if (isValidEmail(input)) {
        authData = await pb
          .collection("users")
          .authWithPassword(input, password);
      } else {
        const filter = `username="${input}"`;
        const records = await pb.collection("users").getList(1, 1, { filter });

        if (records.totalItems === 0) {
          throw new Error("Username or Email is invalid.");
        }

        const user = records.items[0];
        authData = await pb
          .collection("users")
          .authWithPassword(user.email, password);
      }

      router.navigate("/(protected)/timeline");
      return authData;
    } catch (error: any) {
      toast.error(error.message);

      if (error.message.toString() === "Failed to authenticate.") {
        toast("Invalid credentials", {
          description: "If you forgot your password, click the button below to reset it.",
          action: {
            label: "Reset password",
            onClick: () => router.navigate("/(auth)/reset_password/"),
          },
          onAutoClose: () => console.log('Auto-closed!'),
          onDismiss: () => console.log('Manually dismissed!'),
          richColors: false
        });
        router.navigate("/login/");
      }
    }
  }

  async function handleSignOut() {
    pb.authStore.clear();
    router.navigate("/");
  }

  async function forgotPassword(email: string) {
    try {
      await pb.collection("users").requestPasswordReset(email);
    } catch (error: any) {
      toast.error(error.message.toString(), {
        onAutoClose: () => console.log('Auto-closed!'),
        onDismiss: () => console.log('Manually dismissed!'),
      });     
    }
  }

  async function verifyEmail(email: string) {
    try {
      await pb.collection("users").requestVerification(email);
    } catch (error: any) {
      toast.error(error.message.toString(), {
        onAutoClose: () => console.log('Auto-closed!'),
        onDismiss: () => console.log('Manually dismissed!'),
      }); 
    }
  }

  return {
    isValidUsername,
    isValidEmail,
    isValidPassword,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    forgotPassword,
    verifyEmail
  };
};

export default EmailAuthProvider;
