import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'puree-wrpl',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
<<<<<<< Updated upstream
    url: 'http://192.168.0.101:3000',
=======
    url: 'http://192.168.8.163:3000',
>>>>>>> Stashed changes
    cleartext: true
  }
};

export default config;
