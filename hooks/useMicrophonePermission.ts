import { useState, useEffect } from 'react';

export const useMicrophonePermission = () => {
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  useEffect(() => {
    // Check if browser supports getUserMedia
    if (!navigator.mediaDevices?.getUserMedia) {
      console.warn('getUserMedia is not supported');
      return;
    }

    // Check initial permission state
    navigator.permissions
      .query({ name: 'microphone' as PermissionName })
      .then((result) => {
        setHasPermission(result.state === 'granted');
        
        // Listen for permission changes
        result.onchange = () => {
          setHasPermission(result.state === 'granted');
        };
      });
  }, []);

  const requestPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      return true;
    } catch (error) {
      console.error('Error requesting microphone permission:', error);
      setHasPermission(false);
      return false;
    }
  };

  return { hasPermission, requestPermission };
}; 