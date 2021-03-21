import React from 'react'
import { MenuIconButton, Header } from '../../common/components/header'
import { Controller, FormProvider, useForm } from "react-hook-form";
import CreditCard from "../../common/types/credit-card";
import { useAppDispatch, useAppSelector } from '../../store'

type CardStringProperties = "creditCardNumber" | "CVC";
type CardProperties = CardStringProperties | "expiryDate"

export const RegisterCreditCard = () => {
    const formMethods = useForm<CreditCard>({
        mode: "onBlur",
        reValidateMode: "onChange",
    });

    const { control, errors, formState, trigger, handleSubmit, register } = formMethods;

    debugger;
    const card = useAppSelector(state => state.card);
    const user = useAppSelector(state => state.user);


    return (
        <div>
            <div>
                <Header title="Register Card Form" children={<MenuIconButton />} />
            </div>
        </div>
    )
}