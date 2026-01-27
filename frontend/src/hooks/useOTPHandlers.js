export const useOTPHandlers = (field, inputRefs) => {
  const handleChange = (index, e) => {
    const value = e.target.value;
    
    if (value && !/^\d$/.test(value)) return;
    
    const currentPin = (field.value || '').padEnd(6, '').split('');
    currentPin[index] = value;
    const newPin = currentPin.join('').replace(/ /g, '');
    
    field.onChange(newPin);
    
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const currentPin = (field.value || '').padEnd(6, '').split('');
      
      if (!currentPin[index] || currentPin[index] === ' ') {
        if (index > 0) {
          currentPin[index - 1] = '';
          field.onChange(currentPin.join('').replace(/ /g, ''));
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        currentPin[index] = '';
        field.onChange(currentPin.join('').replace(/ /g, ''));
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, 6);
    field.onChange(pastedData);
    
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  return { handleChange, handleKeyDown, handlePaste };
};