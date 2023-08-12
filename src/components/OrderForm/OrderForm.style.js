import styled from 'styled-components';

import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdClose } from 'react-icons/md';
import { Form, Field, ErrorMessage } from 'formik';

import checkIcon from '../../images/check.svg';

export const Error = styled(ErrorMessage)`
  color: red;
`;
export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
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

export const Icon = styled(BsFillPersonFill)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(80%, -50%);
  transition: fill 250ms linear;
`;

export const Modal = styled.div`
  position: absolute;
  overflow: auto;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: ${p => p.theme.colors.primaryWhiteColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${p => p.theme.radii.normal};
  overflow: unset;

  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTell}) {
    width: 350px;
    height: 609px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tell}) {
    width: 450px;
    height: 609px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    width: 528px;
    height: 609px;
  }

  @media screen and (max-height: 608px) {
    height: 100vh;
    overflow: auto;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.primaryWhiteColor};
  border-radius: ${p => p.theme.radii.round};
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CloseIcon = styled(MdClose)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    fill: ${p => p.theme.colors.primaryAccentColor};
  }
`;

export const Title = styled.h2`
  margin-bottom: 12px;
  font-size: ${p => p.theme.fontSizes.s};
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
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: calc(14 / 12);
  letter-spacing: 0.01em;
  color: ${p => p.theme.colors.labelColor};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled(Field)`
  padding-left: 42px;
  padding-bottom: 12px;
  padding-top: 12px;
  height: 40px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.2);
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${p => p.theme.radii.normal};

  :focus {
    outline: 1px solid ${p => p.theme.colors.primaryAccentColor};
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
  color: ${p => p.theme.colors.labelColor};
`;

export const TextArea = styled(Field)`
  :focus {
    outline: 1px solid ${p => p.theme.colors.primaryAccentColor};
  }
  ::placeholder {
    font-family: ${p => p.theme.fontFamily.Roboto};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeight.normal};
    font-size: ${p => p.theme.fontSizes.xxs};
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
  border-radius: ${p => p.theme.radii.normal};
  transition: outline 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CheckboxField = styled.div`
  align-items: center;
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSizes.xxxs};
  line-height: calc(24 / 14);
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.labelColor};

  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTell}) {
    font-size: ${p => p.theme.fontSizes.xxxxs};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xxs};
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const ChekboxSquare = styled.span`
  display: block;
  margin-right: 8px;
  width: 16px;
  height: 15px;
  border: 1px solid #212121;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ChekboxInput = styled(Field)`
  :checked + ${ChekboxSquare} {
    background-image: url(${checkIcon});
    width: 16px;
    height: 15px;
    background-size: contain;
    background-color: ${p => p.theme.colors.primaryAccentColor};
    border-color: ${p => p.theme.colors.primaryAccentColor};
    background-origin: border-box;
  }
  :focus + ${ChekboxSquare}, :hover + ${ChekboxSquare} {
    border-color: ${p => p.theme.colors.primaryAccentColor};
  }

  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const ChekboxLink = styled.a`
  color: ${p => p.theme.colors.primaryAccentColor};
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
  border-radius: ${p => p.theme.radii.normal};

  font-weight: ${p => p.theme.fontWeight.bolt};
  font-size: 16px;
  line-height: 30px;
  border: none;
  letter-spacing: 0.06em;

  cursor: pointer;
  background-color: ${p => p.theme.colors.primaryAccentColor};
  color: ${p => p.theme.colors.primaryWhiteColor};
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
