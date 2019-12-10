import { useState } from 'react';

import { apiService } from '../Services';

const useForm = (formSchema) => {
  const [state, setState] = useState(formSchema);

  const validateField = (name, value) => {
    if (name === 'confirm_password') {
      return (value !== state.password.value);
    }
    return ((formSchema[name].regex && !formSchema[name].regex.test(value)) || value === '');
  };

  const validateForm = () => {
    const names = Object.keys(state);
    let result = true;

    for (let i = 0; i < names.length; i += 1) {
      if (state[names[i]].error || !state[names[i]].value) {
        result = false;
        setState((prevState) => ({
          ...prevState,
          [names[i]]: {
            ...prevState[names[i]],
            error: true,
          },
        }));
      }
    }
    return (result);
  };

  const handleChange = (event) => {
    event.persist();

    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        error: validateField(name, value),
        message: formSchema[name].message,
        value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = Object.values(event.target).reduce((obj, current) => {
      let mergeObj = {};

      if (current.nodeName === 'INPUT') {
        mergeObj = { [current.name]: current.value };
      }
      return (Object.assign(obj, mergeObj));
    }, {});

    if (validateForm()) {
      try {
        const res = await apiService.postJson(formSchema.submit.url, data);
        console.log('Ok', res);
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  const fetchUser = async (params) => {
    if (params.error || !params.value) {
      return;
    }
    try {
      const data = await apiService.getJson(`/api/user/get?${params.field}=${params.value}`);

      if (Boolean(data.length) === params.exists) {
        setState((prevState) => ({
          ...prevState,
          [params.name]: {
            ...prevState[params.name],
            error: true,
            message: params.message,
          },
        }));
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return {
    state,
    handleChange,
    handleSubmit,
    fetchUser,
  };
};

export default useForm;
