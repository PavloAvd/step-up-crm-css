import {useField, useForm} from "vee-validate";
import * as yup from 'yup'
import {computed, watch} from "vue";
import { useStore } from "vuex";

export function useInputValidate() {
    const store = useStore()
    const {handleSubmit, isSubmitting, submitCount} = useForm()
    const MAX_NAME_LENGTH = 30
    const {value: feedBackName, handleBlur: fbnBlur} = useField(
        'feedBackName',
        yup
            .string()
            .required("Введіть Ім'я")
            .length(MAX_NAME_LENGTH)
    )


        const submitFeedback = handleSubmit(values => {
            console.log(values);
        })

    // const onSubmit = handleSubmit (async values => {
    //     console.log('values from feedBack', values)
    //     // try {
    //     //     await store.dispatch('login', values)
    //     //     await router.push('/')
    //     // } catch (e) {
    //     //     // console.log(e)
    //     // }
    // })

    return {
        feedBackName,
        fbnBlur,
        isSubmitting,
        submitFeedback
    }
}