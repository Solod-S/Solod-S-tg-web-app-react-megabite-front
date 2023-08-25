import styled from "styled-components";

import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsFillExclamationDiamondFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Form, Field, ErrorMessage } from "formik";

export const FormikWrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const ThemeIcon = styled(BsFillExclamationDiamondFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const NameIcon = styled(BsFillPersonFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const MailIcon = styled(MdEmail)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: calc(23 / 20);
  text-align: center;
  letter-spacing: 0.03em;
`;

export const ForM = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  margin-bottom: 4px;
  font-size: ${(p) => p.theme.fontSizes.xs};
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.labelColor};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  padding-left: 42px;
  padding-bottom: 12px;
  padding-top: 12px;
  height: 45px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.2);
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${(p) => p.theme.radii.normal};

  :focus {
    outline: 1px solid ${(p) => p.theme.colors.primaryAccentColor};
  }
`;

export const TextAreaField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  margin-bottom: 20px;
`;

export const TextAreaLabel = styled.label`
  margin-bottom: 4px;
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.labelColor};
`;

export const TextArea = styled(Field)`
  :focus {
    outline: 1px solid ${(p) => p.theme.colors.primaryAccentColor};
  }
  ::placeholder {
    font-family: ${(p) => p.theme.fontFamily.Roboto};
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeight.normal};
    font-size: ${(p) => p.theme.fontSizes.xs};
    line-height: calc(14 / 22);
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }

  padding: 12px 16px;
  width: 100%;
  height: 120px;
  cursor: pointer;
  resize: none;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: ${(p) => p.theme.radii.normal};
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Button = styled.button`
  :hover,
  :focus {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    min-width: none;
  }

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 55px;
  border-radius: ${(p) => p.theme.radii.normal};

  font-weight: ${(p) => p.theme.fontWeight.bolt};
  font-size: 16px;
  line-height: 30px;
  border: none;
  letter-spacing: 0.06em;

  cursor: pointer;
  background-color: ${({ isSubmitting }) =>
    isSubmitting
      ? (p) => p.theme.colors.primaryTextColor
      : (p) => p.theme.colors.primaryAccentColor};
  /* background-color: ${(p) => p.theme.colors.primaryAccentColor}; */
  color: ${(p) => p.theme.colors.primaryWhiteColor};
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
