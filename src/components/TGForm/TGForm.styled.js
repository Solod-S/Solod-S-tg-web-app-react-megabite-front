import styled from "styled-components";

import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsFillExclamationDiamondFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const FormikWrapper = styled.div`
  padding: "20px";
`;

export const NameIcon = styled(BsFillPersonFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -90%);
  transition: fill 250ms linear;
`;

export const ThemeIcon = styled(BsFillExclamationDiamondFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -90%);
  transition: fill 250ms linear;
`;

export const PhoneIcon = styled(BsFillTelephoneFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -90%);
  transition: fill 250ms linear;
`;

export const MailIcon = styled(MdEmail)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -90%);
  transition: fill 250ms linear;
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-size: ${(p) => p.theme.fontSizes.s};
  line-height: calc(23 / 20);
  text-align: center;
  letter-spacing: 0.03em;
`;

export const Text = styled.p`
  margin-bottom: 12px;
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: calc(23 / 20);
  /* text-align: center; */
  color: ${(p) => p.theme.colors.labelColor};
  letter-spacing: 0.03em;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  /* margin-top: 0; */
  padding-left: 42px;
  padding-bottom: 12px;
  padding-top: 12px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.2);
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${(p) => p.theme.radii.normal};
  margin-bottom: 15px;

  :focus {
    outline: 1px solid ${(p) => p.theme.colors.primaryAccentColor};
  }
`;

export const FileInput = styled.input`
  cursor: pointer;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  /* margin-top: 0; */
  /* padding-left: 42px; */
  text-indent: 33px;
  padding-bottom: 8px;
  padding-top: 12px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.2);
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${(p) => p.theme.radii.normal};
  font-family: ${(p) => p.theme.fontFamily.Roboto};
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeight.normal};
  font-size: ${(p) => p.theme.fontSizes.xxs};
  line-height: calc(14 / 22);
  letter-spacing: 0.01em;
  /* color: rgba(117, 117, 117, 0.5); */
  margin-bottom: 15px;
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

export const TextArea = styled.input`
  :focus {
    outline: 1px solid ${(p) => p.theme.colors.primaryAccentColor};
  }
  ::placeholder {
    font-family: ${(p) => p.theme.fontFamily.Roboto};
    font-style: normal;
    font-weight: ${(p) => p.theme.fontWeight.normal};
    font-size: ${(p) => p.theme.fontSizes.xxs};
    line-height: calc(14 / 22);
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }

  padding: 12px 42px;
  width: 100%;
  height: 120px;
  cursor: pointer;
  resize: none;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: ${(p) => p.theme.radii.normal};
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
