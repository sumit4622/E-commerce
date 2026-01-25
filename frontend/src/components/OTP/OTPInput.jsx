import { useOTPHandlers } from './useOTPHandlers';
import { Separator } from "radix-ui";
import PropTypes from 'prop-types';

export const OTPInput = ({ field, inputRefs, otpBox }) => {
  const { handleChange, handleKeyDown, handlePaste } = useOTPHandlers(field, inputRefs);
  const pinArray = (field.value || '').padEnd(6, '').split('');

  const getInputValue = (index) => {
    return pinArray[index] === ' ' ? '' : pinArray[index];
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        ref={(el) => inputRefs.current[0] = el}
        type="text"
        inputMode="numeric"
        maxLength={1}
        className={otpBox}
        value={getInputValue(0)}
        onChange={(e) => handleChange(0, e)}
        onKeyDown={(e) => handleKeyDown(0, e)}
        onPaste={handlePaste}
      />
      <input
        ref={(el) => inputRefs.current[1] = el}
        type="text"
        inputMode="numeric"
        maxLength={1}
        className={otpBox}
        value={getInputValue(1)}
        onChange={(e) => handleChange(1, e)}
        onKeyDown={(e) => handleKeyDown(1, e)}
      />
      <input
        ref={(el) => inputRefs.current[2] = el}
        type="text"
        inputMode="numeric"
        maxLength={1}
        className={otpBox}
        value={getInputValue(2)}
        onChange={(e) => handleChange(2, e)}
        onKeyDown={(e) => handleKeyDown(2, e)}
      />

      <Separator.Root aria-hidden className="w-2" />

      <input
        ref={(el) => inputRefs.current[3] = el}
        type="text"
        inputMode="numeric"
        maxLength={1}
        className={otpBox}
        value={getInputValue(3)}
        onChange={(e) => handleChange(3, e)}
        onKeyDown={(e) => handleKeyDown(3, e)}
      />
      <input
        ref={(el) => inputRefs.current[4] = el}
        type="text"
        inputMode="numeric"
        maxLength={1}
        className={otpBox}
        value={getInputValue(4)}
        onChange={(e) => handleChange(4, e)}
        onKeyDown={(e) => handleKeyDown(4, e)}
      />
      <input
        ref={(el) => inputRefs.current[5] = el}
        type="text"
        inputMode="numeric"
        maxLength={1}
        className={otpBox}
        value={getInputValue(5)}
        onChange={(e) => handleChange(5, e)}
        onKeyDown={(e) => handleKeyDown(5, e)}
        onBlur={field.onBlur}
      />
    </div>
  );
};

OTPInput.propTypes = {
  field: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  inputRefs: PropTypes.shape({
    current: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
  otpBox: PropTypes.string.isRequired,
};