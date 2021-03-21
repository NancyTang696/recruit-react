import React from 'react'
import { MenuIconButton, Header } from '../../common/components/header'
import { Controller, FormProvider, useForm } from "react-hook-form";
import CreditCard from "../../common/types/credit-card";
import { useAppDispatch, useAppSelector } from '../../store'
import ReactDatePicker from "react-datepicker";
import Button from '@material-ui/core/Button';
import {cardRegistered} from '../../store/reducers/credit-card-reducer'
import "react-datepicker/dist/react-datepicker.css";
import styles from './styles.module.scss'

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

    const dispatch = useAppDispatch();

    const getNumberField = (name: CardStringProperties, fieldDescription: string): JSX.Element => {
        return (
            <div>
                <div>
                    <label htmlFor={name}>{fieldDescription}</label>
                </div>
                <div>
                    <input type="text" id={name} name={name} defaultValue={card.cardDetails[name]}
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^\d{1,50}$/,
                                message: "Entered value does not match format"
                            }
                        })} />
                </div>
                {errors[name] && errors[name]?.type === "required" && <div className={styles.error}>{fieldDescription} required</div>}
                {errors[name] && errors[name]?.type === "pattern" && <div className={styles.error}>Entered value does not match {fieldDescription} format</div>}
            </div>
        );
    };

    const getDateInput = (name: CardProperties): JSX.Element => {
        return (
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                defaultValue={card.cardDetails.expiryDate}
                error={errors[name]}
                render={(props) => (
                    <ReactDatePicker
                        className="input"
                        placeholderText="Select date"
                        onChange={(e) => props.onChange(e)}
                        selected={props.value}
                        dateFormat="dd/MM/yyyy"
                    />
                )}
            />
        );
    };

    const getFields = () => {
        const creditCardNumber: CardStringProperties = "creditCardNumber";
        const expiryDate: CardProperties = "expiryDate";
        const CVC: CardStringProperties = "CVC";

        return (
            <div>
                <div>{getNumberField(creditCardNumber, "Credit Card Number")}</div>
                <div>{getNumberField(CVC, "CVC")}</div>
                <div>{getDateInput(expiryDate)}</div>
            </div>
        )
    }

    const handleRegister = (values: CreditCard) => {
        console.log(values);
        dispatch(cardRegistered(values));
    };


    const renderBody = () => {
        return (
            <div className={styles.container}>
                <div className={styles.userBox}>
                    Wellcome {user.userProfile?.firstName}
                </div>
                <div>
                    <FormProvider {...formMethods}>
                        <form onSubmit={handleSubmit( handleRegister)} noValidate={true}>
                            <div> {getFields()}</div>
                            <Button variant="contained" type="submit">Register</Button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        )
    }


    return (
        <div>
            <div>
                <Header title="Register Card Form" children={<MenuIconButton />} />
            </div>
            {renderBody()}
        </div>
    )
}