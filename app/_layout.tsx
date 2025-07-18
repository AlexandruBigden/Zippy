import { BundleInspector } from '../.rorkai/inspector';
import { RorkErrorBoundary } from '../.rorkai/rork-error-boundary';
import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function RootLayout() {
  useEffect(() => {
    // Hide the splash screen after a delay
    const hideSplash = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await SplashScreen.hideAsync();
    };
    
    hideSplash();
  }, []);

  return <BundleInspector><RorkErrorBoundary><RootLayoutNav /></RorkErrorBoundary></BundleInspector>;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen 
        name="food-order/[id]" 
        options={{ 
          headerShown: true,
          headerTitle: "Restaurant Details",
          headerBackTitle: "Back",
        }} 
      />
      <Stack.Screen 
        name="package/index" 
        options={{ 
          headerShown: true,
          headerTitle: "Send Package",
          headerBackTitle: "Back",
        }} 
      />
      <Stack.Screen 
        name="delivery/[id]" 
        options={{ 
          headerShown: true,
          headerTitle: "Delivery Details",
          headerBackTitle: "Back",
        }} 
      />
    </Stack>
  );
}