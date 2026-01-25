export const useOTPHandlers = (field, inputRefs) => {
  const handleChange = (index, e) => {
    const value = e.target.value;
    
    // Only allow single digit numbers
    if (value && !/^\d$/.test(value)) return;
    
    const currentPin = (field.value || '').padEnd(6, '').split('');
    currentPin[index] = value;
    const newPin = currentPin.join('').replace(/ /g, '');
    
    field.onChange(newPin);
    
    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const currentPin = (field.value || '').padEnd(6, '').split('');
      
      if (!currentPin[index] || currentPin[index] === ' ') {
        // If current field is empty, go back and clear previous
        if (index > 0) {
          currentPin[index - 1] = '';
          field.onChange(currentPin.join('').replace(/ /g, ''));
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        // Clear current field
        currentPin[index] = '';
        field.onChange(currentPin.join('').replace(/ /g, ''));
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '').slice(0, 6);
    field.onChange(pastedData);
    
    // Focus the next empty field or last field
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  return { handleChange, handleKeyDown, handlePaste };
};