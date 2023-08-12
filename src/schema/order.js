import * as yup from 'yup';

let orderSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'That doesnt looks like name')
    .typeError()
    .required(),
  mail: yup
    .string()
    .min(3, 'That doesnt looks like email')
    .typeError()
    .required(),
  pnone: yup
    .string()
    .min(3, 'That doesnt looks like number')
    .typeError()
    .required(),
  comment: yup
    .string()
    .min(1, 'That doesnt looks like comment')
    .typeError()
    .required(),
  policy: yup
    .boolean()
    .oneOf([true], 'You need to agree with terms of use')
    .required(),
});

export default orderSchema;
