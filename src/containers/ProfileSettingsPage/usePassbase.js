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
          "19oKBvNPLy3AhOliHX23p8dK5lbwmGF01QhRQgs0qhR7lGbDVvDA8WXJb0UWW4kEoSv5UE14m4gw5d1OotY7ZJ0Ik07IpCeFvulTKkxkKM2grIOlmgZ9LWZDn9r5nv3r",
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