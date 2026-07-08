import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fireTraining: resolve(__dirname, 'pages/fire-training.html'),
        cprTraining: resolve(__dirname, 'pages/cpr-training.html'),
        ppeTraining: resolve(__dirname, 'pages/ppe-training.html'),
        safetySupplies: resolve(__dirname, 'pages/safety-supplies.html'),
        serviceAreas: resolve(__dirname, 'pages/service-areas.html'),
        cprEnrollment: resolve(__dirname, 'pages/forms/cpr-enrollment.html'),
        fireEnrollment: resolve(__dirname, 'pages/forms/fire-enrollment.html'),
        procurement: resolve(__dirname, 'pages/forms/procurement.html'),
      },
    },
  },
});
