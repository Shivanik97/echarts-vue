import { ref } from 'vue';

export const createLoadingOptions = () => {
  return ref({
    text: 'Loading...',
    color: '#be0000',
    textColor: '#000000',
    maskColor: 'rgba(255, 255, 255, 0.8)',
    zlevel: 0,
    fontSize: 16,
    showSpinner: true,
    spinnerRadius: 20,
    lineWidth: 4,
    fontWeight: 400,
    fontStyle: 'normal',
    fontFamily: 'ariana pro',
  });
};
