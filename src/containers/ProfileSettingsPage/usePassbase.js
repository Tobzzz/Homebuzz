import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function usePassbase(props) {
  const { onFinished, prefilled } = props;

  const ref = useRef();

  const invokePassabe = () => {
    ref.current.children[0].click();
  };

  useEffect(() => {
    async function addPassbaseButton() {
      const PassbaseButton = await import('@passbase/button');

      if (PassbaseButton && ref.current) {
        PassbaseButton.default.renderButton(
          ref.current,
          onFinished,
          "CH6y7QKkAnA3UXTrwU3zHmSOiyfFTVbQp3cRvQ0urdJu2HTQ6EcTh1TNnMNUmG6g",
          {
            prefillAttributes: { email: prefilled?.email },
          },
        );
      }
    }

    addPassbaseButton().catch(() => {
      // do nothing in case if loading of library fails
    });
  }, [prefilled]);

  return { ref, invokePassabe };
}

usePassbase.PropTypes = {
  onFinished: PropTypes.func.isRequired,
  prefilled: PropTypes.shape({ email: PropTypes.string }),
};

usePassbase.defaultProps = {
  onFinished: () => {},
  prefilled: { email: '' },
};

export default usePassbase;